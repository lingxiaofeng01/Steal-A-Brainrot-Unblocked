import * as fs from 'fs';
import * as path from 'path';

/**
 * 修复迁移文件中的 game_comments 字段名
 * content → comment_text
 * 移除 updated_at 字段
 */

const migrationsDir = path.join(__dirname, '../supabase/migrations');

// 获取所有迁移文件
const files = fs.readdirSync(migrationsDir)
  .filter(f => f.endsWith('.sql'))
  .map(f => path.join(migrationsDir, f));

console.log('🔧 Fixing game_comments field names...\n');
console.log('='.repeat(60));

let fixedCount = 0;

for (const filePath of files) {
  const fileName = path.basename(filePath);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;
  
  // 修复 1: content → comment_text
  if (content.includes('game_comments') && content.includes('content,')) {
    content = content.replace(
      /INSERT INTO game_comments \([^)]*\buser_email,\s*content,/g,
      (match) => match.replace('content,', 'comment_text,')
    );
    modified = true;
  }
  
  // 修复 2: 移除 updated_at 字段
  if (content.includes('game_comments') && content.includes('updated_at')) {
    // 移除字段定义中的 updated_at
    content = content.replace(
      /,\s*updated_at\s*\)/g,
      ')'
    );
    // 移除 VALUES 中的 NOW() 对应 updated_at
    content = content.replace(
      /,\s*NOW\(\)\s*\)\s*ON CONFLICT DO NOTHING/g,
      ') ON CONFLICT DO NOTHING'
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Fixed: ${fileName}`);
    fixedCount++;
  }
}

console.log('='.repeat(60));
console.log(`\n✅ Field name fix completed!`);
console.log(`   Fixed: ${fixedCount} files`);
console.log('\n💡 Next step: Regenerate batch migration script');

