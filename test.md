---
layout: default
---

<div class="searchInput">
  <input type="text" id="search-input" placeholder="Search...">
    <p id="p-result-count" style="margin-top: 0px;"><span id="result-count"></span></p>
    <div class="resultBox">
      <!-- here list are inserted from javascript -->
  </div>
</div>

<div id="post-list">
  {% assign current_date = '' %}
  {% for post in site.posts %}
    {% capture post_date %}{{ post.date | date: "%B %d, %Y" }}{% endcapture %}
    {% if current_date != post_date %}
      {% if current_date != '' %}
        </ul>
      {% endif %}
      <h2 class="date-separator">{{ post.date | date: "%B %d, %Y" }}</h2>
      <ul>
    {% assign current_date = post_date %}
    {% endif %}
    <li class="post-item">
      <a href="{{ post.permalink }}">{{ post.title }}</a>
      {% if post.categories contains 'Notes' %}
        <div class="content-div">{{ post.content }}</div>
      {% else %}
        <p>{{ post.excerpt }}</p>
      {% endif %}
    </li>
  {% endfor %}
  {% if current_date != '' %}
    </ul>
  {% endif %}
</div>



<script>
  window.addEventListener("DOMContentLoaded", function() {
  var searchInput = document.getElementById("search-input");
  var resultBox = document.querySelector(".resultBox");
  var postList = document.querySelectorAll(".post-item");

  searchInput.addEventListener("input", function() {
    var searchQuery = searchInput.value.toLowerCase();

    resultBox.innerHTML = ''; // Clear previous results

    postList.forEach(function(post) {
      var postTitle = post.querySelector("a").textContent.toLowerCase();
      var postContent = post.querySelector(".content-div").textContent.toLowerCase();

      if (postTitle.includes(searchQuery) || postContent.includes(searchQuery)) {
        resultBox.appendChild(post.cloneNode(true));
      }
    });
  });
});
</script>
<script src="/js/suggest.js"></script>
