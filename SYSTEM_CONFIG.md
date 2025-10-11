# 🎮 游戏网站系统配置文档

> **重要**: 当你需要AI助手帮助时，请让AI先阅读此文件以快速了解整个系统架构和逻辑

## 📋 系统概览

### 项目信息
- **项目名称**: Steal a Brainrot 游戏网站
- **技术栈**: React + TypeScript + Vite + Tailwind CSS
- **路由**: 自定义客户端路由（`src/Router.tsx`）
- **状态管理**: React Hooks (useState)

### 核心文件结构
```
src/
├── components/
│   ├── GameDetailTemplate.tsx    # 🔥 游戏详情页统一模板
│   ├── Layout.tsx                # 主布局组件
│   ├── Sidebar.tsx               # 侧边栏导航
│   ├── Header.tsx                # 顶部导航
│   ├── GamePreview.tsx           # 游戏预览卡片
│   ├── Comments.tsx              # 评论组件
│   ├── StarRating.tsx            # 星级评分
│   └── NewBadge.tsx              # NEW徽章
├── pages/
│   ├── HomePage.tsx              # 首页
│   ├── CategoryPage.tsx          # 分类页面
│   ├── TagPage.tsx               # 标签页面
│   ├── [GameName]Page.tsx        # 各个游戏详情页
│   └── ...
├── data/
│   └── games.ts                  # 🔥 游戏数据中心
├── utils/
│   └── tagUtils.ts               # 标签工具函数
└── Router.tsx                    # 路由配置
```

## 🎯 游戏详情页系统

### 统一模板组件
**文件**: `src/components/GameDetailTemplate.tsx`

#### 核心配置参数
```typescript
// 📊 可配置参数（在文件顶部）
const RELATED_GAMES_COUNT = 12;  // 相关游戏推荐数量
const MORE_GAMES_COUNT = 12;     // More Games 显示数量
```

#### 标准布局顺序（6个部分）
1. **游戏框架展示** - 游戏预览/播放器（带背景图和渐变）
2. **相关游戏** - 基于标签匹配推荐（默认12个）
3. **游戏简介** - 名称、缩略图、评分、标签
4. **游戏介绍** - About、How to Play、Features
5. **游戏评论** - 玩家评论系统
6. **More Games** - 按时间排序（默认12个）

#### 推荐算法逻辑

**相关游戏推荐**（`getRelatedGames()`）:
```typescript
算法步骤：
1. 计算每个游戏与当前游戏的共同标签数量（匹配度）
2. 过滤掉当前游戏本身
3. 按匹配度降序排列
4. 取前 RELATED_GAMES_COUNT 个游戏
5. 如果不足，用最新游戏补充到指定数量

匹配度计算：
- 共同标签数量 = 匹配度分数
- 例如：游戏A有标签[Brainrot, Clicker, Casual]
       游戏B有标签[Brainrot, Clicker, Idle]
       共同标签：Brainrot, Clicker
       匹配度 = 2
```

**More Games**（`getLatestGames()`）:
```typescript
算法步骤：
1. 过滤掉当前游戏
2. 按 releaseDate 降序排列（最新的在前）
3. 取前 MORE_GAMES_COUNT 个游戏
```

### 使用模板创建新游戏页面

