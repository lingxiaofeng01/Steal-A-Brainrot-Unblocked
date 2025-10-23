import { allGames, isRealGame, Game, GameData } from '../data/games';
import { getAllGameStatsWithCache } from '../services/gameStatsService';

/**
 * 获取相关游戏（通过标签匹配）
 * @param currentGameSlug 当前游戏的slug
 * @param currentGameTags 当前游戏的标签
 * @param limit 返回的游戏数量，默认6个
 * @returns 相关游戏列表
 */
export function getRelatedGames(
  currentGameSlug: string,
  currentGameTags: string[] = [],
  limit: number = 6
): Game[] {
  // 计算每个游戏与当前游戏的标签匹配度
  const gamesWithScore = allGames
    .filter(g => isRealGame(g) && g.slug !== currentGameSlug)
    .map(g => {
      if (!isRealGame(g)) return { game: g, score: 0 };
      
      // 计算共同标签数量
      const gameTags = g.tags || [];
      const commonTags = gameTags.filter(tag => currentGameTags.includes(tag));
      
      return {
        game: g,
        score: commonTags.length
      };
    })
    .filter(item => item.score > 0) // 只保留有共同标签的游戏
    .sort((a, b) => b.score - a.score); // 按匹配度降序排列

  // 取前N个匹配度最高的游戏
  const relatedGames = gamesWithScore.slice(0, limit).map(item => item.game);
  
  // 如果相关游戏不足，用最新游戏补充
  if (relatedGames.length < limit) {
    const remainingCount = limit - relatedGames.length;
    const relatedSlugs = new Set(relatedGames.map(g => isRealGame(g) ? g.slug : ''));
    
    const additionalGames = allGames
      .filter(g => isRealGame(g) && g.slug !== currentGameSlug && !relatedSlugs.has(g.slug))
      .sort((a, b) => {
        if (!isRealGame(a) || !isRealGame(b)) return 0;
        const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
        const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, remainingCount);
    
    return [...relatedGames, ...additionalGames];
  }
  
  return relatedGames;
}

/**
 * 获取最新游戏（按发布日期排序）
 * 遵循 CrazyCattle3D 的逻辑：field_order = "publish_date", order_type = "DESC"
 * @param excludeSlug 要排除的游戏slug（通常是当前游戏）
 * @param limit 返回的游戏数量，默认20个（与CrazyCattle3D一致）
 * @returns 最新游戏列表
 */
export function getLatestGames(excludeSlug?: string, limit: number = 20): Game[] {
  return allGames
    .filter(g => isRealGame(g) && g.slug !== excludeSlug)
    .sort((a, b) => {
      if (!isRealGame(a) || !isRealGame(b)) return 0;
      const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
      const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
      return dateB - dateA; // 降序排列（最新的在前）
    })
    .slice(0, limit);
}

/**
 * 获取所有游戏（包括占位符）- 按发布日期降序排列
 * @param limit 返回的游戏数量
 * @returns 游戏列表
 */
export function getAllGames(limit?: number): Game[] {
  // 按发布日期降序排列（最新的在前）
  const sortedGames = [...allGames].sort((a, b) => {
    if (!isRealGame(a) || !isRealGame(b)) return 0;
    const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
    const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
    return dateB - dateA; // 降序排列
  });

  if (limit) {
    return sortedGames.slice(0, limit);
  }
  return sortedGames;
}

/**
 * 根据标签筛选游戏
 * @param tag 标签名称
 * @returns 包含该标签的游戏列表
 */
export function getGamesByTag(tag: string): Game[] {
  if (!tag) return [];

  return allGames.filter(g => {
    if (!isRealGame(g)) return false;
    const gameTags = g.tags || [];
    return gameTags.some(t => t && t.toLowerCase() === tag.toLowerCase());
  });
}

/**
 * 获取热门游戏（按播放次数排序）- 同步版本
 * 遵循 CrazyCattle3D 的逻辑：field_order = "views", order_type = "DESC"
 * 使用本地数据，不从 Supabase 获取
 * @param limit 返回的游戏数量，默认20个（与CrazyCattle3D一致）
 * @returns 热门游戏列表
 */
export function getHotGames(limit: number = 20): Game[] {
  return allGames
    .filter(g => isRealGame(g))
    .sort((a, b) => {
      if (!isRealGame(a) || !isRealGame(b)) return 0;
      const playCountA = a.playCount || 0;
      const playCountB = b.playCount || 0;
      return playCountB - playCountA; // 降序排列（播放量从高到低）
    })
    .slice(0, limit);
}

/**
 * 获取热门游戏（按播放次数排序）- 异步版本
 * 从 Supabase 获取实时播放量数据
 * @param limit 返回的游戏数量，默认20个
 * @returns 热门游戏列表（带实时播放量）
 */
export async function getHotGamesWithStats(limit: number = 20): Promise<GameData[]> {
  try {
    // 获取 Supabase 统计数据
    const statsMap = await getAllGameStatsWithCache();

    // 合并本地数据和 Supabase 数据
    const gamesWithStats = allGames
      .filter(g => isRealGame(g))
      .map(game => {
        if (!isRealGame(game)) return game;

        // 使用 Supabase 的实时数据，如果没有则使用默认值
        const stats = statsMap[game.slug];
        return {
          ...game,
          playCount: stats?.play_count || game.playCount || 0
        };
      }) as GameData[];

    // 按播放量降序排序
    gamesWithStats.sort((a, b) => {
      const playCountA = a.playCount || 0;
      const playCountB = b.playCount || 0;
      return playCountB - playCountA;
    });

    return gamesWithStats.slice(0, limit);
  } catch (err) {
    console.error('Failed to get hot games with stats, using fallback:', err);
    // 如果失败，使用本地数据
    return getHotGames(limit).filter(g => isRealGame(g)) as GameData[];
  }
}

/**
 * 获取新游戏（getLatestGames 的别名，语义更清晰）
 * @param excludeSlug 要排除的游戏slug
 * @param limit 返回的游戏数量，默认20个
 * @returns 新游戏列表
 */
export function getNewGames(excludeSlug?: string, limit: number = 20): Game[] {
  return getLatestGames(excludeSlug, limit);
}

/**
 * 随机获取游戏
 * @param excludeSlug 要排除的游戏slug
 * @param limit 返回的游戏数量
 * @returns 随机游戏列表
 */
export function getRandomGames(excludeSlug?: string, limit: number = 6): Game[] {
  const availableGames = allGames.filter(g => isRealGame(g) && g.slug !== excludeSlug);

  // Fisher-Yates 洗牌算法
  const shuffled = [...availableGames];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, limit);
}

