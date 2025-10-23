# 🚀 部署指南 - Steal a Brainrot Unblocked

## 📋 前置条件

- ✅ GitHub 账户
- ✅ Vercel 账户（免费）
- ✅ Supabase 项目已配置

---

## 🔐 环境变量配置

### 本地开发 (`.env.local`)
```bash
NEXT_PUBLIC_SUPABASE_URL=https://tgoyqxcqpwevgztprqgk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Vercel 生产环境
在 Vercel Dashboard 中设置相同的环境变量。

---

## 📤 上传到 GitHub

### 步骤 1: 验证 Git 状态
```bash
git status
```

### 步骤 2: 查看最新 commit
```bash
git log --oneline -1
```

### 步骤 3: 推送到 GitHub
```bash
git push origin master
```

**预期输出:**
```
[master 0b7bcf5] feat: migrate from Vite to Next.js 15 with full production setup
 896 files changed, 31464 insertions(+), 10841 deletions(-)
```

---

## 🌐 部署到 Vercel

### 方法 1: 自动部署（推荐）

1. **访问 Vercel Dashboard**
   - https://vercel.com/dashboard

2. **导入项目**
   - 点击 "Add New" → "Project"
   - 选择 GitHub 仓库 `Steal-A-Brainrot-Unblocked`
   - Vercel 会自动检测 Next.js 项目

3. **配置环境变量**
   - 在 "Environment Variables" 中添加：
     ```
     NEXT_PUBLIC_SUPABASE_URL
     NEXT_PUBLIC_SUPABASE_ANON_KEY
     ```

4. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 2-3 分钟）

### 方法 2: 使用 Vercel CLI

```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel --prod
```

---

## ✅ 部署检查清单

- [ ] Git commit 已推送到 GitHub
- [ ] `.env.local` 未被提交（检查 `.gitignore`）
- [ ] `.env.example` 已提交
- [ ] `vercel.json` 已提交
- [ ] Vercel 环境变量已配置
- [ ] 生产构建成功（122 页面）
- [ ] 网站可访问

---

## 🔍 验证部署

### 检查 Vercel 部署状态
```bash
# 查看部署日志
vercel logs --prod
```

### 测试网站
1. 访问 Vercel 提供的 URL
2. 检查首页加载
3. 测试游戏页面
4. 验证评论系统

---

## 🐛 常见问题

### 问题 1: 环境变量未定义
**解决方案:**
- 检查 Vercel Dashboard 中的环境变量
- 确保变量名称完全匹配
- 重新部署

### 问题 2: Supabase 连接失败
**解决方案:**
- 验证 Supabase URL 和密钥
- 检查 Supabase 项目是否在线
- 查看浏览器控制台错误

### 问题 3: 构建失败
**解决方案:**
```bash
# 本地测试构建
npm run build

# 检查错误信息
npm run typecheck
```

---

## 📊 部署后监控

### Vercel Analytics
- 访问 Vercel Dashboard 查看性能指标
- 监控 Core Web Vitals
- 检查错误日志

### Supabase 监控
- 访问 Supabase Dashboard
- 检查数据库连接
- 监控 API 使用量

---

## 🔄 持续部署

### 自动部署流程
1. 本地开发完成
2. 提交到 GitHub
3. Vercel 自动检测更改
4. 自动构建和部署
5. 部署完成后自动测试

### 手动部署
```bash
# 如需手动部署
vercel --prod
```

---

## 📞 支持

- **GitHub Issues**: https://github.com/lingxiaofeng01/Steal-A-Brainrot-Unblocked/issues
- **Vercel Support**: https://vercel.com/support
- **Supabase Support**: https://supabase.com/support

---

**部署日期**: 2025-10-22  
**状态**: ✅ 生产就绪

