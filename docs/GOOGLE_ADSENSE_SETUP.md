# Google AdSense 集成文档

## 概述

本项目已成功集成 Google AdSense 广告系统，使用发布商 ID：`ca-pub-3701727349784910`

## 广告位置

### 1. 自动广告（全站）

**位置**：`index.html` 的 `<head>` 标签中

**代码**：
```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3701727349784910"
     crossorigin="anonymous"></script>
```

**说明**：Google 会自动在页面合适位置显示广告，无需手动配置。

---

### 2. 游戏详情页广告

**文件**：`src/components/GameDetailTemplate.tsx`

#### 广告位 1：游戏下方横幅广告
- **位置**：游戏播放器下方，游戏介绍上方
- **类型**：横幅广告（AdSenseBanner）
- **格式**：horizontal
- **最小高度**：90px
- **样式**：浅灰色背景，圆角

#### 广告位 2：内容中间广告
- **位置**：游戏介绍下方，评论区上方
- **类型**：文章内广告（AdSenseInArticle）
- **格式**：fluid, in-article
- **样式**：浅灰色背景，圆角

---

### 3. 首页广告

**文件**：`src/pages/HomePage.tsx`

#### 广告位 1：游戏列表下方
- **位置**：相关游戏列表下方，游戏详情上方
- **类型**：横幅广告（AdSenseBanner）
- **格式**：horizontal
- **最小高度**：90px

#### 广告位 2：评论下方
- **位置**：评论区下方，更多游戏列表上方
- **类型**：文章内广告（AdSenseInArticle）
- **格式**：fluid, in-article

---

### 4. 侧边栏广告

**文件**：`src/components/Sidebar.tsx`

#### 广告位：侧边栏底部
- **位置**：菜单项下方
- **类型**：矩形广告（AdSenseRectangle）
- **格式**：rectangle
- **最小高度**：250px
- **显示条件**：仅在桌面端显示（`hidden lg:block`）

---

## 广告组件

### 文件：`src/components/AdSense.tsx`

提供了以下预定义广告组件：

#### 1. `AdSense`（基础组件）
通用广告组件，支持自定义配置。

**Props**：
- `adSlot?: string` - 广告单元 ID
- `adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal'` - 广告格式
- `adLayout?: string` - 广告布局（如 'in-article', 'in-feed'）
- `adStyle?: React.CSSProperties` - 自定义样式
- `className?: string` - CSS 类名
- `responsive?: boolean` - 是否响应式（默认 true）

#### 2. `AdSenseBanner`
横幅广告，适合页面顶部/底部。
- 格式：horizontal
- 最小高度：90px

#### 3. `AdSenseRectangle`
矩形广告，适合侧边栏。
- 格式：rectangle
- 最小高度：250px

#### 4. `AdSenseInArticle`
文章内广告，适合内容中间。
- 格式：fluid
- 布局：in-article

#### 5. `AdSenseInFeed`
信息流广告，适合游戏列表之间。
- 格式：fluid
- 布局：in-feed
- 最小高度：200px

#### 6. `AdSenseResponsive`
自适应广告，通用场景。
- 格式：auto
- 完全响应式

---

## 使用方法

### 1. 导入组件

```tsx
import { AdSenseBanner, AdSenseInArticle, AdSenseRectangle } from '../components/AdSense';
```

### 2. 在页面中使用

```tsx
{/* 横幅广告 */}
<AdSenseBanner className="bg-gray-100 rounded-lg p-4" />

{/* 文章内广告 */}
<AdSenseInArticle className="bg-gray-50 rounded-lg p-4" />

{/* 矩形广告 */}
<AdSenseRectangle className="bg-white/10 rounded-lg p-2" />
```

---

## 广告单元配置（可选）

如果需要使用特定的广告单元 ID（从 Google AdSense 后台获取），可以这样配置：

```tsx
<AdSense
  adSlot="1234567890"  // 从 AdSense 后台获取
  adFormat="auto"
  className="my-custom-ad"
/>
```

---

## 最佳实践

### 1. 广告位置选择
- ✅ **游戏下方**：用户玩完游戏后自然会看到
- ✅ **内容之间**：不打断阅读流程，自然融入
- ✅ **侧边栏**：桌面端利用空白空间
- ❌ **避免**：游戏播放器上方、内容开头（影响用户体验）

### 2. 广告密度
- 每个页面 2-3 个广告位即可
- 避免广告过多影响用户体验
- 移动端减少广告数量

### 3. 响应式设计
- 所有广告组件默认启用响应式
- 移动端自动调整广告尺寸
- 侧边栏广告仅在桌面端显示

### 4. 性能优化
- 广告脚本使用 `async` 异步加载
- 不阻塞页面渲染
- 使用 `contentVisibility: auto` 优化性能

---

## 监控和优化

### 1. Google AdSense 后台
访问 https://adsense.google.com 查看：
- 广告展示次数
- 点击率（CTR）
- 收入报告
- 广告单元性能

### 2. 优化建议
- 定期检查广告性能
- 调整广告位置和格式
- A/B 测试不同广告布局
- 关注用户反馈

---

## 故障排查

### 问题 1：广告不显示
**可能原因**：
1. AdSense 账户未激活或审核中
2. 网站未添加到 AdSense 允许列表
3. 广告被浏览器拦截器屏蔽

**解决方案**：
1. 检查 AdSense 账户状态
2. 在 AdSense 后台添加网站域名
3. 在无广告拦截器的浏览器中测试

### 问题 2：广告显示空白
**可能原因**：
1. 广告单元 ID 错误
2. 网站内容不符合 AdSense 政策
3. 广告库存不足

**解决方案**：
1. 检查 `data-ad-client` 和 `data-ad-slot` 是否正确
2. 确保网站内容符合 Google 政策
3. 等待 Google 填充广告

### 问题 3：控制台报错
**常见错误**：
```
adsbygoogle.push() error: No slot size for availableWidth=0
```

**解决方案**：
- 确保广告容器有足够的宽度
- 检查 CSS 样式是否隐藏了广告容器
- 使用 `display: block` 确保广告可见

---

## 合规性

### Google AdSense 政策
- ✅ 不点击自己的广告
- ✅ 不诱导用户点击广告
- ✅ 不在违规内容页面显示广告
- ✅ 遵守 Google 发布商政策

### 隐私政策
- 需要在网站添加隐私政策页面
- 说明使用 Google AdSense 和 Cookie
- 符合 GDPR/CCPA 等隐私法规

---

## 未来扩展

### 可以添加广告的其他位置
1. **分类页面**（`/tag/*`）- 游戏列表之间
2. **搜索结果页**（`/search`）- 搜索结果之间
3. **关于我们页面**（`/about`）- 内容底部
4. **404 页面** - 页面底部

### 添加新广告位的步骤
1. 导入 AdSense 组件
2. 在合适位置插入广告组件
3. 添加适当的样式和间距
4. 测试广告显示效果
5. 监控广告性能

---

## 总结

✅ **已完成**：
- 自动广告脚本已添加到 `index.html`
- 创建了 AdSense 组件库（`src/components/AdSense.tsx`）
- 在游戏详情页添加了 2 个广告位
- 在首页添加了 2 个广告位
- 在侧边栏添加了 1 个广告位（桌面端）

📊 **广告位总数**：5 个手动广告位 + 自动广告

🎯 **优化目标**：在不影响用户体验的前提下，最大化广告收入

---

**最后更新**：2025-11-04
**维护者**：开发团队

