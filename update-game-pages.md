# 需要更新的游戏页面列表

以下页面需要更新"相似游戏"部分，限制为12个游戏（2排）：

## ✅ 已完成
- [x] HomePage.tsx
- [x] GameDetailPage.tsx  
- [x] BrainrotClickerPage.tsx

## 📝 待更新
- [ ] BrainrotHookSwingPage.tsx
- [ ] FixDaBrainrotPage.tsx
- [ ] ItalianBrainrotBabyClickerPage.tsx
- [ ] ItalianBrainrotClicker2Page.tsx
- [ ] MemoryBrainrotPage.tsx
- [ ] ObbyMySingingBrainrotPage.tsx
- [ ] PlantsVsBrainrotsPage.tsx
- [ ] StealBrainrotNewAnimalsPage.tsx
- [ ] StealBrainrotOnlinePage.tsx
- [ ] StealTheItalianBrainrotPage.tsx

## 更新步骤

对于每个页面：

1. **添加导入**：
```typescript
import NewBadge from '../components/NewBadge';
import { allGames, isRealGame } from '../data/games';
```

2. **替换游戏列表**：
将硬编码的游戏数组替换为：
```typescript
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
```

## 关键点

- 使用 `.slice(0, 12)` 限制为12个游戏
- 添加 `relative` 到容器div以支持NEW标签定位
- 使用 `isRealGame()` 类型守卫
- 为真实游戏添加NEW标签支持

