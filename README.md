# Dr. Hrishikesh Chandra Gautam — Academic Website

This repository contains a clean Jekyll/GitHub Pages personal website for an environmental engineering, air quality, and machine learning researcher.

The site converts the CV into a readable professional website with sections for research, projects, publications, teaching/workshops, CV, blog/news, and contact.

## Confirmed source

The profile content was extracted from the provided CV of Dr. Hrishikesh Chandra Gautam. Suggested wording is used only to make CV material readable as a website.

## Repository structure

```text
.
├── README.md
├── _config.yml
├── Gemfile
├── .gitignore
├── index.md
├── about.md
├── cv.md
├── research.md
├── projects.md
├── publications.md
├── teaching.md
├── blog.md
├── contact.md
├── _layouts/
│   └── default.html
├── _includes/
│   ├── header.html
│   └── footer.html
├── _posts/
│   └── 2026-06-24-welcome.md
├── assets/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
└── files/
    └── cv.pdf
```

## Quick deployment on GitHub Pages

1. Create a new GitHub repository, for example:
   - `hrishikesh-gautam.github.io` for a user site, or
   - `academic-website` for a project site.

2. Upload all files from this repository to GitHub.

3. Edit `_config.yml`:
   - For a user site, keep:
     ```yaml
     baseurl: ""
     url: "https://your-github-username.github.io"
     ```
   - For a project site, use:
     ```yaml
     baseurl: "/academic-website"
     url: "https://your-github-username.github.io"
     ```

4. Go to **Repository Settings → Pages**.

5. Under **Build and deployment**:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/root`

6. Save and wait for GitHub Pages to build the site.

## Local preview

Install Ruby and Bundler first. Then run:

```bash
bundle install
bundle exec jekyll serve
```

Open the local URL shown in the terminal, usually:

```text
http://127.0.0.1:4000/
```

If this is a project site with `baseurl`, preview with:

```bash
bundle exec jekyll serve --baseurl ""
```

## What to customize first

- Replace placeholder links in `_config.yml` with real LinkedIn, Google Scholar, GitHub, ORCID, and institutional profile URLs.
- Replace `files/cv.pdf` with the latest public CV.
- Add a professional headshot in `assets/img/profile.jpg` if desired, then update the homepage hero.
- Add DOIs/URLs where missing in `publications.md`.
- Add workshop slides, datasets, GitHub repositories, and selected media links.
- Remove personal address and phone number from public pages unless you intentionally want them online.

## Design notes

The website uses:

- Markdown pages for easy editing.
- A single reusable Jekyll layout.
- Shared header and footer includes.
- Responsive CSS with cards, grids, tags, and timeline components.
- Minimal JavaScript for mobile navigation and active navigation states.

## Suggested next improvements

- Add project pages under a `_projects` collection.
- Add publication filtering by type: journal, report, book chapter, conference.
- Add an interactive map or figure gallery for air quality datasets.
- Add Google Scholar citation link and ORCID.
- Add blog posts explaining AQLI, satellite PM2.5, emission inventories, low-cost sensors, and machine learning for air pollution.
