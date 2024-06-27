---
layout: page
permalink: /preview/
---

<div class="searchInput">
  <input type="text" id="search-input" placeholder="Search...">
  <p id="p-result-count" style="margin-top: 0px;"><span id="result-count">Last 15 posts</span></p>
</div>

<ul id="post-list">
  {% for post in site.posts limit:15 %}
    <li class="post-item initial-post">
      <a href="{{ post.link | default: post.url }}" target="_blank" class="long-title">{{ post.title }}</a>
      <p class="post-date">{{ post.date | date: "%d %B %Y" }}</p>
      <p>{{ post.excerpt | strip_html | strip_newlines | escape }}</p>
    </li>
  {% endfor %}
</ul>

<hr>

<p><em>To view all of the posts, <a href="https://tacticsjournal.com/archive/">visit the archive</a> or <a href="https://tacticsjournal.com/#top">search</a> at the top of the page.</em></p>

<script>
  window.addEventListener("DOMContentLoaded", function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var searchQuery = urlParams.get("search");

    if (searchQuery) {
      var searchInput = document.getElementById("search-input");
      searchInput.value = searchQuery;
      searchInput.dispatchEvent(new Event("input"));
    }
  });
</script>
<script src="/js/search-test.js"></script>
<script src="/js/suggest.js"></script>