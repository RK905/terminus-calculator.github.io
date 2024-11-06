nextjs 项目模板

方式一（需要公共仓库才可以）：
```bash
pnpm create next-app@latest testapp --example "https://github.com/aigc-in-all/my-nextjs-template"
```

方式二：
```bash
git clone git@github.com:aigc-in-all/my-nextjs-template.git
```

wrangler:
安装：https://developers.cloudflare.com/workers/wrangler/install-and-update/
命令：https://developers.cloudflare.com/workers/wrangler/commands/#deploy-1
部署：
```bash
pnpm run build
pnpm dlx wrangler pages deploy out
```