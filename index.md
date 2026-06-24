---
layout: default
title: Home
---

<section class="hero">
  <div class="hero__content">
    <p class="eyebrow">Environmental Engineering · Air Quality · Machine Learning</p>
    <h1>Dr. Hrishikesh Chandra Gautam</h1>
    <p class="hero__subtitle">
      Air quality researcher and data specialist working on satellite-derived PM<sub>2.5</sub>,
      life-expectancy analytics, emission inventories, air quality action plans,
      and machine learning tools for policy-relevant air pollution research.
    </p>
    <div class="hero__actions">
      <a class="button button--primary" href="{{ '/research/' | relative_url }}">Explore Research</a>
      <a class="button button--secondary" href="{{ '/files/cv.pdf' | relative_url }}">Download CV</a>
    </div>
  </div>
  <aside class="hero__panel" aria-label="Professional snapshot">
    <h2>Current focus</h2>
    <ul class="clean-list">
      <li><strong>Role:</strong> Data Specialist, Air Quality Life Index</li>
      <li><strong>Institution:</strong> EPIC, University of Chicago</li>
      <li><strong>Ph.D.:</strong> Environmental Engineering, IIT Madras</li>
      <li><strong>Core methods:</strong> PM<sub>2.5</sub> analytics, GIS, ML/DL, statistics, visualization</li>
    </ul>
  </aside>
</section>

<section class="section">
  <div class="section__header">
    <p class="eyebrow">Profile</p>
    <h2>Researcher building data systems for cleaner air decisions</h2>
  </div>
  <p class="lead">
    I work on air pollution data pipelines, urban air quality modeling, satellite-based particulate matter analysis,
    emission inventory development, and scientific communication for policy and public engagement. My work connects
    environmental engineering, machine learning, geospatial analysis, and health-relevant air quality metrics.
  </p>
  <div class="note note--confirmed">
    <strong>Confirmed from CV:</strong> The site content uses the provided CV as the source for education,
    roles, projects, technical skills, and publications. Some wording has been rewritten for website readability.
  </div>
</section>

<section class="section grid grid--3">
  <article class="card">
    <h3>Air Quality & Health Metrics</h3>
    <p>Analysis of particulate pollution, population-weighted exposure, life-expectancy impacts, and AQI/AQLI communication.</p>
  </article>
  <article class="card">
    <h3>Emission Inventories & Policy</h3>
    <p>Development of city and state-level emission inventories, action plans, scenario analysis, and mitigation assessments.</p>
  </article>
  <article class="card">
    <h3>Machine Learning & Data Systems</h3>
    <p>Forecasting, low-cost sensor calibration, satellite PM<sub>2.5</sub> modeling, reproducible code, and visualization workflows.</p>
  </article>
</section>

<section class="section section--tinted">
  <div class="section__header">
    <p class="eyebrow">Selected work</p>
    <h2>Projects at the science-policy-data interface</h2>
  </div>
  <div class="project-grid">
    <article class="project-card">
      <span class="tag">AQLI</span>
      <h3>Air Quality Life Index analysis pipeline</h3>
      <p>Processing satellite PM<sub>2.5</sub>, estimating population-weighted exposure, and supporting life-expectancy analysis across GADM Level 2 regions.</p>
    </article>
    <article class="project-card">
      <span class="tag">Emission inventory</span>
      <h3>Emission inventories for 76 Indian cities</h3>
      <p>Compiled activity data, coordinated with State Pollution Control Boards, and supported clean-air planning through multi-sector emissions analysis.</p>
    </article>
    <article class="project-card">
      <span class="tag">Machine learning</span>
      <h3>PM<sub>2.5</sub> forecasting and sensor calibration</h3>
      <p>Applied Random Forest, XGBoost, LSTM, SVR, and statistical methods to air pollution forecasting and low-cost sensor data correction.</p>
    </article>
  </div>
  <p class="section__cta"><a href="{{ '/projects/' | relative_url }}">View all projects →</a></p>
</section>

<section class="section">
  <div class="section__header">
    <p class="eyebrow">Technical toolkit</p>
    <h2>Methods and tools</h2>
  </div>
  <div class="tag-cloud">
    <span>Python</span><span>R</span><span>Pandas</span><span>NumPy</span><span>SciPy</span><span>Scikit-learn</span>
    <span>TensorFlow</span><span>Random Forest</span><span>XGBoost</span><span>LSTM</span><span>SVR</span><span>R Shiny</span>
    <span>ggplot2</span><span>Matplotlib</span><span>Plotly</span><span>Dash</span><span>GIS</span><span>Satellite PM₂.₅</span>
    <span>Emission inventories</span><span>Low-cost sensors</span><span>LaTeX</span><span>Linux</span><span>GitHub</span>
  </div>
</section>

<section class="section grid grid--2">
  <article class="card card--highlight">
    <h2>Latest writing</h2>
    <p>Short research notes, project updates, and explainers on air quality data, modeling, and environmental policy.</p>
    <a href="{{ '/blog/' | relative_url }}">Read blog/news →</a>
  </article>
  <article class="card card--highlight">
    <h2>Publications</h2>
    <p>Journal papers, reports, book chapters, and conference contributions in air quality modeling, sensors, and environmental management.</p>
    <a href="{{ '/publications/' | relative_url }}">View publications →</a>
  </article>
</section>
