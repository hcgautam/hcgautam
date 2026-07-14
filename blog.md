---
title: Blog
permalink: /blog/
description: "Research notes and explainers on air pollution data, satellite PM2.5, emission inventories, low-cost sensors and machine learning for air quality."
---

<div class="page-head">
  <p class="eyebrow">Blog</p>
  <h1>Notes</h1>
  <p>Short research notes and explainers on air pollution data, satellite PM<sub>2.5</sub>, emission inventories, low-cost sensors, machine learning and the policy uses of all of it.</p>
</div>

{% if site.posts.size > 0 %}
<ul class="post-list">
  {% for post in site.posts %}
  <li class="post-item">
    <p class="post-date"><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %-d, %Y" }}</time></p>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 200 }}</p>
    <a href="{{ post.url | relative_url }}">Read →</a>
  </li>
  {% endfor %}
</ul>
{% else %}
<p class="muted">No posts yet.</p>
{% endif %}
