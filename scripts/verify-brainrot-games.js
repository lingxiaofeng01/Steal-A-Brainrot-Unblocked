#!/usr/bin/env node

/**
 * 验证 Brainrot 游戏配置
 * 检查首页 Play Similar Games 部分是否正确显示 Brainrot 游戏
 */

const fs = require('fs');
const path = require('path');

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function main() {
  log('\n========================================', 'blue');
  log('验证 Brainrot 游戏配置', 'blue');
  log('========================================\n', 'blue');

  let allChecks = true;

  // 1. 检查 gameUtils.ts 是否有 getBrainrotGames 函数
  log('1. 检查 gameUtils.ts...', 'yellow');
  const gameUtilsPath = path.join(__dirname, '..', 'src/utils/gameUtils.ts');
  const gameUtilsContent = fs.readFileSync(gameUtilsPath, 'utf8');
  
  if (gameUtilsContent.includes('export function getBrainrotGames')) {
    log('✅ getBrainrotGames 函数已定义', 'green');
  } else {
    log('❌ getBrainrotGames 函数未找到', 'red');
    allChecks = false;
  }

  if (gameUtilsContent.includes("tag.toLowerCase().includes('brainrot')")) {
    log('✅ Brainrot 标签过滤逻辑正确', 'green');
  } else {
    log('❌ Brainrot 标签过滤逻辑未找到', 'red');
    allChecks = false;
  }

  // 2. 检查 HomePage.tsx 是否使用 getBrainrotGames
  log('\n2. 检查 HomePage.tsx...', 'yellow');
  const homePagePath = path.join(__dirname, '..', 'src/pages/HomePage.tsx');
  const homePageContent = fs.readFileSync(homePagePath, 'utf8');
  
  if (homePageContent.includes('import { getAllGames, getBrainrotGames }')) {
    log('✅ HomePage 已导入 getBrainrotGames', 'green');
  } else {
    log('❌ HomePage 未导入 getBrainrotGames', 'red');
    allChecks = false;
  }

  if (homePageContent.includes('getBrainrotGames(gameData.slug, 12)')) {
    log('✅ HomePage 使用 getBrainrotGames 获取相似游戏', 'green');
  } else {
    log('❌ HomePage 未使用 getBrainrotGames', 'red');
    allChecks = false;
  }

  if (!homePageContent.includes('getRelatedGames(gameData.slug, gameData.tags')) {
    log('✅ HomePage 已移除 getRelatedGames 调用', 'green');
  } else {
    log('⚠️  HomePage 仍在使用 getRelatedGames', 'yellow');
  }

  // 3. 统计 Brainrot 游戏数量
  log('\n3. 统计 Brainrot 游戏...', 'yellow');
  const gamesPath = path.join(__dirname, '..', 'src/data/games.ts');
  const gamesContent = fs.readFileSync(gamesPath, 'utf8');
  
  // 简单统计包含 'Brainrot' 标签的游戏
  const brainrotMatches = gamesContent.match(/tags:.*?'[^']*[Bb]rainrot[^']*'/g);
  const brainrotCount = brainrotMatches ? brainrotMatches.length : 0;
  
  log(`📊 找到 ${brainrotCount} 个 Brainrot 相关游戏`, 'cyan');
  
  if (brainrotCount >= 12) {
    log('✅ Brainrot 游戏数量充足（>= 12）', 'green');
  } else {
    log(`⚠️  Brainrot 游戏数量较少（${brainrotCount} < 12）`, 'yellow');
  }

  // 4. 列出部分 Brainrot 游戏
  log('\n4. Brainrot 游戏列表（部分）:', 'yellow');
  const gameNameMatches = gamesContent.match(/name: '([^']*[Bb]rainrot[^']*)'/g);
  if (gameNameMatches) {
    gameNameMatches.slice(0, 10).forEach((match, i) => {
      const name = match.replace(/name: '/, '').replace(/'$/, '');
      log(`   ${i + 1}. ${name}`, 'cyan');
    });
    if (gameNameMatches.length > 10) {
      log(`   ... 还有 ${gameNameMatches.length - 10} 个游戏`, 'cyan');
    }
  }

  // Summary
  log('\n========================================', 'blue');
  if (allChecks) {
    log('✅ 所有检查通过！', 'green');
    log('\n首页 "Play Similar Games" 部分现在只显示 Brainrot 相关游戏。', 'reset');
    log(`共有 ${brainrotCount} 个 Brainrot 游戏可供展示。`, 'reset');
  } else {
    log('❌ 部分检查失败，请修复上述问题。', 'red');
  }
  log('========================================\n', 'blue');

  process.exit(allChecks ? 0 : 1);
}

main();

