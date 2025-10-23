# 🌐 域名配置完整指南

## 📋 目标
将 Spaceship 上的域名解析到 Vercel，并通过 Cloudflare 加速和保护

---

## 第一步：在 Vercel 中添加域名

### 1.1 访问 Vercel 项目设置
1. 登录 https://vercel.com/dashboard
2. 选择你的项目 "steal-a-brainrot-unblocked"
3. 点击 "Settings" → "Domains"

### 1.2 添加域名
1. 点击 "Add Domain"
2. 输入你的域名（例如：`stealabrainrotunblocked.com`）
3. 点击 "Add"

### 1.3 选择 DNS 提供商
Vercel 会显示两个选项：
- **Option A**: 使用 Vercel 的 DNS（简单但不能用 Cloudflare）
- **Option B**: 使用自己的 DNS 提供商（我们选这个）

**选择 Option B**，Vercel 会给你 DNS 记录

---

## 第二步：在 Cloudflare 中添加域名

### 2.1 访问 Cloudflare
1. 登录 https://dash.cloudflare.com/login
2. 点击 "Add a Site"
3. 输入你的域名
4. 选择免费计划（Free）
5. 点击 "Continue"

### 2.2 Cloudflare 会显示 Nameservers
记下这两个 Nameserver：
```
例如：
ns1.cloudflare.com
ns2.cloudflare.com
```

---

## 第三步：在 Spaceship 中更改 Nameservers

### 3.1 登录 Spaceship
1. 访问 https://www.spaceship.com/
2. 登录你的账户
3. 找到 "My Domains" 或 "Manage Domains"

### 3.2 选择你的域名
1. 找到你的域名
2. 点击 "Manage" 或 "Edit"

### 3.3 更改 Nameservers
1. 找到 "Nameservers" 或 "DNS Settings"
2. 选择 "Custom Nameservers"
3. 删除现有的 Nameservers
4. 输入 Cloudflare 的 Nameservers：
   ```
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```
5. 保存更改

**⏳ 等待 24-48 小时 DNS 生效**

---

## 第四步：在 Cloudflare 中添加 DNS 记录

### 4.1 回到 Cloudflare Dashboard
1. 选择你的域名
2. 点击 "DNS" 标签

### 4.2 添加 A 记录（指向 Vercel）
Vercel 会给你一个 IP 地址，例如：`76.76.19.165`

1. 点击 "Add Record"
2. 选择类型：**A**
3. 名称：**@**（表示根域名）
4. IPv4 地址：粘贴 Vercel 给的 IP
5. TTL：Auto
6. Proxy status：**Proxied**（橙色云）
7. 点击 "Save"

### 4.3 添加 CNAME 记录（www 子域名）
1. 点击 "Add Record"
2. 选择类型：**CNAME**
3. 名称：**www**
4. 目标：**example.com**（你的根域名）
5. TTL：Auto
6. Proxy status：**Proxied**（橙色云）
7. 点击 "Save"

---

## 第五步：在 Vercel 中验证域名

### 5.1 回到 Vercel
1. 进入项目 Settings → Domains
2. 你应该看到你的域名列表
3. 等待 DNS 验证完成（通常几分钟到几小时）

### 5.2 验证状态
- ✅ **Valid Configuration** - 域名已正确配置
- ⏳ **Pending Verification** - 等待 DNS 生效
- ❌ **Invalid Configuration** - 检查 DNS 记录

---

## 第六步：启用 HTTPS（SSL/TLS）

### 6.1 Cloudflare 中启用 SSL
1. 在 Cloudflare Dashboard 中
2. 点击 "SSL/TLS"
3. 选择 "Flexible" 或 "Full"（推荐 Full）
4. 自动启用 HTTPS

### 6.2 Vercel 中的 SSL
- Vercel 会自动为你的域名生成 SSL 证书
- 通常需要 5-10 分钟

---

## 📊 完整流程图

```
Spaceship 域名
    ↓
更改 Nameservers 为 Cloudflare
    ↓
Cloudflare DNS 管理
    ↓
添加 A 记录 → Vercel IP
添加 CNAME 记录 → www 子域名
    ↓
Vercel 验证域名
    ↓
启用 SSL/TLS
    ↓
✅ 完成！域名已连接
```

---

## 🔍 DNS 记录示例

| 类型 | 名称 | 内容 | TTL | 代理状态 |
|------|------|------|-----|---------|
| A | @ | 76.76.19.165 | Auto | Proxied |
| CNAME | www | example.com | Auto | Proxied |

---

## ⏱️ 时间表

| 步骤 | 预计时间 |
|------|---------|
| Cloudflare 添加域名 | 5 分钟 |
| Spaceship 更改 Nameservers | 立即 |
| DNS 全球生效 | 24-48 小时 |
| Vercel 验证域名 | 5-30 分钟 |
| SSL 证书生成 | 5-10 分钟 |
| **总计** | **24-48 小时** |

---

## 🆘 常见问题

### Q: 如何检查 DNS 是否生效？
```bash
nslookup example.com
# 或
dig example.com
```

### Q: 域名指向错误怎么办？
1. 检查 Cloudflare 中的 DNS 记录
2. 检查 Spaceship 中的 Nameservers
3. 等待 DNS 缓存清除（24 小时）

### Q: 如何从 Cloudflare 切换回 Vercel DNS？
1. 在 Spaceship 中改回原来的 Nameservers
2. 在 Vercel 中选择 "Nameserver" 选项
3. 等待 DNS 生效

---

## ✅ 验证清单

- [ ] Cloudflare 账户已创建
- [ ] 域名已添加到 Cloudflare
- [ ] Nameservers 已在 Spaceship 中更新
- [ ] DNS 记录已在 Cloudflare 中添加
- [ ] Vercel 中域名已验证
- [ ] SSL 证书已生成
- [ ] 网站可通过域名访问
- [ ] HTTPS 已启用

---

## 🚀 下一步

1. 按照上述步骤配置域名
2. 等待 DNS 生效
3. 访问你的域名测试
4. 在 Cloudflare 中配置其他安全设置（可选）

**需要帮助吗？** 告诉我你在哪一步遇到问题！

