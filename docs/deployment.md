# Cloudflare Pages 静态发布

本项目仅使用 Cloudflare Pages 免费托管构建后的静态文件。不要连接 GitHub、申请仓库访问权限、配置自动构建或添加云端代码维护。

## 发布与更新

1. 在本地运行 `pnpm run typecheck` 和 `pnpm run build`。
2. 预览并检查生成的 `dist/`；只上传其中的 HTML、CSS、JavaScript、字体和图片，不上传源码、Git 历史、简历源文件或本机配置。
3. 在 Cloudflare 的 Workers 和 Pages 中选择 Pages → Direct Upload / 上传资产。首次发布创建项目，后续在同一项目创建新的正式部署。
4. 上传 `dist/` 文件夹，或将其内容压缩为 ZIP 后上传；ZIP 根目录应直接包含 `index.html`，不要额外包一层 `dist/`。
5. 部署成功后记录控制台提供的实际 `pages.dev` 地址，并检查公开页面、语言切换、图片、移动菜单和邮件链接。

当前状态：本地构建及资源检查已通过；云端上传尚待浏览器连接恢复。还没有验证成功的公开地址。

## 边界

- 不需要 GitHub App、仓库权限或额外的 API token。
- 上传新版本才会更新网站，本地提交或 Git 推送不会自动发布。
- 不购买域名、升级套餐或增加分析、追踪、表单和数据库。
- 遇到线上问题，在 Pages 的部署记录中回滚到已验证版本。

官方说明：[Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)。
