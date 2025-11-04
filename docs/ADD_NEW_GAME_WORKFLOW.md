# 新游戏添加标准流程

## 前置信息要求

用户需提供：
1. **游戏名称**（英文）
2. **缩略图 URL**
3. **游戏 iframe 链接**
4. **参考文字说明链接**（用于生成游戏描述）

## 执行步骤

### 1. 下载缩略图
```bash
curl -o "public/images/thumbnails/{game-slug}.png" "{thumbnail-url}"
```

### 2. 添加游戏数据到 `src/data/games.ts`
- 在数组**开头**添加新游戏
- 必填字段：
  - `name`: 游戏名称
  - `slug`: URL slug（小写，用连字符）
  - `image`: `/images/thumbnails/{game-slug}.png`
  - `url`: iframe 源地址
  - `releaseDate`: 今天日期 `YYYY-MM-DD`
  - `tags`: 根据游戏类型选择标签
  - `rating`: 初始 5.0
  - `playCount`: 初始 0
  - `isReal`: true

### 3. 创建游戏详情页面 `src/pages/{GameName}Page.tsx`
- 从参考链接获取游戏描述（1000+ 字）
- 包含以下部分：
  - `aboutContent`: 游戏介绍和玩法机制
  - `howToPlayContent`: 操作说明（支持多玩家时分别说明）
  - `featuresContent`: 游戏特色（6-8 个特性）
  - 可选：游戏模式、获胜技巧
- **SEO 要求**：
  - H1 标签包含游戏名称
  - 游戏名称关键词密度达到 2%
  - 合理使用 H2、H3 标签
  - 描述自然流畅，符合 Google SEO 标准

### 4. 注册页面到 `src/pages/GameDetailPage.tsx`
在 `gamePageComponents` 对象**开头**添加：
```typescript
'{game-slug}': lazy(() => import('./{GameName}Page'))
```

### 5. 创建 Supabase 迁移脚本
文件名：`supabase/migrations/{YYYYMMDD}_add_{game-slug}.sql`

**必须包含以下内容**：

#### 5.1 插入游戏记录到 `games` 表
```sql
INSERT INTO games (
  slug,
  title,
  subtitle,
  cover,
  play_url,
  description,
  rating,
  play_count,
  released_at,
  is_active,
  is_featured
) VALUES (
  '{game-slug}',
  '{Game Title}',
  '{Game Subtitle}',
  'https://www.stealabrainrotunblocked.com/images/thumbnails/{game-slug}.png',
  '{iframe-url}',
  '{详细描述，1000+ 字}',
  5.0,
  0,
  '{YYYY-MM-DD}',
  true,
  false
) ON CONFLICT (slug) DO NOTHING;
```

#### 5.2 确保所有标签存在于 `tags` 表
```sql
INSERT INTO tags (slug, name, created_at)
VALUES
  ('action', 'Action', NOW()),
  ('casual', 'Casual', NOW()),
  -- 添加所有需要的标签
ON CONFLICT (slug) DO NOTHING;
```

#### 5.3 关联游戏和标签到 `game_tags` 表
**⚠️ 重要：使用 UUID 外键，不是 slug！**
```sql
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = '{game-slug}'
  AND t.slug IN ('action', 'casual', 'multiplayer', ...)
ON CONFLICT (game_id, tag_id) DO NOTHING;
```

#### 5.4 添加主题评论到 `game_comments` 表
**⚠️ 重要字段名：`comment_text`（不是 `content`）**
```sql
INSERT INTO game_comments (
  game_slug,
  user_name,
  user_email,
  comment_text,  -- ⚠️ 注意：是 comment_text，不是 content
  rating,
  status,
  agreed_terms,
  created_at
) VALUES (
  '{game-slug}',
  '{用户名}',
  '{email}',
  '{评论内容，根据游戏主题撰写，200-500 字}',
  5,
  'approved',
  true,
  NOW()
) ON CONFLICT DO NOTHING;
```

**常见错误避免**：
- ❌ `INSERT INTO game_tags (game_slug, tag_slug)` - 错误！表使用 UUID 外键
- ✅ `INSERT INTO game_tags (game_id, tag_id) SELECT g.id, t.id FROM...` - 正确！
- ❌ `comment_text` 字段写成 `content` - 错误！
- ✅ 使用 `comment_text` 字段 - 正确！
- ❌ `created_at` 使用 `NOW() - INTERVAL '2 days'` 时写成 `INTERVAL ''2 days''` - 错误！
- ✅ 使用 `INTERVAL '2 days'` 或直接 `NOW()` - 正确！

