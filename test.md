---
layout: default
---

<figure>
    <img src="https://i.imgur.com/73UKbil.gif">
    <figcaption>Figure 6.1 - Andre Onana passes to Aaron Wan-Bissaka.</figcaption>
</figure>

<div class="searchInput">
  <input type="text" id="search-input" placeholder="Search...">
    <p id="p-result-count" style="margin-top: 0px;"><span id="result-count"></span></p>
    <div class="resultBox">
      <!-- here list are inserted from javascript -->
  </div>
</div>

<ul id="post-list"></ul>

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
