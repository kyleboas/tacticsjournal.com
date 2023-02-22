---
layout: category
title: Premier League
category: "Premier League"
permalink: /premier-league/ 
---

<h2>Posts about Premier League teams:</h2>

<ul>
{% for post in site.categories["Premier League"] %}
  <li>{{ post.date | date: "%d %B %Y" }} - <a href="{{ post.url }}">{{ post.title }}</a></li>
{% endfor %}
</ul>
