// 有聚合页面的标签列表（2个及以上游戏）
export const TAGS_WITH_PAGES = [
  'Brainrot',
  'Casual',
  'Meme',
  'Clicker',
  'Roblox',
  'Puzzle',
  'Idle',
  'Funny',
  'Strategy',
  'Adventure',
  'Brain',
  'Arcade',
];

// 检查标签是否有聚合页面
export function hasTagPage(tag: string): boolean {
  return TAGS_WITH_PAGES.includes(tag);
}

// 获取标签的URL slug
export function getTagSlug(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, '-');
}

