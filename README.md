# hcgautam.github.io — academic website

Jekyll site for Dr. Hrishikesh Chandra Gautam, air quality researcher (EPIC · AQLI).
Runs on GitHub Pages with no custom plugins, no build step and no JavaScript framework.

## Before you deploy — 4 things

1. **`_config.yml` → `url` / `baseurl`.**
   User site (repo `<username>.github.io`): `url: "https://<username>.github.io"`, `baseurl: ""`.
   Project site (repo `academic-website`): `baseurl: "/academic-website"`.
   If these are wrong, the RSS feed, sitemap, canonical URLs and social-share cards all point at the wrong address.

2. **`_config.yml` → `social:`.** Fill in Google Scholar, ORCID, GitHub and LinkedIn.
   Any field left as `""` is simply not rendered — there are no broken placeholder links.

3. **`assets/img/profile.jpg`** — your headshot. The CSS crops it, so the original photo works as-is.

4. **`files/cv.pdf`** — the CV PDF the download buttons point at.

## Deploy

Push to `main`, then **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/ (root)`**.

## Local preview

```bash
bundle install
bundle exec jekyll serve --livereload
# http://127.0.0.1:4000/
```

## Structure

```text
.
├── _config.yml            # site, author, social links, nav, plugins
├── _data/
│   └── publications.yml   # ← add new papers here; the page rebuilds itself
├── _includes/
│   ├── header.html        # nav + active-state logic
│   ├── footer.html
│   └── social-links.html  # renders only the links you have filled in
├── _layouts/
│   ├── default.html       # <head>, SEO, fonts, AQI band, header/footer
│   └── post.html          # blog post view
├── _posts/
│   └── 2026-06-24-welcome.md
├── assets/
│   ├── css/style.css      # whole design system, ~1 file
│   ├── js/main.js         # mobile nav, publication filters
│   └── img/               # profile.jpg, favicon.svg
├── files/cv.pdf
├── index.md  about.md  research.md  projects.md  publications.md
├── teaching.md  cv.md  blog.md  contact.md  404.html  robots.txt
```

## Routine edits

| To do this | Edit |
|---|---|
| Add a publication | `_data/publications.yml` (one entry; DOI links itself) |
| Add a blog post | new file in `_posts/YYYY-MM-DD-title.md` — no `layout:` needed |
| Add a project | `projects.md`, copy an `<article class="project">` block |
| Change colours/type | the `:root` block at the top of `assets/css/style.css` |
| Change the menu | `nav:` in `_config.yml` |

## Design notes

The accent system is the AQI category spectrum (green → maroon): a 4 px band across the
top of every page, and the top rule on cards. It is the one decorative move on the site —
everything else stays quiet so the content reads. Dark mode follows the OS setting.
