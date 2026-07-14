---
title: Contact
permalink: /contact/
description: "Contact Dr. Hrishikesh Chandra Gautam for research collaboration, air quality data analysis, modelling, talks and workshops."
---

<div class="page-head">
  <p class="eyebrow">Contact</p>
  <h1>Get in touch</h1>
  <p>For research collaboration, air quality data analysis and modelling, peer review, talks, workshops or media enquiries.</p>
</div>

<div class="contact-grid">
  <div class="card contact-card">
    <dl>
      <div>
        <dt>Email</dt>
        <dd><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></dd>
      </div>
      <div>
        <dt>Role</dt>
        <dd>{{ site.author.role }}</dd>
      </div>
      <div>
        <dt>Affiliation</dt>
        <dd>{{ site.author.affiliation }}</dd>
      </div>
      <div>
        <dt>Based in</dt>
        <dd>{{ site.author.location }}</dd>
      </div>
    </dl>
  </div>

  <div class="card">
    <h2>Elsewhere</h2>
    <p>Profiles, code and the full publication record.</p>
    {% include social-links.html %}
    <p style="margin-top:1.25rem;"><a class="button button--ghost" href="{{ site.author.cv | relative_url }}">Download CV (PDF)</a></p>
  </div>
</div>

<div class="note" style="margin-top:2rem;">
  <p>I read every message, but replies to collaboration requests can take a week or two during report season.</p>
</div>
