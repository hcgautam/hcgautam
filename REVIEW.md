# Code review of the original site, and what changed

## A. Bugs — things that were broken or would have shipped broken

| # | Problem | Fix |
|---|---|---|
| 1 | **Blog posts had no layout.** `_posts/2026-06-24-welcome.md` used `layout: default`, and no `post` layout existed. Post pages rendered with no title, no date, no back link — just body text. | Added `_layouts/post.html` and a `defaults:` block in `_config.yml` so every post gets it automatically. Posts no longer need a `layout:` line. |
| 2 | **Placeholder URLs would go live.** `your-github-username`, `YOUR_ID`, `YOUR-ORCID-ID` were linked from the footer and contact page. | All social links moved to one `social:` block. Empty values are not rendered at all (`_includes/social-links.html`). No broken links can ship. |
| 3 | **Dead CV and image links.** Home, CV page and footer all linked `/files/cv.pdf`; the file did not exist. No `assets/img/` at all. | Directories created with drop-in instructions; paths centralised in `_config.yml` (`author.cv`, `author.photo`). |
| 4 | **`url` / `baseurl` unset.** With placeholder values, `{% seo %}`, the RSS feed and every absolute URL point at a domain you do not own. | Documented at the top of `_config.yml` and in the README as step 1 before deploying. |
| 5 | **Nav active state was wrong on blog posts.** `page.url == item.url` never matches a post URL, so no menu item highlighted. The README claimed JS handled active states; it did not. | Liquid `contains` logic in `_includes/header.html`, plus `aria-current="page"`. |
| 6 | **Fonts declared but never loaded.** CSS asked for `Inter`; nothing loaded it, so browsers fell back to system fonts. Weights `650 / 750 / 850` are invalid for non-variable fallback fonts. | Real webfonts loaded with `preconnect` + `display=swap`; all weights are valid (400/500/600). |
| 7 | **No `_data`, so publications were hardcoded prose.** DOIs were shown as inert `code` strings, not links — on a research site the DOI *is* the call to action. | `_data/publications.yml` + a rendering loop. DOIs become `https://doi.org/…` links; author name is auto-highlighted; type filters (journal / chapter / report / conference) work without a page reload. |
| 8 | **No 404 page.** GitHub Pages served its generic one, off-brand. | `404.html`. |
| 9 | **No sitemap, no `{% feed_meta %}`, no favicon, no OG image.** For an academic, discoverability *is* the point. | `jekyll-sitemap`, `robots.txt`, `feed_meta`, SVG favicon, `og:image` set to the headshot so shared links show your face. |
| 10 | Mobile nav could not be closed with Escape or an outside click, stayed open on resize, had no `aria-controls`. | Rewritten in `assets/js/main.js`. |
| 11 | Accessibility gaps: no `:focus-visible` styles, `scroll-behavior: smooth` with no `prefers-reduced-motion` escape hatch, responsive table hack that destroyed header–cell association, `h1` scaling to 4.8 rem. | All fixed; tables scroll horizontally instead of collapsing; type scale reduced to a professional range. |
| 12 | Post permalink `/blog/:year/:month/:day/:title/` is needlessly deep. | `/blog/:year/:month/:title/`. |

## B. Professionalism — what made it read as a template rather than a researcher's site

| # | Problem | Fix |
|---|---|---|
| 13 | **Build notes were published as page content.** Visitors could read "Confirmed from CV", "replace placeholder URL in `_config.yml`", "Placeholder: add formal teaching here", "Suggested additions", "Website wording note". This is the single most damaging thing on the old site — it tells a hiring committee the page is unfinished. | Every internal note removed. Maintenance instructions live in `README.md`, where only you see them. |
| 14 | **The Teaching page was hypothetical.** It listed "potential training topics" you have not taught. Filler on a research CV site reads as padding. | Rebuilt as **Talks & Service**: real organising roles, real conference presentations, real certifications, and one honest "available for" line. |
| 15 | **No photo, anywhere.** Personal academic sites are trust devices; the face is the first trust signal. | Hero now leads with your headshot (drop the file in as-is — the CSS handles the crop). |
| 16 | **No social/scholar links above the fold.** Reviewers look for Scholar and ORCID within about five seconds. | Link row directly under the hero, repeated on Contact and in the footer. |
| 17 | **Generic hero copy** ("Researcher building data systems for cleaner air decisions"), and homepage cards that repeated the projects page. | Hero states role, institution and what you actually do. The three homepage cards are now the three questions your work answers, which is a claim only you could make. |
| 18 | Home page had no news section, so a live site would look static. | Latest three posts pulled onto the homepage automatically. |
| 19 | Design was the default AI palette: teal + gold gradient, big shadows, pill everything. | New system built from your subject: the **AQI category spectrum** (green → maroon) as a hairline band and as card markers; IBM Plex Sans / Source Serif 4 / IBM Plex Mono; dark mode; print stylesheet so the CV page prints cleanly. |
| 20 | Private data risk: the CV contains a home address, phone number and referees' phone numbers. | None of it is on the site, and none of it should be. Keep referees in the PDF you send directly. |

## C. Still on you

1. Set `url`, `baseurl` and the four `social:` links in `_config.yml`.
2. Add `assets/img/profile.jpg` and `files/cv.pdf`.
3. Consider adding, over time: a public GitHub repo for AQLI-adjacent tooling, PDFs or preprints for each paper (`pdf:` field in `_data/publications.yml`), and one written explainer of population-weighted exposure — that single post is the kind of thing that gets a personal site cited.
