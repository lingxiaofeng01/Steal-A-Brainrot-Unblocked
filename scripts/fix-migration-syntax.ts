import * as fs from 'fs';
import * as path from 'path';

/**
 * 修复迁移文件中的 game_tags 语法错误
 * 将 INSERT INTO game_tags (game_slug, tag_slug) 
 * 改为 INSERT INTO game_tags (game_id, tag_id) SELECT ...
 */

const migrationsDir = path.join(__dirname, '../supabase/migrations');

// 获取所有需要修复的迁移文件
const files = fs.readdirSync(migrationsDir)
  .filter(f => f.startsWith('202') && f.endsWith('.sql'))
  .map(f => path.join(migrationsDir, f));

console.log('🔧 Fixing migration syntax errors...\n');
console.log('='.repeat(60));

let fixedCount = 0;
let skippedCount = 0;

for (const filePath of files) {
  const fileName = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  
  // 修复 game_tags 插入语法
  // 模式 1: INSERT INTO game_tags (game_slug, tag_slug, created_at) SELECT 'slug', slug, NOW() FROM tags WHERE...
  const gameTagsPattern1 = /INSERT INTO game_tags \(game_slug, tag_slug, created_at\)\s*SELECT '([^']+)', slug, NOW\(\)\s*FROM tags\s*WHERE slug IN \(([^)]+)\)\s*ON CONFLICT \(game_slug, tag_slug\) DO NOTHING;/g;

  if (content.match(gameTagsPattern1)) {
    content = content.replace(
      gameTagsPattern1,
      (match, gameSlug, tagList) => {
        return `INSERT INTO game_tags (game_id, tag_id)\nSELECT g.id, t.id\nFROM games g, tags t\nWHERE g.slug = '${gameSlug}' AND t.slug IN (${tagList})\nON CONFLICT (game_id, tag_id) DO NOTHING;`;
      }
    );
    modified = true;
  }
  
  // 修复 game_categories 插入语法（如果存在）
  const gameCategoriesPattern = /INSERT INTO game_categories \(game_slug, category_slug, created_at\)\s*SELECT '([^']+)', slug, NOW\(\)\s*FROM categories\s*WHERE slug IN \(([^)]+)\)\s*ON CONFLICT \(game_slug, category_slug\) DO NOTHING;/g;

  if (content.match(gameCategoriesPattern)) {
    content = content.replace(
      gameCategoriesPattern,
      (match, gameSlug, categoryList) => {
        return `INSERT INTO game_categories (game_id, category_id)\nSELECT g.id, c.id\nFROM games g, categories c\nWHERE g.slug = '${gameSlug}' AND c.slug IN (${categoryList})\nON CONFLICT (game_id, category_id) DO NOTHING;`;
      }
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Fixed: ${fileName}`);
    fixedCount++;
  } else {
    skippedCount++;
  }
}

console.log('='.repeat(60));
console.log(`\n✅ Migration syntax fix completed!`);
console.log(`   Fixed: ${fixedCount} files`);
console.log(`   Skipped: ${skippedCount} files (no changes needed)`);
console.log('\n💡 Next step: Regenerate batch migration script');

