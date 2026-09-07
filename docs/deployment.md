# Cloudflare 托管与日常维护

主页使用 **Workers Static Assets**，从 `dist/` 发布 HTML、CSS、JavaScript、字体与图片。配置位于 [`wrangler.jsonc`](../wrangler.jsonc)，不需要业务 Worker、数据库或网站运行时密钥。

## 首次连接

本地配置已准备。首次云端连接、成功部署记录和正式访问地址以 Cloudflare 控制台的实际结果为准；在验证成功前，不把预计的 `workers.dev` 地址当作已上线站点。

在 Cloudflare 的 Workers 和 Pages 中创建应用并连接 GitHub。GitHub App 仅选择 `chenzhiyong1994/personal-hub`，不要选择全部仓库。该应用申请元数据读取，以及管理、检查、代码、部署和拉取请求的读写权限。

| 设置 | 值 |
| --- | --- |
| Worker 名称 | `personal-hub`，与 `wrangler.jsonc` 一致 |
| 仓库 | `chenzhiyong1994/personal-hub` |
| 正式分支 | `main` |
| 根目录 | 仓库根目录 |
| Build command | `pnpm run build` |
| Deploy command | `pnpm exec wrangler deploy` |
| 非正式分支部署命令 | `pnpm exec wrangler versions upload` |
| Node.js | `.node-version` 中的 `22.18.0` |
| pnpm | `package.json` 中的 `11.19.0` |

Cloudflare 的构建环境如未自动采用上述版本，在 Build variables 中设置公开变量 `NODE_VERSION=22.18.0`、`PNPM_VERSION=11.19.0`。构建使用已提交的 `pnpm-lock.yaml`，不要在云端执行依赖升级。`pnpm-workspace.yaml` 仅允许 `esbuild` 和 `workerd` 的安装脚本运行，它们负责安装构建器和 Cloudflare 本地运行时。

Workers Builds 所需的授权由 Cloudflare 管理；不要把 OAuth 凭证、API token 或 `.dev.vars` 写入仓库、构建命令或文档。

## 日常更新

1. 修改 `src/data/siteContent.ts`、双语文案或页面；指标变化时同步 `docs/content-sources.md`。
2. 运行 `pnpm run typecheck` 和 `pnpm run deploy:check`。后者会构建并验证部署配置，不上传站点。
3. 视觉变更按项目规则检查桌面、手机、键盘操作与减少动效设置。
4. 检查并提交本轮改动，对公开推送执行 `safe-open-source-release` 审计。连接完成后，推送到 `main` 会触发 Workers Builds。
5. 在 Cloudflare 确认构建成功、部署对应预期提交，再检查正式 URL 的首屏、语言切换、图片及邮件链接。

仅本地提交不会更新网站。启用非正式分支构建后，可使用分支预览验证较大改动；预览发布不提升为正式版本。

## 本地验证与手动部署

```powershell
pnpm install --frozen-lockfile
pnpm run deploy:check
pnpm run preview:cloudflare
```

最后一条命令在 `http://127.0.0.1:8787` 用 Cloudflare 本地运行时预览已有 `dist/`；修改代码后需重新构建。

日常优先使用 Git 自动部署。需要手动发布时，在授权的本机执行 `pnpm exec wrangler login`，然后运行 `pnpm run deploy`。登录配置由 Wrangler 保存到用户目录，不进入项目。手动发布同样需要先确认当前源码经过审查及验证。

## 回滚

发现线上问题时，在 Worker 的 Deployments 中选择已验证版本回滚；随后在 Git 中撤销导致问题的提交并重新发布，确保源码与线上一致。也可用 `pnpm exec wrangler deployments list` 确认记录后，按 Wrangler 的 `rollback` 命令交互选择目标。不要依赖缓存清除来代替回滚。

## 范围与费用

当前只托管静态资源，没有购买域名、升级付费计划或接入分析追踪。静态资源请求与存储按 Cloudflare 的免费静态托管政策处理；自动构建有独立额度，新增 Worker 逻辑或其他服务时应重新核对相应费用。

官方参考：[静态资源托管](https://developers.cloudflare.com/workers/static-assets/)、[Workers Builds 配置](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/)、[静态资源计费](https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/)。
