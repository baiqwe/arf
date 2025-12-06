# 性能优化执行清单

## ✅ 已完成的代码优化

### 1. AdSense 加载策略优化
- **文件**: `src/app/layout.tsx`
- **修改**: 将 AdSense 脚本的 `strategy` 从 `afterInteractive` 改为 `lazyOnload`
- **影响**: 广告脚本将在页面完全加载且浏览器空闲时才加载，大幅提升 LCP 性能
- **预期提升**: Lighthouse 分数从 62 提升到 85-90+

### 2. 图片文件检查
- **状态**: ✅ 已检查，所有图片文件已优化
- **最大文件**: `icon-512x512.png` (25KB) - 对于 512x512 PNG 来说已很优化
- **其他文件**: 3-7KB，无需额外压缩
- **Logo**: 使用内联 SVG，无外部图片加载

## ⚠️ 需要在 Cloudflare 后台手动配置

### 1. 重定向规则 - 保留查询字符串 (必须)
**问题**: 当前重定向规则未勾选 "Preserve query string"，会导致 URL 参数丢失

**操作步骤**:
1. 登录 Cloudflare Dashboard
2. 进入 **Rules** → **Redirect Rules**
3. 找到 `www.adoptmefont.com` → `adoptmefont.com` 的重定向规则
4. 点击编辑
5. **✅ 勾选 "Preserve query string"**
6. 保存并部署

**影响**: 确保用户分享的链接（如 `https://adoptmefont.com/?text=Hello`）在重定向后参数不会丢失

### 2. Auto Minify 设置 (建议)
**操作步骤**:
1. 进入 Cloudflare Dashboard
2. 进入 **Speed** → **Optimization**
3. 启用 **Auto Minify**:
   - ✅ HTML
   - ✅ CSS
   - ✅ JavaScript
4. **不要** 开启 "Rocket Loader"（可能与 Next.js Hydration 冲突）

**影响**: 自动压缩 HTML/CSS/JS，减少传输体积，提升加载速度

## 📊 预期性能提升

### 优化前
- Lighthouse 分数: **62**
- LCP: **8.7秒**
- 主要问题: AdSense 脚本阻塞主线程

### 优化后（预期）
- Lighthouse 分数: **85-90+**
- LCP: **< 2.5秒**
- 改进: 广告延迟加载，不阻塞初始渲染

## 🚀 下一步

1. **部署代码更改**: 将修改后的 `layout.tsx` 推送到仓库并部署
2. **配置 Cloudflare**: 完成上述两个 Cloudflare 设置
3. **重新测试**: 部署后使用 Lighthouse 重新测试性能
4. **监控**: 观察实际用户访问的 LCP 指标

## 📝 技术说明

### AdSense 延迟加载原理
- `lazyOnload`: 脚本在页面完全加载后，浏览器空闲时才加载
- 优势: 不阻塞主线程，不影响 LCP 计算
- 权衡: 广告可能稍晚显示，但用户体验大幅提升

### 为什么 `afterInteractive` 是性能杀手
- `afterInteractive` 会在页面主要内容加载后立即执行
- Google AdSense 脚本体积大（~336 KiB）
- 会阻塞主线程，导致页面几秒钟内无法交互
- 严重影响 LCP（Largest Contentful Paint）指标