**标准代码结构**:
```typescript
import GameDetailTemplate from '../components/GameDetailTemplate';

export default function [GameName]Page() {
  // 1. 游戏数据
  const game = {
    slug: 'game-slug',
    title: 'Game Title',
    subtitle: 'Game Subtitle',
    description: 'Short description',
    playUrl: 'https://... or /game/...',
    thumbnail: '/images/thumbnails/game.jpg',
    rating: 4.5,
    playCount: 1000,
    tags: ['Tag1', 'Tag2', 'Tag3'],
    backgroundColor: 'from-color-400 to-color-500',
    backgroundImage: 'url(...)' // 可选
  };

  // 2. 关于游戏内容
  const aboutContent = (
    <p className="text-lg leading-relaxed">
      游戏介绍文字...
    </p>
  );

  // 3. 玩法说明（可选）
  const howToPlayContent = (
    <ul className="space-y-2 ml-6">
      <li className="flex items-start gap-2">
        <span className="text-cyan-500 font-bold">•</span>
        <span><strong>步骤1:</strong> 说明</span>
      </li>
      {/* 更多步骤 */}
    </ul>
  );

  // 4. 游戏特色（可选）
  const featuresContent = (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        { icon: '🎮', title: '特色1', desc: '描述1' },
        { icon: '⭐', title: '特色2', desc: '描述2' },
      ].map((feature, i) => (
        <div key={i} className="bg-white rounded-xl p-4 shadow-md border-2 border-cyan-200">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{feature.icon}</span>
            <div>
              <h4 className="font-bold text-gray-800">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // 5. 使用模板
  return (
    <GameDetailTemplate
      game={game}
      aboutContent={aboutContent}
      howToPlayContent={howToPlayContent}
      featuresContent={featuresContent}
    />
  );
}
```

## 📊 游戏数据管理

### 游戏数据文件
**文件**: `src/data/games.ts`

#### 数据结构
```typescript
export interface GameData {
  name: string;           // 游戏名称
  image: string;          // 缩略图路径
  slug: string;           // URL slug
  isReal: true;           // 标记为真实游戏
  releaseDate?: string;   // 发布日期 (YYYY-MM-DD)
  tags?: string[];        // 🔥 游戏标签（用于推荐）
}
```

#### 添加新游戏步骤
```typescript
// 在 allGames 数组中添加：
{
  name: '游戏名称',
  image: '/images/thumbnails/game-slug.jpg',
  slug: 'game-slug',
  isReal: true,
  releaseDate: '2025-01-11',  // 今天的日期
  tags: ['Tag1', 'Tag2', 'Tag3']  // 🔥 重要：添加标签
}
```

### 标签体系

#### 标签分类
1. **游戏类型**: Brainrot, Roblox
2. **玩法类型**: Clicker, Puzzle, Strategy, Action, Adventure
3. **游戏模式**: Multiplayer, Idle, Tower Defense, Battle
4. **风格**: Meme, Funny, Casual, Relaxing
5. **技术**: 3D, Physics
6. **主题**: Music, Memory, Brain, Animal

#### 标签使用规则
- 每个游戏 **3-7个标签**
- 必须包含至少 **1个玩法类型标签**
- 标签首字母大写
- 标签用于相关游戏推荐算法

#### 常用标签列表
```typescript
// 复制粘贴使用
['Brainrot', 'Clicker', 'Idle', 'Casual']
['Brainrot', 'Action', 'Skill', 'Arcade']
['Brainrot', 'Puzzle', 'Brain', 'Casual']
['Brainrot', 'Strategy', 'Tower Defense', 'Casual']
['Brainrot', 'Multiplayer', 'Roblox', 'Meme']
['Battle', 'Multiplayer', 'Strategy', '3D']
```

## 🛣️ 路由系统

### URL结构
```
/                           # 首页
/all                        # 所有新游戏
/hot                        # 热门游戏
/tag/[tag-slug]            # 标签页面
/[game-slug]               # 游戏详情页
```

### 添加新游戏路由
**文件**: `src/Router.tsx`

```typescript
// 1. 导入游戏页面组件
import NewGamePage from './pages/NewGamePage';

// 2. 在 routes 数组中添加（在通用路由之前）
{
  path: /^\/new-game-slug$/,
  component: () => <NewGamePage />,
},
```

## 🎨 视觉规范

### 配色方案
- **主色调**: 青色 `cyan-400`
- **分隔线**: `border-t-4 border-cyan-400`
- **标题背景**: `from-orange-200 to-amber-200`
- **游戏介绍背景**: `from-pink-100 via-blue-100 to-cyan-100`
- **标签**: 黑色背景 `bg-gray-900`，白色文字

### 组件样式
- **圆角**: `rounded-xl` (12px) 或 `rounded-2xl` (16px)
- **阴影**: `shadow-xl`
- **边框**: `border-4 border-cyan-400`
- **间距**: `py-12` (垂直), `px-4 sm:px-6 lg:px-8` (水平)

