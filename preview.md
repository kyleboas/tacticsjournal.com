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
<div id="cusdis_thread"
  data-host="https://cusdis.com"
  data-app-id="e33618fe-cb5b-4e01-b427-9f80a5c6f8b4"
  data-page-id="{{ PAGE_ID }}"
  data-page-url="{{ PAGE_URL }}"
  data-page-title="{{ PAGE_TITLE }}"
></div>
<script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
{%- endif -%}
