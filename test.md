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
  const dateSeparators = document.querySelectorAll(".date-separator");
  let originalPostItemsDisplay = Array.from(postItems).map(item => item.style.display);
  let originalDateSeparatorsDisplay = Array.from(dateSeparators).map(item => item.style.display);
  let displayedDates = {}; // Object to store displayed post items for each date

  searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();

    if (searchTerm === "") {
      postItems.forEach(function(postItem, index) {
        postItem.style.display = originalPostItemsDisplay[index]; // Reset display for all post items
      });

      dateSeparators.forEach(function(separator, index) {
        separator.style.display = originalDateSeparatorsDisplay[index]; // Reset display for all date separators
      });

      displayedDates = {}; // Reset displayedDates object
      return; // No need to proceed with filtering if search term is empty
    }

    postItems.forEach(function(postItem, index) {
      const postTitle = postItem.querySelector("a").innerText.toLowerCase();
      const postContent = postItem.querySelector("p").innerText.toLowerCase();
      const postTags = postItem.getAttribute("data-tags").toLowerCase();
      const postCategories = postItem.getAttribute("data-categories").toLowerCase();

      if (
        postTitle.includes(searchTerm) ||
        postContent.includes(searchTerm) ||
        postTags.includes(searchTerm) ||
        postCategories.includes(searchTerm)
      ) {
        const postDate = postItem.querySelector(".date-separator p").innerText;

        if (!displayedDates[postDate]) {
          displayedDates[postDate] = [];
        }

        displayedDates[postDate].push(postItem);
        postItem.style.display = originalPostItemsDisplay[index]; // Show the post
      } else {
        postItem.style.display = "none"; // Hide the post
      }
    });

    dateSeparators.forEach(function(separator) {
      const separatorDate = separator.querySelector("p").innerText;
      const postsForDate = displayedDates[separatorDate];

      if (postsForDate && postsForDate.length > 0) {
        separator.style.display = "block";
      } else {
        separator.style.display = "none";
      }
    });
  });
});
</script>
<script src="/js/suggest.js"></script>
