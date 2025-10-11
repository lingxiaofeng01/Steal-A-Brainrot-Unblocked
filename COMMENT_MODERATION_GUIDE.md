# 评论审核系统使用指南

## 📋 **系统概述**

为了防止垃圾评论和不当内容，我们实现了一个完整的评论审核系统，参考了 [Crazy Cattle 3D](https://crazycattle3d.io/splatoon) 的最佳实践。

---

## ✅ **已实现的功能**

### **1. 评论提交要求**
- ✅ **必填字段**：
  - 姓名（最多50字符）
  - 邮箱（验证格式，不公开显示）
  - 评论内容（最多500字符）
  
- ✅ **同意条款**：
  - 用户必须勾选同意条款才能提交
  - 提示用户保持建设性、尊重他人、紧扣主题

- ✅ **提交限制**：
  - 45秒冷却时间（防止刷屏）
  - 邮箱格式验证
  - 字符长度限制

### **2. 审核机制**
- ✅ **三种状态**：
  - `pending` - 待审核（默认）
  - `approved` - 已通过
  - `rejected` - 已拒绝

- ✅ **前端显示**：
  - 只显示 `approved` 状态的评论
  - 提交后显示"等待审核"提示
  - 10秒后自动隐藏提示

### **3. 数据库结构**

```sql
game_comments 表字段：
- id (uuid) - 主键
- game_slug (text) - 游戏标识
- user_name (text) - 用户姓名
- user_email (text) - 用户邮箱（不公开）
- comment_text (text) - 评论内容
- status (text) - 审核状态 (pending/approved/rejected)
- agreed_terms (boolean) - 是否同意条款
- created_at (timestamptz) - 创建时间
```

---

## 🔧 **管理员审核操作**

### **方法1：使用 Supabase 仪表板**

1. **访问 Supabase 仪表板**：
   ```
   https://supabase.com/dashboard/project/tgoyqxcqpwevgztprqgk/editor
   ```

2. **打开 `game_comments` 表**

3. **查看待审核评论**：
   - 筛选 `status = 'pending'` 的记录
   - 查看评论内容、用户信息、提交时间

4. **审核操作**：
   - **通过**：将 `status` 改为 `'approved'`
   - **拒绝**：将 `status` 改为 `'rejected'`
   - **删除**：直接删除记录

### **方法2：使用 SQL 查询**

#### **查看所有待审核评论**
```sql
SELECT 
  id,
  game_slug,
  user_name,
  user_email,
  comment_text,
  created_at
FROM game_comments
WHERE status = 'pending'
ORDER BY created_at DESC;
```

#### **批量通过评论**
```sql
UPDATE game_comments
SET status = 'approved'
WHERE id IN ('评论ID1', '评论ID2', '评论ID3');
```

#### **批量拒绝评论**
```sql
UPDATE game_comments
SET status = 'rejected'
WHERE id IN ('评论ID1', '评论ID2');
```

#### **删除垃圾评论**
```sql
DELETE FROM game_comments
WHERE id = '评论ID';
```

#### **查看特定游戏的评论**
```sql
SELECT *
FROM game_comments
WHERE game_slug = 'brainrot-clicker'
ORDER BY created_at DESC;
```

---

## 🎨 **用户体验流程**

### **提交评论**
1. 用户点击 "Write a Comment" 按钮
2. 填写姓名、邮箱、评论内容
3. 勾选同意条款
4. 点击 "Post Comment"
5. 看到黄色提示框："Your comment is awaiting moderation!"

### **审核后**
- **通过**：评论立即显示在评论列表中
- **拒绝**：评论不会显示，用户不会收到通知
- **删除**：评论永久删除

---

## 🚀 **未来增强功能建议**

### **1. 自动审核**
- 使用关键词过滤（脏话、垃圾信息）
- 使用 AI 内容审核 API（如 OpenAI Moderation API）
- 自动拒绝包含链接的评论

### **2. 管理员后台**
创建专门的管理页面：
```typescript
// src/pages/AdminCommentsPage.tsx
- 显示所有待审核评论
- 一键通过/拒绝按钮
- 批量操作功能
- 搜索和筛选
```

### **3. 邮件通知**
- 新评论提交时通知管理员
- 评论通过时通知用户（可选）

### **4. 用户举报功能**
- 添加"举报"按钮
- 用户可以举报不当评论
- 管理员审核举报

### **5. 评论点赞/踩**
参考 Crazy Cattle 3D 的实现：
```typescript
- 添加 like_count 和 dislike_count 字段
- 用户可以点赞或踩评论
- 使用浏览器指纹防止重复投票
```

---

## 📊 **审核统计查询**

### **查看审核统计**
```sql
SELECT 
  status,
  COUNT(*) as count
FROM game_comments
GROUP BY status;
```

### **查看每日评论数**
```sql
SELECT 
  DATE(created_at) as date,
  COUNT(*) as count
FROM game_comments
WHERE created_at >= NOW() - INTERVAL '30 days'
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

### **查看最活跃的游戏**
```sql
SELECT 
  game_slug,
  COUNT(*) as comment_count
FROM game_comments
WHERE status = 'approved'
GROUP BY game_slug
ORDER BY comment_count DESC
LIMIT 10;
```

---

## ⚠️ **注意事项**

1. **定期审核**：建议每天至少审核一次待审核评论
2. **审核标准**：
   - ✅ 建设性反馈
   - ✅ 游戏体验分享
   - ✅ 礼貌的讨论
   - ❌ 垃圾广告
   - ❌ 辱骂性语言
   - ❌ 无关内容
   - ❌ 重复刷屏

3. **数据备份**：定期备份评论数据
4. **隐私保护**：用户邮箱不对外公开

---

## 🔗 **相关文件**

- `src/components/Comments.tsx` - 评论组件
- `src/lib/types.ts` - 类型定义
- `supabase/migrations/20251011000000_create_ratings_comments.sql` - 数据库迁移

---

## 📞 **技术支持**

如需帮助，请查看：
- Supabase 文档：https://supabase.com/docs
- 项目仪表板：https://supabase.com/dashboard/project/tgoyqxcqpwevgztprqgk