### 6. 更新 Sitemap 文件

#### 6.1 `public/sitemap-games.xml`
在**开头**添加游戏条目：
```xml
<url>
  <loc>https://www.stealabrainrotunblocked.com/{game-slug}</loc>
  <lastmod>{YYYY-MM-DD}</lastmod>
  <changefreq>daily</changefreq>
  <priority>1.0</priority>
  <image:image>
    <image:loc>https://www.stealabrainrotunblocked.com/images/thumbnails/{game-slug}.png</image:loc>
    <image:title>{Game Title}</image:title>
  </image:image>
</url>
```

#### 6.2 `public/sitemap-images.xml`
在新游戏部分添加图片条目

#### 6.3 `public/sitemap.xml`
更新首页和分类页的 `lastmod` 为今天日期

#### 6.4 `public/sitemap-tags.xml`
更新相关标签页的 `lastmod` 为今天日期

#### 6.5 `public/sitemap-index.xml`
更新所有 sitemap 的 `lastmod` 为今天日期

### 7. 更新 NEW 标志显示逻辑

**检查并更新超过 7 天的游戏**：
- 遍历 `src/data/games.ts` 中所有游戏
- 计算发布日期距今天数
- 如果超过 7 天，确保没有特殊的 NEW 标志配置
- NEW 标志由 `src/components/NewBadge.tsx` 自动控制（基于 releaseDate）

### 8. 创建验证脚本
文件名：`scripts/verify-{game-slug}.js`

检查项：
- ✅ 缩略图文件存在
- ✅ 游戏添加到 games.ts
- ✅ 所有标签正确
- ✅ 游戏页面组件存在
- ✅ GameDetailPage.tsx 注册
- ✅ Supabase 迁移文件
- ✅ Sitemap 文件更新
- ✅ NEW 标志符合条件（7 天内）
- ✅ 标签页面会显示该游戏

### 9. 运行验证
```bash
node scripts/verify-{game-slug}.js
```

## 后续手动步骤

验证通过后，需要手动执行：

### 1. 运行 Supabase 迁移

**推荐方式 A：通过 Supabase Management API（AI 助手自动执行）**

AI 助手会自动通过 Supabase tool 执行以下步骤：

1. **插入游戏记录**
   ```typescript
   // 执行 INSERT INTO games ... 语句
   ```

2. **创建并关联标签**
   ```typescript
   // 1. 确保标签存在：INSERT INTO tags ...
   // 2. 关联游戏和标签：INSERT INTO game_tags (game_id, tag_id) SELECT ...
   ```

3. **添加评论**
   ```typescript
   // 执行 INSERT INTO game_comments (comment_text, ...) ...
   ```

**优点**：
- ✅ 自动化执行，无需手动操作
- ✅ 实时验证执行结果
- ✅ 可以逐步执行，出错时易于定位
- ✅ 支持批量执行多个游戏

**方式 B：通过 Supabase Dashboard SQL Editor（手动执行）**

如果 API 执行失败或需要手动控制：

1. 打开 https://supabase.com/dashboard/project/tgoyqxcqpwevgztprqgk/sql/new
2. 复制 `supabase/migrations/{YYYYMMDD}_add_{game-slug}.sql` 的内容
3. 粘贴到 SQL Editor 并点击 "Run" 执行
4. 检查执行结果，确认无错误

**方式 C：通过 Supabase CLI（需要安装）**

```bash
supabase db push
```
- ⚠️ 需要安装 Supabase CLI 并配置项目

### 2. 验证 Supabase 数据同步

执行验证查询：
```sql
-- 检查游戏是否已添加
SELECT slug, title FROM games WHERE slug = '{game-slug}';

-- 检查标签关联
SELECT t.slug, t.name
FROM game_tags gt
JOIN tags t ON gt.tag_id = t.id
JOIN games g ON gt.game_id = g.id
WHERE g.slug = '{game-slug}';

-- 检查评论
SELECT user_name, rating, LEFT(comment_text, 50) as preview
FROM game_comments
WHERE game_slug = '{game-slug}';
```

### 3. 本地测试

- 访问 `http://localhost:3000/{game-slug}`
- 检查游戏页面显示正常
- 验证 NEW 标志显示（7 天内）
- 检查标签页面包含该游戏
- 检查评论显示正常（从 Supabase 加载）
- 检查评分显示正确

### 4. 部署前检查

