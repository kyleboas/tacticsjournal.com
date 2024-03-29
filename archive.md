---
layout: page
title: Archive
permalink: /archive/
---

{% assign sorted_posts = site.posts | sort: 'date' %}
{% assign current_month = "" %}

{% for post in sorted_posts %}
  {% unless post.categories contains "Notes" %}
    {% assign post_month = post.date | date: "%B %Y" %}

    {% if current_month != post_month %}
      {% if current_month != "" %}
        </ul>
      {% endif %}

      <h2>{{ post_month }}</h2>
      <ul>
      {% assign current_month = post_month %}
    {% endif %}

    <li><a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}</li>
  {% endunless %}
{% endfor %}
