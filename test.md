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
    <li class="post-item" data-tags="{{ post.tags | join: ' ' }}" data-categories="{{ post.categories | join: ' ' }}">
      {% if post.categories contains 'Notes' %}
       <p><a class="title" href="{{ site.baseurl }}{{ post.url | xml_escape }}">{{ post.title }}</a> {{ post.content | remove_first: "<p>" }}
      {% else %}
       <a href="{{ site.baseurl }}{{ post.url | xml_escape }}">{{ post.title }}</a>
        <p>{{ post.excerpt }}</p>
      {% endif %}
    </li>
  {% endfor %}
  {% if current_date != '' %}
  {% endif %}
</ul>


<script>
document.addEventListener("DOMContentLoaded", function() {
  const searchInput = document.getElementById("search-input");
  const postItems = document.querySelectorAll(".post-item");

  searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();

    postItems.forEach(function(postItem) {
      const postTitle = postItem.querySelector(".title").innerText.toLowerCase();
      const postContent = postItem.querySelector("p").innerText.toLowerCase();
      const postTags = postItem.getAttribute("data-tags").toLowerCase();
      const postCategories = postItem.getAttribute("data-categories").toLowerCase();

      if (
        postTitle.includes(searchTerm) ||
        postContent.includes(searchTerm) ||
        postTags.includes(searchTerm) ||
        postCategories.includes(searchTerm)
      ) {
        postItem.style.display = "block"; // Show the post
      } else {
        postItem.style.display = "none"; // Hide the post
      }
    });
  });
});
</script>
<script src="/js/suggest.js"></script>
