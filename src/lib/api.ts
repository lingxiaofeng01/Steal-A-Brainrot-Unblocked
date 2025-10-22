import { supabase } from './supabase';
import type { Game } from './types';

export async function getAllGames(): Promise<Game[]> {
  const { data: games, error } = await supabase
    .from('games')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching games:', error);
    return [];
  }

  const gamesWithRelations = await Promise.all(
    (games || []).map(game => enrichGameData(game))
  );

  return gamesWithRelations;
}

export async function getFeaturedGames(): Promise<Game[]> {
  const { data: games, error } = await supabase
    .from('games')
    .select('*')
    .eq('is_active', true)
    .eq('is_featured', true)
    .order('play_count', { ascending: false })
    .limit(6);

  if (error) {
    console.error('Error fetching featured games:', error);
    return [];
  }

  const gamesWithRelations = await Promise.all(
    (games || []).map(game => enrichGameData(game))
  );

  return gamesWithRelations;
}

export async function getGameBySlug(slug: string): Promise<Game | null> {
  const { data: game, error } = await supabase
    .from('games')
    .select('*')
    .eq('slug', slug)
    .eq('is_active', true)
    .maybeSingle();

  if (error) {
    console.error('Error fetching game:', error);
    return null;
  }
  if (!game) return null;

  return enrichGameData(game);
}

export async function getGamesByCategory(categorySlug: string): Promise<Game[]> {
  const { data: category } = await supabase
    .from('categories')
    .select('id')
    .eq('slug', categorySlug)
    .maybeSingle();

  if (!category) return [];

  const { data: gameCategories } = await supabase
    .from('game_categories')
    .select('game_id')
    .eq('category_id', category.id);

  if (!gameCategories || gameCategories.length === 0) return [];

  const gameIds = gameCategories.map(gc => gc.game_id);

  const { data: games, error } = await supabase
    .from('games')
    .select('*')
    .eq('is_active', true)
    .in('id', gameIds)
    .order('play_count', { ascending: false });

  if (error) {
    console.error('Error fetching games by category:', error);
    return [];
  }

  const gamesWithRelations = await Promise.all(
    (games || []).map(game => enrichGameData(game))
  );

  return gamesWithRelations;
}

export async function searchGames(query: string): Promise<Game[]> {
  const searchQuery = query.trim();

  if (!searchQuery) {
    return [];
  }

  try {
    // 首先尝试按标题搜索
    const { data: games, error } = await supabase
      .from('games')
      .select('*')
      .eq('is_active', true)
      .ilike('title', `%${searchQuery}%`)
      .order('play_count', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Error searching games by title:', {
        message: error.message,
        code: error.code,
        details: error.details,
        hint: error.hint,
        query: searchQuery
      });

      // 如果标题搜索失败，尝试按描述搜索
      const { data: descGames, error: descError } = await supabase
        .from('games')
        .select('*')
        .eq('is_active', true)
        .ilike('description', `%${searchQuery}%`)
        .order('play_count', { ascending: false })
        .limit(20);

      if (descError) {
        console.error('Error searching by description:', {
          message: descError.message,
          code: descError.code,
          details: descError.details,
          hint: descError.hint,
          query: searchQuery
        });
        return [];
      }

      const gamesWithRelations = await Promise.all(
        (descGames || []).map(game => enrichGameData(game))
      );
      return gamesWithRelations;
    }

    const gamesWithRelations = await Promise.all(
      (games || []).map(game => enrichGameData(game))
    );

    return gamesWithRelations;
  } catch (error) {
    console.error('Search error:', {
      error,
      message: error instanceof Error ? error.message : String(error),
      query
    });
    return [];
  }
}

export async function getAllCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name');

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
  return data || [];
}

export async function incrementPlayCount(gameId: string) {
  const { error } = await supabase.rpc('increment_play_count', { game_id: gameId });
  if (error) console.error('Failed to increment play count:', error);
}

async function enrichGameData(dbGame: any): Promise<Game> {
  const [categoriesData, tagsData, platformsData, seoData] = await Promise.all([
    supabase
      .from('game_categories')
      .select('categories(slug, name, icon)')
      .eq('game_id', dbGame.id),
    supabase
      .from('game_tags')
      .select('tags(slug, name)')
      .eq('game_id', dbGame.id),
    supabase
      .from('game_platforms')
      .select('platforms(slug, name)')
      .eq('game_id', dbGame.id),
    supabase
      .from('game_seo')
      .select('*')
      .eq('game_id', dbGame.id)
      .maybeSingle(),
  ]);

  return {
    id: dbGame.id,
    slug: dbGame.slug,
    title: dbGame.title,
    subtitle: dbGame.subtitle,
    cover: dbGame.cover,
    playUrl: dbGame.play_url,
    description: dbGame.description,
    rating: Number(dbGame.rating) || 0,
    playCount: dbGame.play_count || 0,
    duration: dbGame.duration,
    releasedAt: dbGame.released_at,
    isFeatured: dbGame.is_featured,
    isActive: dbGame.is_active,
    categories: categoriesData.data?.map((item: any) => item.categories).filter(Boolean) || [],
    tags: tagsData.data?.map((item: any) => item.tags).filter(Boolean) || [],
    platforms: platformsData.data?.map((item: any) => item.platforms).filter(Boolean) || [],
    seo: seoData.data ? {
      metaTitle: seoData.data.meta_title,
      metaDescription: seoData.data.meta_description,
      keywords: seoData.data.keywords,
      ogImage: seoData.data.og_image,
    } : undefined,
  };
}