## 📝 添加新游戏完整流程

### 步骤1：准备资源
```bash
# 1. 下载游戏缩略图
curl -o "public/images/thumbnails/game-slug.jpg" "图片URL"

# 2. 创建游戏iframe目录
mkdir -p "public/game/game-slug"

# 3. 创建 index.html（如果需要）
# 在 public/game/game-slug/index.html
```

### 步骤2：添加游戏数据
**文件**: `src/data/games.ts`
```typescript
{
  name: '游戏名称',
  image: '/images/thumbnails/game-slug.jpg',
  slug: 'game-slug',
  isReal: true,
  releaseDate: '2025-01-11',
  tags: ['Tag1', 'Tag2', 'Tag3']  // 🔥 重要
}
```

### 步骤3：创建游戏详情页
**文件**: `src/pages/GameNamePage.tsx`
```typescript
// 使用上面的标准模板代码
```

### 步骤4：添加路由
**文件**: `src/Router.tsx`
```typescript
import GameNamePage from './pages/GameNamePage';

// 在 routes 数组中添加
{
  path: /^\/game-slug$/,
  component: () => <GameNamePage />,
},
```

### 步骤5：测试
```bash
# 访问游戏页面
http://localhost:5173/game-slug

# 检查清单：
✓ 游戏正常加载
✓ 相关游戏显示12个
✓ More Games 显示12个
✓ 标签可点击
✓ 评论功能正常
✓ NEW徽章显示（如果是最近7天）
```

## 🔧 配置参数快速参考

### GameDetailTemplate.tsx
```typescript
const RELATED_GAMES_COUNT = 12;  // 相关游戏数量
const MORE_GAMES_COUNT = 12;     // More Games数量
```

### NewBadge.tsx
```typescript
const NEW_BADGE_DAYS = 7;  // NEW徽章显示天数
```

### 修改推荐数量
如果需要修改相关游戏推荐数量：
1. 打开 `src/components/GameDetailTemplate.tsx`
2. 修改第 57 行：`const RELATED_GAMES_COUNT = 12;`
3. 改为你想要的数量，例如：`const RELATED_GAMES_COUNT = 18;`

## 🚀 快速命令

### 让AI快速了解系统
```
请阅读 SYSTEM_CONFIG.md 文件，了解游戏网站的系统架构和逻辑
```

### 添加新游戏
```
请按照 SYSTEM_CONFIG.md 中的流程添加新游戏：
- 游戏名称：[名称]
- 游戏URL：[URL]
- 缩略图：[图片URL]
- 标签：[Tag1, Tag2, Tag3]
```

### 修改推荐逻辑
```
请修改游戏推荐逻辑：
- 相关游戏数量改为 [数量]
- 推荐算法改为 [描述]
参考 SYSTEM_CONFIG.md 中的推荐算法部分
```

### 更新现有游戏
```
请更新游戏 [game-slug]：
- 修改标签为：[新标签]
- 修改介绍为：[新介绍]
参考 SYSTEM_CONFIG.md 中的游戏数据管理部分
```

## 📚 相关文档

- `GAME_PAGES_UNIFIED_SUMMARY.md` - 游戏详情页统一化总结
- `RELATED_GAMES_FIX.md` - 相关游戏推荐修复说明
- `UNIFICATION_PROGRESS.md` - 统一化进度跟踪
- `GAME_PAGES_UNIFICATION_PLAN.md` - 详细统一化计划

## ⚠️ 重要提示

1. **标签是关键**: 游戏标签直接影响相关游戏推荐质量
2. **发布日期**: 影响 NEW 徽章显示和 More Games 排序
3. **模板优先**: 所有新游戏页面必须使用 GameDetailTemplate
4. **路由顺序**: 具体路由必须在通用路由之前
5. **测试完整性**: 每次添加游戏后必须测试所有功能

---

**文档版本**: 1.0  
**最后更新**: 2025-01-11  
**维护者**: 开发团队

