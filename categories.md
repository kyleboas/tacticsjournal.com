---
layout: archive 
title: Categories
---

<h1>Archive of posts with {{ page.type }} '{{ page.title }}'</h1>
<ul>
{% for category in site.categories %}
  {% assign category_name = category[0] %}
  <li>
    <a href="/category/{{ category_name | slugify }}/">{{ category_name | replace: "-", " " }}</a>
  </li>
{% endfor %}
</ul>
