---
layout: default
permalink: /preview/
---

<div style="display: flex; align-items: center; padding: 10px; margin-bottom: 5px; padding-left: 5px;">
    <img src="
https://raw.githubusercontent.com/kyleboas/images/main/uploads/2024/07/12/Image-12Jul2024_13:42:15.png" alt="Image" style="height: 60px; margin-right: 10px;">
    <p style="font-size: 14px; margin: 0;">
        I have a Discord server where you can discuss football tactics. <a href="https://discord.gg/pQuympz34q">Join here.</a>
    </p>
</div>

<div class="searchInput">
  <div id="search-criteria-container">
    <input type="text" id="search-input" placeholder="Search...">
  </div>
  <p id="p-result-count" style="margin-top: 0px;"><span id="result-count"></span></p>
  <div class="resultBox">
    <!-- here list are inserted from javascript -->
  </div>
</div>

<ul id="post-list"></ul>

<hr>

<p><em>To view all of the posts, <a href="https://tacticsjournal.com/archive/">visit the archive</a> or <a href="https://tacticsjournal.com/#top">search</a> at the top of the page.</em></p>

<style>

.tag {
  display: inline-block;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 14px;
}

.tag .remove-tag {
  margin-left: 10px;
  cursor: pointer;
  color: #ff0000;
}

</style>

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
<script src="/js/search-test-test.js"></script>
<script src="/js/suggest.js"></script>