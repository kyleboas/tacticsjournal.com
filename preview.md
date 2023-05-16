---
layout: page
title: Preview
permalink: "/preview/"
---

<div class="filter">
    <a href="#" class="topic" data-name="ARS">ARS</a> 
    <a href="#" class="topic" data-name="AVL">AVL</a> 
    <a href="#" class="topic" data-name="BRE">BRE</a> 
    <a href="#" class="topic" data-name="BOU">BOU</a> 
    <a href="#" class="topic" data-name="BHA">BHA</a> 
    <a href="#" class="topic" data-name="CHE">CHE</a> 
    <a href="#" class="topic" data-name="CRY">CRY</a> 
    <a href="#" class="topic" data-name="FUL">FUL</a> 
    <a href="#" class="topic" data-name="EVE">EVE</a> 
    <a href="#" class="topic" data-name="LEE">LEE</a> 
    <a href="#" class="topic" data-name="LEI">LEI</a> 
    <a href="#" class="topic" data-name="LIV">LIV</a> 
    <a href="#" class="topic" data-name="MCI">MCI</a> 
    <a href="#" class="topic" data-name="MUN">MUN</a> 
    <a href="#" class="topic" data-name="NEW">NEW</a> 
    <a href="#" class="topic" data-name="TOT">TOT</a> 
    <a href="#" class="topic" data-name="WHU">WHU</a> 
    <a href="#" class="topic" data-name="WOL">WOL</a> 
    <a href="#" class="topic" data-name="FOR">FOR</a> 
    <a href="#" class="topic" data-name="SOT">SOT</a> 
    <a href="#" class="topic" data-name="other">...</a>
</div>

<input type="text" id="search-input" placeholder="Search...">
<ul id="search-results"></ul>


<ul class="posts" id="post-list">
  {% for post in site.posts %}
    <li class="{{ post.popular }} {{ post.new }} {% for tag in post.tags %}{{ tag }} {% endfor %}">
      <span class="tags" style="display: none">{{ post.tags | jsonify }}</span>
      <div class="post-info">
        <img src="{{ post.image }}" alt="{{ post.title }}" class="post-image">
        <div class="title-and-date">
          <a href="{% if post.link %}{{ post.link }}{% else %}{{ post.url }}{% endif %}"{% if post.link %} target="_blank"{% endif %}>{{ post.title }}</a>
          <span class="date">{{ post.date | date: "%-d %B %Y" }}</span>
          <p>{{ post.excerpt }}</p>
        </div>
      </div>
    </li>
  {% endfor %}
</ul>
