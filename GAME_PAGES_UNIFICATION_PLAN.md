# 🎮 游戏详情页统一化计划

## 📋 标准布局顺序

根据用户要求，所有游戏详情页必须按以下顺序展示：

1. **游戏框架展示** - 游戏预览/播放器（带背景图和渐变）
2. **相关游戏** - 通过tag相关调取（6个游戏）
3. **游戏简介** - 名称、缩略图、评分、标签
4. **游戏介绍** - 游戏是什么、游戏玩法介绍等
5. **游戏评论** - 玩家评论
6. **More Games** - 按时间排序的游戏列表（展示12个）

## 🏗️ 新架构

### 创建的模板组件
- ✅ `src/components/GameDetailTemplate.tsx` - 统一的游戏详情页模板

### 模板特性
1. **自动化布局** - 按标准顺序排列所有部分
2. **相关游戏智能匹配** - 通过标签自动筛选相关游戏
3. **时间排序** - More Games 按发布日期降序排列
4. **响应式设计** - 完全响应式布局
5. **统一样式** - 所有页面视觉一致

## 📝 使用方法

### 旧代码结构（需要废弃）
```typescript
export default function GamePage() {
  const [showGame, setShowGame] = useState(false);
  // ... 大量重复代码
  return (
    <Layout>
      {/* 手动编写所有布局 */}
    </Layout>
  );
}
```

### 新代码结构（推荐）
```typescript
import GameDetailTemplate from '../components/GameDetailTemplate';

export default function GamePage() {
  const game = {
    slug: 'game-slug',
    title: 'Game Title',
    subtitle: 'Game Subtitle',
    description: 'Short description',
    playUrl: 'https://...',
    thumbnail: '/images/thumbnails/game.jpg',
    rating: 4.5,
    playCount: 1000,
    tags: ['Tag1', 'Tag2'],
    backgroundColor: 'from-color-400 to-color-500',
    backgroundImage: 'url(...)' // 可选
  };

  const aboutContent = (
    <p>About the game...</p>
  );

  const howToPlayContent = (
    <ul>
      <li>Step 1</li>
      <li>Step 2</li>
    </ul>
  );

  const featuresContent = (
    <div>Features grid...</div>
  );

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

## 🎯 需要更新的游戏页面

### 游戏详情页列表（12个）
1. [ ] BrainrotClickerPage.tsx
2. [ ] BrainrotHookSwingPage.tsx
3. [ ] CrazyCattle3DPage.tsx
4. [ ] FixDaBrainrotPage.tsx
5. [ ] ItalianBrainrotBabyClickerPage.tsx
6. [ ] ItalianBrainrotClicker2Page.tsx
7. [ ] MemoryBrainrotPage.tsx
8. [ ] ObbyMySingingBrainrotPage.tsx
9. [ ] PlantsVsBrainrotsPage.tsx
10. [ ] StealBrainrotNewAnimalsPage.tsx
11. [ ] StealBrainrotOnlinePage.tsx
12. [ ] StealTheItalianBrainrotPage.tsx

## 🔄 更新步骤

### 对于每个游戏页面：

1. **提取游戏数据**
   ```typescript
   const game = {
     slug: '...',
     title: '...',
     // ... 从旧代码中提取
   };
   ```

2. **提取内容部分**
   - aboutContent - "About Game" 部分的内容
   - howToPlayContent - "How to Play" 部分的内容
   - featuresContent - "Game Features" 部分的内容

3. **替换整个文件**
   - 删除所有旧的布局代码
   - 导入 GameDetailTemplate
   - 传入数据和内容

4. **测试**
   - 检查游戏是否正常加载
   - 检查所有部分是否按正确顺序显示
   - 检查相关游戏是否正确显示
   - 检查More Games是否按时间排序

## 📊 布局对比

### 旧布局（不一致）
```
游戏展示
  ↓
游戏简介
  ↓
评论
  ↓
相关游戏
  ↓
