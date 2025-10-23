# 🌐 Vercel 中添加自定义域名 - 详细步骤

## 第一步：在 Vercel 中添加域名

### 1.1 点击 "Add Domain" 按钮
你已经看到了这个界面，现在点击右上角的 **"Add Domain"** 按钮

### 1.2 输入你的域名
在弹出的对话框中输入你的域名：
```
stealabrainrotunblocked.com
```
或者你在 Spaceship 上购买的实际域名

### 1.3 选择 DNS 配置方式

Vercel 会显示两个选项：

#### **选项 A: Vercel Nameservers（简单但不能用 Cloudflare）**
- Vercel 管理 DNS
- 自动配置
- 不能使用 Cloudflare

#### **选项 B: Custom Nameservers（推荐 - 用 Cloudflare）**
- 你自己管理 DNS
- 可以使用 Cloudflare
- 需要手动配置

**我们选择 Option B**

---

## 第二步：获取 Vercel 的 DNS 信息

### 2.1 选择 "Custom Nameservers" 后
Vercel 会显示一个 **A 记录** 和 **CNAME 记录**：

```
A Record:
Name: @
Value: 76.76.19.165 (或其他 IP)

CNAME Record:
Name: www
Value: cname.vercel-dns.com
```

**记下这些信息！**

---

## 第三步：在 Cloudflare 中添加域名

### 3.1 访问 Cloudflare
1. 登录 https://dash.cloudflare.com/login
2. 点击 "Add a Site"
3. 输入你的域名
4. 选择 **Free** 计划
5. 点击 "Continue"

### 3.2 Cloudflare 会显示 Nameservers
记下这两个 Nameserver：
```
例如：
ns1.cloudflare.com
ns2.cloudflare.com
```

**这些是你需要在 Spaceship 中设置的！**

---

## 第四步：在 Spaceship 中更改 Nameservers

### 4.1 登录 Spaceship
1. 访问 https://www.spaceship.com/
2. 登录你的账户
3. 找到 "My Domains" 或 "Manage Domains"

### 4.2 选择你的域名
1. 找到你的域名
2. 点击 "Manage" 或 "Edit DNS"

### 4.3 更改 Nameservers
1. 找到 "Nameservers" 或 "DNS Settings"
2. 选择 "Custom Nameservers" 或 "Use Custom DNS"
3. 删除现有的 Nameservers
4. 输入 Cloudflare 的 Nameservers：
   ```
   ns1.cloudflare.com
   ns2.cloudflare.com
   ```
5. 保存更改

**⏳ 等待 24-48 小时 DNS 生效**

---

## 第五步：在 Cloudflare 中添加 DNS 记录

### 5.1 回到 Cloudflare Dashboard
1. 选择你的域名
2. 点击 "DNS" 标签

### 5.2 添加 A 记录（根域名）
1. 点击 "Add Record"
2. 类型：**A**
3. 名称：**@**
4. IPv4 地址：粘贴 Vercel 给的 IP（例如：76.76.19.165）
5. TTL：**Auto**
6. Proxy status：**Proxied**（橙色云）
7. 点击 "Save"

### 5.3 添加 CNAME 记录（www 子域名）
1. 点击 "Add Record"
2. 类型：**CNAME**
3. 名称：**www**
4. 目标：粘贴 Vercel 给的 CNAME（例如：cname.vercel-dns.com）
5. TTL：**Auto**
6. Proxy status：**Proxied**（橙色云）
7. 点击 "Save"

---

## 第六步：验证 Vercel 中的域名

### 6.1 回到 Vercel
1. 进入项目 Settings → Domains
2. 你应该看到你的域名列表
3. 等待 DNS 验证完成

### 6.2 验证状态
- ✅ **Valid Configuration** - 域名已正确配置
- ⏳ **Pending Verification** - 等待 DNS 生效
- ❌ **Invalid Configuration** - 检查 DNS 记录

---

## 📊 DNS 记录示例

| 类型 | 名称 | 内容 | TTL | 代理 |
|------|------|------|-----|------|
| A | @ | 76.76.19.165 | Auto | Proxied |
| CNAME | www | cname.vercel-dns.com | Auto | Proxied |

---

## 🔍 检查 DNS 是否生效

### 使用在线工具
1. 访问 https://www.nslookup.io/
2. 输入你的域名
3. 检查 A 记录和 CNAME 记录

### 使用命令行
```bash
# 检查 A 记录
nslookup example.com

# 检查 CNAME 记录
nslookup www.example.com

# 详细信息
dig example.com
```

---

## ⏱️ 时间表

| 步骤 | 预计时间 |
|------|---------|
| Cloudflare 添加域名 | 5 分钟 |
| Spaceship 更改 Nameservers | 立即 |
| DNS 全球生效 | 24-48 小时 |
| Vercel 验证域名 | 5-30 分钟 |
| SSL 证书生成 | 5-10 分钟 |

---

## ✅ 完成后

1. ✅ 访问你的域名：https://stealabrainrotunblocked.com
2. ✅ 检查 HTTPS 是否启用
3. ✅ 在 Cloudflare 中配置其他安全设置（可选）

---

## 🆘 常见问题

### Q: 如何知道 DNS 是否生效？
A: 使用 nslookup 或访问 https://www.nslookup.io/ 检查

### Q: 为什么还是显示 "Pending Verification"？
A: DNS 可能还没有全球生效，等待 24-48 小时

### Q: 如何切换回 Vercel Nameservers？
A: 在 Spaceship 中改回原来的 Nameservers，然后在 Vercel 中选择 "Vercel Nameservers"

### Q: Cloudflare 的 "Proxied" 是什么意思？
A: 表示流量通过 Cloudflare 的 CDN，获得加速和保护

---

## 🚀 下一步

1. 点击 Vercel 中的 "Add Domain"
2. 输入你的域名
3. 选择 "Custom Nameservers"
4. 记下 DNS 信息
5. 按照上述步骤配置 Cloudflare 和 Spaceship
6. 等待 DNS 生效
7. 验证域名已连接

**需要帮助吗？** 告诉我你在哪一步遇到问题！

