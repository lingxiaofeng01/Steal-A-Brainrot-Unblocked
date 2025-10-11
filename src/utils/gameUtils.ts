import { allGames, isRealGame, Game } from '../data/games';

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
 * @param excludeSlug 要排除的游戏slug（通常是当前游戏）
 * @param limit 返回的游戏数量，默认12个
 * @returns 最新游戏列表
 */
export function getLatestGames(excludeSlug?: string, limit: number = 12): Game[] {
  return allGames
    .filter(g => isRealGame(g) && g.slug !== excludeSlug)
    .sort((a, b) => {
      if (!isRealGame(a) || !isRealGame(b)) return 0;
      const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
      const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
      return dateB - dateA; // 降序排列
    })
    .slice(0, limit);
}

/**
 * 获取所有游戏（包括占位符）
 * @param limit 返回的游戏数量
 * @returns 游戏列表
 */
export function getAllGames(limit?: number): Game[] {
  if (limit) {
    return allGames.slice(0, limit);
  }
  return allGames;
}

/**
 * 根据标签筛选游戏
 * @param tag 标签名称
 * @returns 包含该标签的游戏列表
 */
export function getGamesByTag(tag: string): Game[] {
  return allGames.filter(g => {
    if (!isRealGame(g)) return false;
    const gameTags = g.tags || [];
    return gameTags.some(t => t.toLowerCase() === tag.toLowerCase());
  });
}

/**
 * 获取热门游戏（评分最高或播放次数最多）
 * @param limit 返回的游戏数量，默认12个
 * @returns 热门游戏列表
 */
export function getHotGames(limit: number = 12): Game[] {
  // 目前按最新排序，未来可以根据评分或播放次数排序
  return getLatestGames(undefined, limit);
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