游戏介绍
```

### 新布局（统一标准）
```
游戏展示
  ↓
相关游戏（通过tag）
  ↓
游戏简介
  ↓
游戏介绍
  ↓
评论
  ↓
More Games（按时间）
```

## 🎨 视觉统一

### 所有页面将具有：
1. ✅ 统一的背景图和渐变效果
2. ✅ 统一的游戏预览卡片样式
3. ✅ 统一的标题和分隔线样式
4. ✅ 统一的游戏卡片网格布局
5. ✅ 统一的评论区样式
6. ✅ 统一的标签样式

### 配色方案
- 主色调：青色 (`cyan-400`)
- 背景：橙色到琥珀色渐变 (`from-orange-200 to-amber-200`)
- 游戏介绍：粉色到青色渐变 (`from-pink-100 via-blue-100 to-cyan-100`)
- 分隔线：青色 (`border-cyan-400`)

## 🚀 优势

### 代码优势
1. **减少重复代码** - 从每个页面 ~250行 减少到 ~80行
2. **易于维护** - 修改模板即可更新所有页面
3. **一致性保证** - 所有页面自动保持一致
4. **类型安全** - TypeScript 接口确保数据正确

### 用户体验优势
1. **统一导航** - 用户在所有游戏页面有相同的体验
2. **智能推荐** - 相关游戏基于标签自动匹配
3. **最新游戏** - More Games 始终显示最新游戏
4. **更好的发现** - 用户更容易发现相关游戏

## 📈 实施计划

### 阶段1：模板创建 ✅
- [x] 创建 GameDetailTemplate 组件
- [x] 实现所有6个标准部分
- [x] 添加相关游戏逻辑
- [x] 添加时间排序逻辑

### 阶段2：示例页面 ✅
- [x] 创建 BrainrotClickerPage_NEW.tsx 作为示例

### 阶段3：批量更新（进行中）
- [ ] 更新所有12个游戏详情页
- [ ] 测试每个页面
- [ ] 删除旧的备份文件

### 阶段4：优化
- [ ] 添加更智能的相关游戏匹配算法
- [ ] 优化性能
- [ ] 添加加载状态
- [ ] SEO优化

## 🔧 技术细节

### 相关游戏匹配逻辑
```typescript
const getRelatedGames = () => {
  return allGames
    .filter(g => {
      if (!isRealGame(g) || g.slug === game.slug) return false;
      // 检查是否有共同标签
      return true; // 暂时返回所有游戏
    })
    .slice(0, 6);
};
```

**TODO**: 需要在 `src/data/games.ts` 中为每个游戏添加 tags 字段

### 时间排序逻辑
```typescript
const getLatestGames = () => {
  return allGames
    .filter(g => isRealGame(g) && g.slug !== game.slug)
    .sort((a, b) => {
      const dateA = a.releaseDate ? new Date(a.releaseDate).getTime() : 0;
      const dateB = b.releaseDate ? new Date(b.releaseDate).getTime() : 0;
      return dateB - dateA; // 降序
    })
    .slice(0, 12);
};
```

## 📝 注意事项

1. **保留旧文件** - 在确认新版本正常工作前，保留旧文件作为备份
2. **逐个测试** - 每更新一个页面，立即测试
3. **内容完整性** - 确保所有游戏介绍内容都被正确迁移
4. **图片路径** - 检查所有图片路径是否正确
5. **游戏URL** - 确保 playUrl 正确

## ✅ 验收标准

每个更新的页面必须满足：
- [ ] 布局顺序正确（6个部分按顺序）
- [ ] 相关游戏显示（6个）
- [ ] More Games 显示（12个，按时间排序）
- [ ] 评论功能正常
- [ ] 全屏功能正常
- [ ] 响应式布局正常
- [ ] 所有链接可点击
- [ ] 标签可点击（如果有标签页）
- [ ] NEW 徽章正确显示

---

**创建时间**: 2025-01-11  
**状态**: 进行中  
**预计完成**: 2025-01-11

