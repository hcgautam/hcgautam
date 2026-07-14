---
title: Publications
permalink: /publications/
description: "Journal papers, book chapters, reports and conference papers by Dr. Hrishikesh Chandra Gautam on air quality, satellite PM2.5, low-cost sensors and machine learning."
---

<div class="page-head">
  <p class="eyebrow">Publications</p>
  <h1>Publications</h1>
  <p>Journal papers, book chapters, institutional reports and conference contributions. Every DOI links to the published record.</p>
</div>

<div class="pub-filters" role="group" aria-label="Filter publications by type">
  <button type="button" data-filter="all" aria-pressed="true">All</button>
  <button type="button" data-filter="journal" aria-pressed="false">Journal</button>
  <button type="button" data-filter="chapter" aria-pressed="false">Book chapters</button>
  <button type="button" data-filter="report" aria-pressed="false">Reports</button>
  <button type="button" data-filter="conference" aria-pressed="false">Conference</button>
</div>

<ul class="pub-list">
{% assign pubs = site.data.publications | sort: "year" | reverse %}
{% for pub in pubs %}
  <li class="pub" data-type="{{ pub.type }}">
    <div class="pub__year">{{ pub.year }}</div>
    <div>
      <div class="pub__title">{{ pub.title }}</div>
      <div class="pub__authors">{{ pub.authors | replace: "Gautam, H. C.", "<span class='self'>Gautam, H. C.</span>" }}</div>
      <div class="pub__venue">{{ pub.venue }}</div>
      <div class="pub__links">
        {% if pub.doi %}<a href="https://doi.org/{{ pub.doi }}" rel="noopener">DOI</a>{% endif %}
        {% if pub.url %}<a href="{{ pub.url }}" rel="noopener">Link</a>{% endif %}
        {% if pub.pdf %}<a href="{{ pub.pdf | relative_url }}">PDF</a>{% endif %}
        {% if pub.code %}<a href="{{ pub.code }}" rel="noopener">Code</a>{% endif %}
      </div>
    </div>
  </li>
{% endfor %}
</ul>
