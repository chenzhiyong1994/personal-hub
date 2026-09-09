# Cloudflare Pages 静态发布

本项目仅使用 Cloudflare Pages 免费托管构建后的静态文件。不要连接 GitHub、申请仓库访问权限、配置自动构建或添加云端代码维护。

## 发布与更新

1. 在本地运行 `pnpm run typecheck` 和 `pnpm run build`。
2. 预览并检查生成的 `dist/`；只上传其中的 HTML、CSS、JavaScript、字体和图片，不上传源码、Git 历史、简历源文件或本机配置。
3. 在 Cloudflare 的 Workers 和 Pages 中选择 Pages → Direct Upload / 上传资产。首次发布创建项目，后续在同一项目创建新的正式部署。
4. 上传 `dist/` 文件夹，或将其内容压缩为 ZIP 后上传；ZIP 根目录应直接包含 `index.html`，不要额外包一层 `dist/`。
5. 部署成功后记录控制台提供的实际 `pages.dev` 地址，并检查公开页面、语言切换、图片、移动菜单和邮件链接。

公开主页：[zhiyong-chen-studio.pages.dev](https://zhiyong-chen-studio.pages.dev/)。Cloudflare Pages 项目名为 `zhiyong-chen-studio`，采用 Direct Upload。

2026-09-09 已通过 Tabbit 浏览器上传 244 个静态文件并更新正式部署，包含八个精选作品与五个工作流：悄醒增加两张 v0.4.8-beta 真实运行截图，别骂了与胶囊办公室按作者要求保留图片占位；工作方式移除样例展开，强化编号步骤，加入 AIGC 与 Career OS。公开地址返回 HTTP 200；HTML、脚本、样式与两张新图片的 SHA-256 与本地构建一致。已验证 1440 × 1000 桌面端、390 × 844 手机端、双语项目详情、图片切换、作品筛选、菜单与弹层焦点、流程项目链接及减少动效模式。正式构建预览未出现运行异常。

本次部署快照：[d999f600.zhiyong-chen-studio.pages.dev](https://d999f600.zhiyong-chen-studio.pages.dev/)。

## 边界

- 不需要 GitHub App、仓库权限或额外的 API token。
- 上传新版本才会更新网站，本地提交或 Git 推送不会自动发布。
- 不购买域名、升级套餐或增加分析、追踪、表单和数据库。
- 遇到线上问题，在 Pages 的部署记录中回滚到已验证版本。

官方说明：[Direct Upload](https://developers.cloudflare.com/pages/get-started/direct-upload/)。
