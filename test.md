---
layout: default
---

<div class="searchInput">
  <input type="text" id="search-input1" placeholder="Search Tag 1...">
  <input type="text" id="search-input2" placeholder="Search Tag 2...">
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
    var searchQuery1 = urlParams.get("search1");
    var searchQuery2 = urlParams.get("search2");

    if (searchQuery1) {
      var searchInput1 = document.getElementById("search-input1");
      searchInput1.value = searchQuery1;
      searchInput1.dispatchEvent(new Event("input"));
    }

    if (searchQuery2) {
      var searchInput2 = document.getElementById("search-input2");
      searchInput2.value = searchQuery2;
      searchInput2.dispatchEvent(new Event("input"));
    }
  });
</script>
<script src="/js/search-test.js"></script>
<script src="/js/suggest.js"></script>