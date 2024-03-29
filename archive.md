---
layout: page
title: Archive
permalink: /archive/
---

{% assign sorted_posts = site.posts | sort: 'date' | reverse %}
{% assign current_month = "" %}

{% for post in sorted_posts %}
{% unless post.categories contains "Notes" %}
{% assign post_month = post.date | date: "%B %Y" %}

{% if current_month != post_month %}
{% if current_month != "" %}
{% endif %}

<h2>{{ post_month }}</h2>
<p class="archive"><a href="{{ post.url }}">{{ post.title }}</a><br><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
{% assign current_month = post_month %}
{% else %}
<p class="archive"><a href="{{ post.url }}">{{ post.title }}</a><br><small>{{ post.date | date: "%B %d, %Y" }}</small></p>
{% endif %}
{% endunless %}
{% endfor %}
<hr>
{% if current_month != "" %}
{% endif %}

<style>.archive a{font-family:helvetica; font-size: 16px; text-decoration: none} small{font-family:Helvetica; font-size:14px;}</style>