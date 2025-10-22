import { supabase, GameStats, isSupabaseAvailable } from '../lib/supabase';

/**
 * 增加游戏播放量
 * @param slug 游戏唯一标识符
 * @returns 新的播放量，如果失败返回 0
 */
export async function incrementPlayCount(slug: string): Promise<number> {
  if (!isSupabaseAvailable()) {
    console.warn('Supabase not available, skipping play count increment');
    return 0;
  }

  try {
    const { data, error } = await supabase!.rpc('increment_play_count', {
      game_slug: slug
    });

    if (error) {
      console.error('Error incrementing play count:', error);
      return 0;
    }

    console.log(`✅ Play count incremented for ${slug}: ${data}`);
    return data as number;
  } catch (err) {
    console.error('Failed to increment play count:', err);
    return 0;
  }
}

/**
 * 增加游戏浏览量
 * @param slug 游戏唯一标识符
 * @returns 新的浏览量，如果失败返回 0
 */
export async function incrementViewCount(slug: string): Promise<number> {
  if (!isSupabaseAvailable()) {
    console.warn('Supabase not available, skipping view count increment');
    return 0;
  }

  try {
    const { data, error } = await supabase!.rpc('increment_view_count', {
      game_slug: slug
    });

    if (error) {
      console.error('Error incrementing view count:', error);
      return 0;
    }

    return data as number;
  } catch (err) {
    console.error('Failed to increment view count:', err);
    return 0;
  }
}

/**
 * 获取所有游戏统计数据
 * @returns 游戏统计数据的映射表 (slug -> stats)
 */
export async function getAllGameStats(): Promise<Record<string, GameStats>> {
  if (!isSupabaseAvailable()) {
    console.warn('Supabase not available, returning empty stats');
    return {};
  }

  try {
    const { data, error } = await supabase!
      .from('game_stats')
      .select('*');

    if (error) {
      console.error('Error fetching game stats:', error);
      return {};
    }

    // 转换为 slug -> stats 的映射
    const statsMap: Record<string, GameStats> = {};
    data?.forEach((stat: any) => {
      statsMap[stat.slug] = {
        slug: stat.slug,
        play_count: stat.play_count || 0,
        view_count: stat.view_count || 0,
        last_played_at: stat.last_played_at,
        created_at: stat.created_at,
        updated_at: stat.updated_at
      };
    });

    console.log(`✅ Fetched stats for ${Object.keys(statsMap).length} games`);
    return statsMap;
  } catch (err) {
    console.error('Failed to fetch game stats:', err);
    return {};
  }
}

/**
 * 获取单个游戏的统计数据
 * @param slug 游戏唯一标识符
 * @returns 游戏统计数据，如果不存在返回 null
 */
export async function getGameStats(slug: string): Promise<GameStats | null> {
  if (!isSupabaseAvailable()) {
    console.warn('Supabase not available, returning null');
    return null;
  }

  try {
    const { data, error } = await supabase!
      .from('game_stats')
      .select('*')
      .eq('slug', slug)
      .single();

    if (error) {
      console.error('Error fetching game stats:', error);
      return null;
    }

    return {
      slug: data.slug,
      play_count: data.play_count || 0,
      view_count: data.view_count || 0,
      last_played_at: data.last_played_at,
      created_at: data.created_at,
      updated_at: data.updated_at
    };
  } catch (err) {
    console.error('Failed to fetch game stats:', err);
    return null;
  }
}

/**
 * 批量获取游戏统计数据（带缓存）
 */
let cachedStats: Record<string, GameStats> | null = null;
let cacheTime = 0;
const CACHE_DURATION = 60000; // 1分钟缓存

export async function getAllGameStatsWithCache(): Promise<Record<string, GameStats>> {
  const now = Date.now();
  
  // 如果缓存有效，直接返回
  if (cachedStats && now - cacheTime < CACHE_DURATION) {
    console.log('📦 Using cached game stats');
    return cachedStats;
  }
  
  // 获取新数据
  const stats = await getAllGameStats();
  cachedStats = stats;
  cacheTime = now;
  
  return stats;
}

/**
 * 清除缓存
 */
export function clearStatsCache(): void {
  cachedStats = null;
  cacheTime = 0;
  console.log('🗑️ Stats cache cleared');
}

