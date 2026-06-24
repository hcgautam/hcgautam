---
layout: default
title: Blog
permalink: /blog/
---

# Blog / News

Short updates, research notes, and explainers on air pollution data, environmental engineering, satellite PM<sub>2.5</sub>, machine learning, and policy-relevant analytics.

<div class="post-list">
  {% for post in site.posts %}
  <article class="post-card">
    <p class="post-card__date">{{ post.date | date: "%B %-d, %Y" }}</p>
    <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
    <p>{{ post.excerpt | strip_html | truncate: 180 }}</p>
    <a class="read-more" href="{{ post.url | relative_url }}">Read more →</a>
  </article>
  {% endfor %}
</div>
