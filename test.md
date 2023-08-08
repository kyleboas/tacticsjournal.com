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

<ul id="post-list">
  {% assign current_date = '' %}
  {% for post in site.posts %}
    {% capture post_date %}{{ post.date | date: "%B %d, %Y" }}{% endcapture %}
    {% if current_date != post_date %}
      {% if current_date != '' %}
      {% endif %}
      <div class="date-separator"><p>{{ post.date | date: "%B %d, %Y" }}</p></div>
    {% assign current_date = post_date %}
    {% endif %}
    <li class="post-item">
      {% if post.categories contains 'Notes' %}
       <p><a class="title" href="{{ site.baseurl }}{{ post.url | xml_escape }}">{{ post.title }}</a> {{ post.content }}</p>
      {% else %}
       <a class="title" href="{{ site.baseurl }}{{ post.url | xml_escape }}">{{ post.title }}</a>
        <p>{{ post.excerpt }}</p>
      {% endif %}
    </li>
  {% endfor %}
  {% if current_date != '' %}
  {% endif %}
</ul>


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

  var searchInput = document.getElementById("search-input");
  var postLists = document.querySelectorAll("ul");

  searchInput.addEventListener("input", function() {
    var searchQuery = searchInput.value.toLowerCase();

    postLists.forEach(function(ul) {
      var postItems = ul.querySelectorAll(".post-item");
      var anyMatchingPosts = false;

      postItems.forEach(function(post) {
        var postTitle = post.querySelector("a").textContent.toLowerCase();
        var postContent = post.querySelector("p").textContent.toLowerCase();

        if (postTitle.includes(searchQuery) || postContent.includes(searchQuery)) {
          post.style.display = "block"; // Show matching post
          anyMatchingPosts = true;
        } else {
          post.style.display = "none"; // Hide non-matching posts
        }
      });

      if (anyMatchingPosts) {
        ul.previousElementSibling.style.display = "block"; // Show date separator
      } else {
        ul.previousElementSibling.style.display = "none"; // Hide date separator
      }
    });
  });
});
</script>
<script src="/js/suggest.js"></script>