- ✅ 确认所有 sitemap 文件已更新
- ✅ 确认游戏在首页显示
- ✅ 确认游戏在相关分类页显示
- ✅ 确认游戏在相关标签页显示
- ✅ 确认 Supabase 数据同步完成（游戏 + 标签 + 评论）
- ✅ 确认缩略图正确显示
- ✅ 确认 SEO 元数据完整（TDK、H1、关键词密度）

## 注意事项

### 关键要点

1. **不生成总结文档** - 避免输出冗余内容，节省 token
2. **Supabase 迁移优先通过 API 执行** - AI 助手使用 Supabase tool 自动执行，失败时才手动执行
3. **迁移文件包含完整数据** - 游戏记录、标签、关联、评论一次性完成
4. **NEW 标志自动管理** - 基于 releaseDate 自动显示/隐藏（7 天规则）
5. **关键词密度** - 游戏名称在页面中出现频率达到 2%
6. **SEO 优化** - TDK、H 标签、语义化结构
7. **并行执行** - 尽可能使用并行工具调用提高效率

### Supabase 数据库表结构要点

#### `games` 表
- 主键：`id` (UUID)
- 唯一键：`slug` (TEXT)
- 必填字段：slug, title, subtitle, cover, play_url, description, rating, play_count, released_at, is_active, is_featured

#### `tags` 表
- 主键：`id` (UUID)
- 唯一键：`slug` (TEXT)
- 字段：slug, name, created_at

#### `game_tags` 表（关联表）
- **使用 UUID 外键**：`game_id` (UUID), `tag_id` (UUID)
- ❌ **不使用** `game_slug` 和 `tag_slug`
- 联合主键：(game_id, tag_id)

#### `game_comments` 表
- 主键：`id` (UUID)
- 关键字段：
  - `game_slug` (TEXT) - 关联游戏
  - `user_name` (TEXT)
  - `user_email` (TEXT)
  - **`comment_text`** (TEXT) - ⚠️ 注意：不是 `content`
  - `rating` (INTEGER) - 1-5 星
  - `status` (TEXT) - 'approved', 'pending', 'rejected'
  - `agreed_terms` (BOOLEAN)
  - `created_at` (TIMESTAMP)

### 常见错误及解决方案

#### 错误 1：game_tags 表结构错误
```sql
-- ❌ 错误写法
INSERT INTO game_tags (game_slug, tag_slug, created_at)
SELECT 'my-game', slug, NOW() FROM tags WHERE slug IN (...);

-- ✅ 正确写法
INSERT INTO game_tags (game_id, tag_id)
SELECT g.id, t.id
FROM games g, tags t
WHERE g.slug = 'my-game' AND t.slug IN ('action', 'casual', ...);
```

#### 错误 2：game_comments 字段名错误
```sql
-- ❌ 错误写法
INSERT INTO game_comments (game_slug, user_name, user_email, content, ...)

-- ✅ 正确写法
INSERT INTO game_comments (game_slug, user_name, user_email, comment_text, ...)
```

#### 错误 3：INTERVAL 语法错误
```sql
-- ❌ 错误写法
NOW() - INTERVAL ''2 days''

-- ✅ 正确写法
NOW() - INTERVAL '2 days'
```

#### 错误 4：缺少游戏记录
某些旧迁移文件只插入 `game_stats`，没有插入 `games` 表记录。
**解决方案**：确保迁移文件首先插入游戏记录到 `games` 表。

### 批量迁移处理

如果需要同时迁移多个游戏：

1. **生成批量迁移脚本**
   ```bash
   npx tsx scripts/generate-batch-migration.ts
   ```

2. **通过 API 逐个执行**（推荐）
   - AI 助手使用 Supabase tool 逐个执行每个游戏的迁移
   - 可以实时监控执行结果
   - 出错时可以立即定位问题

3. **通过 Dashboard 一次性执行**（备选）
   - 适用于大量游戏（10+ 个）
   - 复制 `supabase/BATCH_MIGRATION_EXECUTE_ALL.sql` 到 SQL Editor
   - 一次性执行所有迁移

## 标签参考

常用标签：
- 动作类：Action, Fighting, Battle, Shooting, Combat
- 休闲类：Casual, Arcade, Puzzle, Clicker
- 多人类：Multiplayer, 2 Player, 3 Player, 4 Player
- 风格类：Stickman, 2D, 3D, Pixel, Retro
- 机制类：Physics, Strategy, Tower Defense, Platformer
- 主题类：War, Adventure, Racing, Sports, Simulation

## 文件路径速查

