# Professional Portfolio — Astro + Decap CMS + Cloudflare Pages

## 1. Run locally
Install Node.js 20.3+ (22 recommended), then:

```bash
npm install
npm run dev
```

Open http://localhost:4321. Build using `npm run build`.

## 2. Customize
- Replace YOUR NAME, `hello@example.com`, and sample content in `src/pages/index.astro` and `src/layouts/Base.astro`.
- Add actual work to `src/content/projects`, experience to `src/content/experience`, services to `src/content/services`.
- Sample projects and employment are **fictional placeholders**, not claims about you.
- In `astro.config.mjs`, replace `https://example.com` with your final domain.
- Images can be placed in `public/uploads/`.

## 3. GitHub
Create a GitHub repository `professional-portfolio`. Push all project files to `main`. Do not commit credentials.

## 4. Cloudflare Pages
Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git → select repository.
Build command: `npm run build`
Build output directory: `dist`
Deploy. You will receive a `pages.dev` preview URL.

## 5. Decap CMS /admin/ login — REQUIRES CONFIGURATION
The CMS UI is included but **login will not work until GitHub OAuth is configured**.
1. Set up a trusted GitHub OAuth authentication proxy (for example, a self-hosted OAuth gateway on Cloudflare Workers), with a GitHub OAuth App and server-side client secret.
2. Set `backend.repo` and `backend.base_url` in `public/admin/config.yml` to your real repository and OAuth gateway; set `auth_endpoint` according to your gateway.
3. Configure allowed origin / redirect URLs according to your chosen OAuth gateway, and verify authentication and write permissions.
4. Protect your GitHub repository and restrict who may edit. The /admin page is public, but only authorized users should be able to save.
5. Commit changes and redeploy; test Add, Edit, Upload, Publish.

**Do not place OAuth secrets in Astro frontend code or Decap config.yml.** Cloudflare Pages alone does not automatically provide Decap GitHub OAuth authentication.

## 6. Custom domain
Cloudflare Pages project → Custom domains → Add domain. Follow the provided DNS instructions. Buy a `.com` only after testing the site.

## Notes
- Contact button is mailto only (no server-side contact form).
- Resume upload and certificate editing are not implemented in this first version; add CMS collections/pages when real data is available.
- CMS edits cause a Git commit and then a Cloudflare rebuild; updates are not instantaneous.
- Hosting free tier is subject to provider limits; domain and optional third-party auth services may cost extra.
