---
layout: default
permalink: /preview/
---

<!-- index.html -->
<div class="searchInput">
  <input type="text" id="search-input" placeholder="Search...">
  <input type="text" id="search-tags-1" placeholder="Search by team...">
  <input type="text" id="search-tags-2" placeholder="Search by team...">
  <input type="text" id="search-categories" placeholder="Search by competition...">
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
    var searchTags1 = urlParams.get("tags1");
    var searchTags2 = urlParams.get("tags2");
    var searchCategories = urlParams.get("categories");

    if (searchQuery || searchTags1 || searchTags2 || searchCategories) {
      var searchInput = document.getElementById("search-input");
      var searchTagsInput1 = document.getElementById("search-tags-1");
      var searchTagsInput2 = document.getElementById("search-tags-2");
      var searchCategoriesInput = document.getElementById("search-categories");

      if (searchQuery) searchInput.value = searchQuery;
      if (searchTags1) searchTagsInput1.value = searchTags1;
      if (searchTags2) searchTagsInput2.value = searchTags2;
      if (searchCategories) searchCategoriesInput.value = searchCategories;

      searchInput.dispatchEvent(new Event("input"));
    }
  });
</script>
<script src="/js/search-test.js"></script>
<script src="/js/suggest.js"></script>