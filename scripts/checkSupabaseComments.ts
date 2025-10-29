/**
 * 检查 Supabase 中游戏评论和评分的同步状态
 * 
 * 使用方法：
 * npx ts-node scripts/checkSupabaseComments.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as fs from 'fs';
import * as path from 'path';

// 加载环境变量
const envPath = path.join(__dirname, '..', '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  envContent.split('\n').forEach(line => {
    const [key, ...valueParts] = line.split('=');
    if (key && valueParts.length > 0) {
      const value = valueParts.join('=').trim();
      process.env[key.trim()] = value;
    }
  });
}

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 缺少 Supabase 凭证');
  console.error('请在 .env.local 中设置 NEXT_PUBLIC_SUPABASE_URL 和 NEXT_PUBLIC_SUPABASE_ANON_KEY');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkSupabaseComments() {
  console.log('🔍 检查 Supabase 评论和评分同步状态...\n');
  console.log('=' .repeat(80));
  
  try {
    // 1. 检查 game_comments 表结构
    console.log('\n📋 1. 检查 game_comments 表结构');
    console.log('-'.repeat(80));
    
    const { data: sampleComment, error: structureError } = await supabase
      .from('game_comments')
      .select('*')
      .limit(1)
      .single();
    
    if (structureError && structureError.code !== 'PGRST116') {
      console.error('❌ 查询表结构失败:', structureError.message);
    } else if (sampleComment) {
      console.log('✅ 表结构正常，包含以下字段:');
      Object.keys(sampleComment).forEach(key => {
        console.log(`   - ${key}: ${typeof sampleComment[key]}`);
      });
      
      // 检查关键字段
      const requiredFields = ['rating', 'status', 'user_email', 'agreed_terms'];
      const missingFields = requiredFields.filter(field => !(field in sampleComment));
      
      if (missingFields.length > 0) {
        console.log(`\n⚠️  缺少字段: ${missingFields.join(', ')}`);
        console.log('   需要运行迁移: 20251022000000_add_rating_status_to_comments.sql');
      } else {
        console.log('\n✅ 所有必需字段都存在');
      }
    }
    
    // 2. 检查所有评论数据
    console.log('\n📊 2. 检查所有评论数据');
    console.log('-'.repeat(80));
    
    const { data: allComments, error: allError } = await supabase
      .from('game_comments')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (allError) {
      console.error('❌ 查询评论失败:', allError.message);
    } else {
      console.log(`✅ 总评论数: ${allComments?.length || 0}`);
      
      if (allComments && allComments.length > 0) {
        // 按状态分组
        const byStatus = allComments.reduce((acc, comment) => {
          const status = comment.status || 'unknown';
          acc[status] = (acc[status] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        
        console.log('\n   按状态分组:');
        Object.entries(byStatus).forEach(([status, count]) => {
          console.log(`   - ${status}: ${count} 条`);
        });
        
        // 按游戏分组
        const byGame = allComments.reduce((acc, comment) => {
          const slug = comment.game_slug || 'unknown';
          acc[slug] = (acc[slug] || 0) + 1;
          return acc;
        }, {} as Record<string, number>);
        
        console.log('\n   按游戏分组:');
        Object.entries(byGame).forEach(([slug, count]) => {
          console.log(`   - ${slug}: ${count} 条`);
        });
        
        // 检查评分字段
        const withRating = allComments.filter(c => c.rating !== null && c.rating !== undefined);
        const withoutRating = allComments.filter(c => c.rating === null || c.rating === undefined);
        
        console.log('\n   评分统计:');
        console.log(`   - 有评分: ${withRating.length} 条`);
        console.log(`   - 无评分: ${withoutRating.length} 条`);
        
        if (withRating.length > 0) {
          const avgRating = withRating.reduce((sum, c) => sum + (c.rating || 0), 0) / withRating.length;
          console.log(`   - 平均评分: ${avgRating.toFixed(2)} ⭐`);
        }
      }
    }
    
    // 3. 检查首页评论（steal-a-brainrot-unblocked）
    console.log('\n🏠 3. 检查首页评论 (steal-a-brainrot-unblocked)');
    console.log('-'.repeat(80));
    
    const { data: homeComments, error: homeError } = await supabase
      .from('game_comments')
      .select('*')
      .eq('game_slug', 'steal-a-brainrot-unblocked')
      .order('created_at', { ascending: false });
    
    if (homeError) {
      console.error('❌ 查询首页评论失败:', homeError.message);
    } else {
      console.log(`✅ 首页评论总数: ${homeComments?.length || 0}`);
      
      if (homeComments && homeComments.length > 0) {
        const approved = homeComments.filter(c => c.status === 'approved');
        console.log(`   - 已审核通过: ${approved.length} 条`);
        console.log(`   - 待审核: ${homeComments.filter(c => c.status === 'pending').length} 条`);
        
        console.log('\n   最新 3 条已审核评论:');
        approved.slice(0, 3).forEach((comment, index) => {
          console.log(`\n   ${index + 1}. ${comment.user_name} (${comment.rating || 'N/A'}⭐)`);
          console.log(`      "${comment.comment_text.substring(0, 60)}..."`);
          console.log(`      状态: ${comment.status} | 时间: ${new Date(comment.created_at).toLocaleString('zh-CN')}`);
        });
      } else {
        console.log('\n⚠️  没有找到首页评论');
        console.log('   建议运行: npx ts-node scripts/initHomePageComments.ts');
      }
    }
    
    // 4. 检查今天新增的评论
    console.log('\n📅 4. 检查今天新增的评论');
    console.log('-'.repeat(80));
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todayISO = today.toISOString();
    
    const { data: todayComments, error: todayError } = await supabase
      .from('game_comments')
      .select('*')
      .gte('created_at', todayISO)
      .order('created_at', { ascending: false });
    
    if (todayError) {
      console.error('❌ 查询今天评论失败:', todayError.message);
    } else {
      console.log(`✅ 今天新增评论: ${todayComments?.length || 0} 条`);
      
      if (todayComments && todayComments.length > 0) {
        console.log('\n   详细列表:');
        todayComments.forEach((comment, index) => {
          console.log(`\n   ${index + 1}. ${comment.game_slug}`);
          console.log(`      用户: ${comment.user_name} (${comment.rating || 'N/A'}⭐)`);
          console.log(`      状态: ${comment.status}`);
          console.log(`      时间: ${new Date(comment.created_at).toLocaleString('zh-CN')}`);
          console.log(`      内容: "${comment.comment_text.substring(0, 50)}..."`);
        });
      }
    }
    
    // 5. 检查 game_ratings 表（如果存在）
    console.log('\n⭐ 5. 检查 game_ratings 表');
    console.log('-'.repeat(80));
    
    const { data: ratings, error: ratingsError } = await supabase
      .from('game_ratings')
      .select('*')
      .limit(10);
    
    if (ratingsError) {
      if (ratingsError.code === '42P01') {
        console.log('ℹ️  game_ratings 表不存在（这是正常的，评分已整合到 game_comments 表）');
      } else {
        console.error('❌ 查询评分失败:', ratingsError.message);
      }
    } else {
      console.log(`✅ game_ratings 表存在，包含 ${ratings?.length || 0} 条记录`);
    }
    
    // 总结
    console.log('\n' + '='.repeat(80));
    console.log('📝 总结');
    console.log('='.repeat(80));
    
    const summary = [];
    
    if (allComments && allComments.length > 0) {
      summary.push(`✅ 评论系统正常运行，共 ${allComments.length} 条评论`);
      
      const withRating = allComments.filter(c => c.rating !== null && c.rating !== undefined);
      if (withRating.length > 0) {
        summary.push(`✅ 评分功能正常，${withRating.length} 条评论包含评分`);
      } else {
        summary.push(`⚠️  没有评论包含评分数据`);
      }
      
      if (homeComments && homeComments.filter(c => c.status === 'approved').length >= 3) {
        summary.push(`✅ 首页评论已配置（${homeComments.filter(c => c.status === 'approved').length} 条已审核）`);
      } else {
        summary.push(`⚠️  首页评论不足 3 条，建议运行初始化脚本`);
      }
      
      if (todayComments && todayComments.length > 0) {
        summary.push(`✅ 今天新增 ${todayComments.length} 条评论`);
      } else {
        summary.push(`ℹ️  今天暂无新增评论`);
      }
    } else {
      summary.push(`⚠️  数据库中没有评论数据`);
    }
    
    summary.forEach(line => console.log(line));
    
    console.log('\n' + '='.repeat(80));
    console.log('✅ 检查完成！\n');
    
  } catch (err) {
    console.error('\n❌ 检查过程中出错:', err);
    process.exit(1);
  }
}

// 运行检查
checkSupabaseComments();