- 游戏数据：`src/data/games.ts`
- 游戏页面：`src/pages/{GameName}Page.tsx`
- 页面注册：`src/pages/GameDetailPage.tsx`
- 缩略图：`public/images/thumbnails/{game-slug}.png`
- 迁移脚本：`supabase/migrations/{YYYYMMDD}_add_{game-slug}.sql`
- 验证脚本：`scripts/verify-{game-slug}.js`
- Sitemap：`public/sitemap-*.xml`

## 效率优化建议

1. **并行工具调用** - 同时读取多个文件，避免串行执行
2. **一次性完成 sitemap 更新** - 批量更新所有 sitemap 文件
3. **验证脚本最后运行** - 完成所有修改后统一验证
4. **避免重复查看文件** - 已知结构的文件不重复读取
5. **Supabase 迁移优先 API** - 使用 Supabase tool 自动执行，减少手动操作
6. **批量处理标签** - 一次性创建所有标签，然后批量关联

## 完整示例：添加新游戏 "Example Game"

### 用户提供信息
- 游戏名称：Example Game
- 缩略图：https://example.com/thumbnail.png
- iframe 链接：https://example.com/game/embed
- 参考文字：https://example.com/game/description

### AI 助手执行流程

1. **下载缩略图**
   ```bash
   curl -o "public/images/thumbnails/example-game.png" "https://example.com/thumbnail.png"
   ```

2. **添加到 games.ts**（数组开头）
   ```typescript
   {
     name: 'Example Game',
     slug: 'example-game',
     image: '/images/thumbnails/example-game.png',
     url: 'https://example.com/game/embed',
     releaseDate: '2025-11-04',
     tags: ['Action', 'Casual', 'Multiplayer'],
     rating: 5.0,
     playCount: 0,
     isReal: true
   }
   ```

3. **创建游戏页面** `src/pages/ExampleGamePage.tsx`

4. **注册到 GameDetailPage.tsx**

5. **创建迁移文件** `supabase/migrations/20251104_add_example_game.sql`

6. **更新所有 sitemap 文件**

7. **创建并运行验证脚本**

8. **通过 Supabase API 执行迁移**
   - 插入游戏记录
   - 创建并关联标签
   - 添加评论

9. **验证数据同步**
   - 查询游戏记录
   - 查询标签关联
   - 查询评论

10. **完成** ✅

## 故障排查

### 问题 1：Supabase API 执行失败
**症状**：API 返回错误或超时

**解决方案**：
1. 检查 SQL 语法是否正确
2. 检查字段名是否匹配（特别是 `comment_text`）
3. 检查是否使用了正确的外键（UUID 而非 slug）
4. 如果 API 持续失败，改用 Dashboard SQL Editor 手动执行

### 问题 2：游戏在数据库中但评论未显示
**症状**：游戏页面显示正常，但评论区为空

**解决方案**：
1. 检查 `game_comments` 表中是否有该游戏的评论
2. 检查 `game_slug` 是否匹配
3. 检查评论 `status` 是否为 'approved'
4. 检查前端是否正确从 Supabase 加载评论

### 问题 3：标签关联失败
**症状**：游戏页面显示，但标签页面不显示该游戏

**解决方案**：
1. 检查 `game_tags` 表中是否有关联记录
2. 确认使用了 UUID 外键而非 slug
3. 重新执行标签关联 SQL：
   ```sql
   INSERT INTO game_tags (game_id, tag_id)
   SELECT g.id, t.id
   FROM games g, tags t
   WHERE g.slug = 'example-game' AND t.slug IN ('action', 'casual', ...)
   ON CONFLICT (game_id, tag_id) DO NOTHING;
   ```

### 问题 4：NEW 标志未显示
**症状**：新游戏没有显示 NEW 标志

**解决方案**：
1. 检查 `releaseDate` 是否为今天或 7 天内
2. 检查 `NewBadge.tsx` 组件逻辑
3. 确认游戏在 `games.ts` 中的 `releaseDate` 格式正确（YYYY-MM-DD）

## 总结

本流程文档涵盖了添加新游戏的完整步骤，包括：
- ✅ 前端代码修改（games.ts, 页面组件, 路由注册）
- ✅ 后端数据同步（Supabase 游戏记录、标签、评论）
- ✅ SEO 优化（sitemap, TDK, H 标签, 关键词密度）
- ✅ 自动化验证（验证脚本）
- ✅ 常见错误避免（数据库表结构、字段名、SQL 语法）

遵循此流程可确保每个新游戏都能正确添加并完整同步到所有系统。

