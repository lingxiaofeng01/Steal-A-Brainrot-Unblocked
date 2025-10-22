# 首页评论系统设置指南

## 🎯 概述

首页现在显示三条基于关键词的评论，这些评论已同步到 Supabase。评论功能与详情页保持一致，包括：
- 评论显示（用户名、评分、内容、时间）
- 评论提交表单（名字、邮箱、评论、评分）
- Supabase 同步
- 审核状态管理

## ✅ 已完成的工作

### 1. 代码修改

**文件：`src/pages/HomePage.tsx`**
- ✅ 导入 Comments 组件
- ✅ 将硬编码的评论替换为 `<Comments gameSlug="steal-a-brainrot-unblocked" />`

**文件：`src/components/Comments.tsx`**
- ✅ 添加 `rating` 字段支持
- ✅ 添加评分输入界面（1-5 星）
- ✅ 在评论显示中展示评分
- ✅ 提交评论时包含评分

**文件：`src/services/homePageCommentsService.ts`** (新建)
- ✅ `generateHomePageComments()` - 生成三条预设评论
- ✅ `saveHomePageComments()` - 保存评论到 Supabase
- ✅ `getHomePageComments()` - 从 Supabase 加载评论
- ✅ `formatTimeAgo()` - 格式化时间显示

### 2. 数据库迁移

**文件：`supabase/migrations/20251022000000_add_rating_status_to_comments.sql`** (新建)
- ✅ 添加 `rating` 字段（1-5 星）
- ✅ 添加 `status` 字段（审核状态）
- ✅ 添加 `user_email` 字段
- ✅ 添加 `agreed_terms` 字段
- ✅ 创建索引和 RLS 策略

### 3. 初始化脚本

**文件：`scripts/initHomePageComments.ts`** (新建)
- ✅ 一键初始化三条评论到 Supabase

## 🚀 快速开始

### 步骤 1：运行数据库迁移

在 Supabase Dashboard 中执行迁移：

1. 登录 [Supabase Dashboard](https://app.supabase.com)
2. 选择项目：`steal a brainrot` (tgoyqxcqpwevgztprqgk)
3. 进入 **SQL Editor**
4. 打开文件：`supabase/migrations/20251022000000_add_rating_status_to_comments.sql`
5. 复制所有 SQL 代码
6. 粘贴到 SQL Editor 并执行

### 步骤 2：初始化评论

运行初始化脚本：

```bash
npx ts-node scripts/initHomePageComments.ts
```

或者手动在 Supabase SQL Editor 中执行：

```sql
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, rating, status, agreed_terms)
VALUES
  ('steal-a-brainrot-unblocked', 'Player123', 'player123@example.com', 'This game is so addictive! Love collecting all the Brainrots! The unblocked version works perfectly at school and work!', 5, 'approved', true),
  ('steal-a-brainrot-unblocked', 'GamerPro', 'gamerpro@example.com', 'Great free online game! No downloads required, instant play. Works perfectly at school! Best unblocked game I''ve found!', 4, 'approved', true),
  ('steal-a-brainrot-unblocked', 'BrainrotFan', 'brainrotfan@example.com', 'The stealing mechanic is so fun! Best idle game ever! Free to play, no downloads, instant play - exactly what I needed!', 5, 'approved', true);
```

## 📝 关键词集成

评论内容包含以下关键词，用于 SEO 优化：

- **unblocked** - 强调游戏可在学校/工作访问
- **free** - 强调免费特性
- **online** - 强调在线游戏特性
- **no downloads** - 强调易用性
- **instant play** - 强调快速启动

## 📂 相关文件

```
src/
├── pages/HomePage.tsx                     # 首页组件
├── components/Comments.tsx                # 评论组件
└── services/homePageCommentsService.ts    # 评论服务

scripts/
└── initHomePageComments.ts                # 初始化脚本

supabase/migrations/
└── 20251022000000_add_rating_status_to_comments.sql  # 数据库迁移

docs/
└── HOME_PAGE_COMMENTS_SETUP.md            # 本文档
```

## ❓ 常见问题

**Q: 评论不显示怎么办？**
A: 检查浏览器控制台错误，确保 Supabase 迁移已执行，评论数据已插入。

**Q: 如何修改评论内容？**
A: 编辑 `src/services/homePageCommentsService.ts` 中的 `generateHomePageComments()` 函数，然后重新运行初始化脚本。

**Q: 如何添加更多评论？**
A: 在 `generateHomePageComments()` 函数中添加更多对象，或直接在 Supabase 中插入。

**Q: 评论表单和详情页一样吗？**
A: 是的，首页和详情页使用同一个 Comments 组件，确保一致性。

## 🎉 完成！

首页评论系统已完全设置。用户现在可以：
- 查看首页的三条预设评论
- 提交新评论（需要审核）
- 给评论评分（1-5 星）
- 在详情页查看和提交评论

