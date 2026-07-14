---
layout: default
title: Home
description: "Dr. Hrishikesh Chandra Gautam — air quality researcher working on satellite PM2.5, population exposure and life expectancy, emission inventories and machine learning for clean-air policy."
---

<section class="hero">
  <div>
    <p class="eyebrow eyebrow--accent">Environmental engineering · Air quality · Data science</p>
    <h1>Hrishikesh Chandra Gautam</h1>
    <p class="hero__role">
      <strong>Data Specialist — Air Quality Life Index</strong><br>
      Energy Policy Institute at the University of Chicago (EPIC)
    </p>
    <p class="hero__subtitle">
      I turn air pollution data into evidence people can act on: satellite PM<sub>2.5</sub>,
      population-weighted exposure and life expectancy, city emission inventories, and machine
      learning models for forecasting and sensor calibration.
    </p>
    <div class="hero__actions">
      <a class="button button--primary" href="{{ '/research/' | relative_url }}">Read the research</a>
      <a class="button button--ghost" href="{{ site.author.cv | relative_url }}">Download CV (PDF)</a>
    </div>
    {% include social-links.html %}
  </div>

  <figure class="hero__photo">
    <img src="{{ site.author.photo | relative_url }}"
         alt="Dr. Hrishikesh Chandra Gautam"
         width="800" height="1000">
    <figcaption>EPIC · University of Chicago</figcaption>
  </figure>
</section>

<section class="section">
  <div class="section__header">
    <p class="eyebrow">What I work on</p>
    <h2>Three questions run through everything I do</h2>
  </div>

  <div class="grid grid--3">
    <article class="card card--marker">
      <h3>How much pollution do people actually breathe?</h3>
      <p>Satellite-derived PM<sub>2.5</sub>, population-weighted exposure, and 25 years of GADM Level-2 trends translated into life-expectancy terms.</p>
    </article>
    <article class="card card--marker">
      <h3>Where is it coming from?</h3>
      <p>City and state emission inventories across transport, industry, residential, dust and waste — built from activity data, surveys and web-scraped sources.</p>
    </article>
    <article class="card card--marker">
      <h3>What should be done about it?</h3>
      <p>Scenario and techno-economic assessment, forecasting models, low-cost sensor calibration, and reporting that policymakers can use.</p>
    </article>
  </div>
</section>

<section class="section">
  <div class="section__header">
    <p class="eyebrow">Selected work</p>
    <h2>Projects</h2>
  </div>

  <div class="project-list">
    <article class="project">
      <div class="project__meta"><strong>2024 — present</strong> EPIC · AQLI</div>
      <div>
        <h3>Air Quality Life Index analysis pipeline</h3>
        <p>End-to-end pipeline from satellite PM<sub>2.5</sub> to population-weighted concentrations and life-expectancy estimates, feeding the annual AQLI report and its global policy communication.</p>
      </div>
    </article>

    <article class="project">
      <div class="project__meta"><strong>2020 — 2024</strong> CSTEP</div>
      <div>
        <h3>Emission inventories for 76 Indian cities</h3>
        <p>Sector-wise activity data compiled with State Pollution Control Boards and web-scraping workflows, converted into a clean-air evidence base for national planning.</p>
      </div>
    </article>

    <article class="project">
      <div class="project__meta"><strong>Methods</strong> Machine learning</div>
      <div>
        <h3>PM<sub>2.5</sub> forecasting and low-cost sensor calibration</h3>
        <p>Random Forest, XGBoost, LSTM and SVR models for forecasting; multi-season calibration models for low-cost PM sensors deployed across Indian cities.</p>
      </div>
    </article>
  </div>

  <p class="section__cta"><a href="{{ '/projects/' | relative_url }}">All projects →</a></p>
</section>

{% if site.posts.size > 0 %}
<section class="section">
  <div class="section__header">
    <p class="eyebrow">News &amp; notes</p>
    <h2>Latest writing</h2>
  </div>

  <ul class="post-list">
    {% for post in site.posts limit: 3 %}
    <li class="post-item">
      <p class="post-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time></p>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt | strip_html | truncate: 160 }}</p>
    </li>
    {% endfor %}
  </ul>

  <p class="section__cta"><a href="{{ '/blog/' | relative_url }}">All posts →</a></p>
</section>
{% endif %}
