---
layout: default
permalink: /preview/
---

- Test
- One
- Three

![](https://i.imgur.com/1mXkWLq.gif)

<figure>
    <img src="https://i.imgur.com/rvZVnJS.gif">
    <figcaption>Figure 1.1 - Driven pass, wide right.</figcaption>
</figure> 

<figure>
    <img src="https://i.imgur.com/rvZVnJS.gifv">
    <figcaption>Figure 1.1 - Driven pass, wide right.</figcaption>
</figure> 

{%- if page.id -%}
<!--Every article has a id, but special pages don't unless you set manually.
This prevents Cusdis from appear everywhere-->
<div id="cusdis_thread"
  data-host="https://cusdis.com"
  data-app-id="YOUR APP ID"
  data-page-id="{{ page.id }}"
  data-page-url="{{ site.url }}{{ page.baseurl }}{{ page.url }}"
  data-page-title="{{ page.title }}"
></div>
<script defer src="https://cusdis.com/js/cusdis.es.js"></script>
{%- endif -%}
