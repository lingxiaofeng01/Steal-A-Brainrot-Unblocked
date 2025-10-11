# 游戏列表限制更新状态

## 📋 任务目标
将所有页面的"相似游戏"区域限制为最多12个游戏（2排，每排6个）

---

## ✅ 已完成的页面

### 核心页面
- [x] **HomePage.tsx** - 首页
- [x] **GameDetailPage.tsx** - 通用游戏详情页

### 具体游戏页面
- [x] **BrainrotClickerPage.tsx**
- [x] **FixDaBrainrotPage.tsx**

### 已添加导入但待更新游戏列表
- [x] BrainrotHookSwingPage.tsx (导入已添加)
- [x] ItalianBrainrotBabyClickerPage.tsx (导入已添加)
- [x] ItalianBrainrotClicker2Page.tsx (导入已添加)
- [x] MemoryBrainrotPage.tsx (导入已添加)
- [x] ObbyMySingingBrainrotPage.tsx (导入已添加)
- [x] PlantsVsBrainrotsPage.tsx (导入已添加)
- [x] StealBrainrotNewAnimalsPage.tsx (导入已添加)
- [x] StealBrainrotOnlinePage.tsx (导入已添加)
- [x] StealTheItalianBrainrotPage.tsx (导入已添加)

---

## 🔄 需要完成的步骤

对于每个"已添加导入但待更新游戏列表"的页面，需要：

1. 找到游戏列表部分（通常在第160-260行之间）
2. 查找包含硬编码游戏数组的代码块
3. 替换为统一的 `allGames.slice(0, 12)` 模式

### 替换模式

**查找：**
```tsx
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
  {[
    { name: '...', image: '...', slug: '...', isReal: true },
    // ... 更多游戏
    { emoji: '...', name: '...', color: '...' },
  ].map((game, i) => (
    // ... 游戏卡片代码
  ))}
</div>
```

**替换为：**
```tsx
<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
  {allGames.slice(0, 12).map((game, i) => (
    <a
      key={i}
      href={isRealGame(game) ? `/game/${game.slug}` : '#'}
      className="group cursor-pointer block"
      onClick={(e) => !isRealGame(game) && e.preventDefault()}
    >
      <div className={`relative aspect-square rounded-xl overflow-hidden border-3 border-gray-300 hover:border-cyan-400 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-xl ${isRealGame(game) ? 'bg-white' : `bg-gradient-to-br ${game.color}`}`}>
        {isRealGame(game) ? (
          <>
            {game.releaseDate && <NewBadge releaseDate={game.releaseDate} />}
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover"
            />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl">
            {game.emoji}
          </div>
        )}
      </div>
      <p className="text-center text-sm font-semibold text-gray-700 mt-2 truncate">{game.name}</p>
    </a>
  ))}
</div>
```

---

## 🎯 关键改进

### 1. 统一数据源
- ✅ 所有游戏数据来自 `src/data/games.ts`
- ✅ 单一数据源，易于维护

### 2. 限制游戏数量
- ✅ 使用 `.slice(0, 12)` 限制为12个游戏
- ✅ 正好2排（每排6个）

### 3. NEW标签支持
- ✅ 自动显示7天内发布的游戏的NEW标签
- ✅ 紫色渐变设计，带脉冲动画

### 4. 类型安全
- ✅ 使用 `isRealGame()` 类型守卫
- ✅ TypeScript类型检查

---

## 📊 当前游戏数据

`src/data/games.ts` 包含：
- **11个真实游戏**
- **1个占位游戏**
- **总计：12个游戏**

完美匹配2排显示！

---

## 🔍 待更新页面的查找方法

使用以下命令查找需要更新的游戏列表：

```bash
# 在每个页面中查找游戏列表模式
# 查找包含 "].map((game, i) =>" 的行
```

或者在编辑器中搜索：
- 关键词：`].map((game, i) =>`
- 文件类型：`.tsx`
- 目录：`src/pages/`

---

## ✨ 完成后的效果

所有页面将：
1. ✅ 显示相同的12个游戏
2. ✅ 新游戏自动显示NEW标签
3. ✅ 统一的视觉效果
4. ✅ 易于维护和更新

---

## 📝 下一步行动

### 选项1：手动更新（推荐）
逐个打开待更新的页面，使用 `str-replace-editor` 工具替换游戏列表

### 选项2：批量更新
使用提供的 `batch-update-games.ps1` 脚本作为参考，批量处理

### 选项3：测试优先
先更新1-2个页面，测试效果后再批量更新其他页面

---

## 🎉 预期成果

完成所有更新后：
- 所有游戏页面显示一致的12个游戏
- NEW标签自动工作
- 代码更简洁、易维护
- 用户体验更统一

---

**当前进度：4/13 页面完成 (31%)**

继续加油！ 🚀

