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
(function () {
    var searchInput = document.getElementById('search-input');
    var postList = document.getElementById('post-list');
    var allPostItems = postList.querySelectorAll('.post-item');

    function filterPosts(query) {
      var trimmedQuery = query.trim().toLowerCase();

      if (trimmedQuery === '') {
        // If the query is empty, show all post items
        allPostItems.forEach(function (item) {
          item.style.display = 'block';
        });
        return;
      }

      allPostItems.forEach(function (item) {
        var title = item.querySelector('.title').textContent.toLowerCase();
        var excerpt = item.querySelector('.excerpt').textContent.toLowerCase();
        var tags = item.getAttribute('data-tags').toLowerCase();
        var categories = item.getAttribute('data-categories').toLowerCase();
        var date = item.getAttribute('data-date').toLowerCase();

        if (
          title.includes(trimmedQuery) ||
          excerpt.includes(trimmedQuery) ||
          tags.includes(trimmedQuery) ||
          categories.includes(trimmedQuery) ||
          date.includes(trimmedQuery)
        ) {
          item.style.display = 'block';
          highlightMatch(item.querySelector('.title'), trimmedQuery);
          highlightMatch(item.querySelector('.excerpt'), trimmedQuery);
        } else {
          item.style.display = 'none';
        }
      });
    }

    function highlightMatch(element, query) {
      var regex = new RegExp(query, 'gi');
      var content = element.textContent;
      var highlightedContent = content.replace(regex, function (match) {
        return '<span class="highlight">' + match + '</span>';
      });
      element.innerHTML = highlightedContent;
    }

    // Event listener for input event on the searchInput element
    searchInput.addEventListener('input', function () {
      filterPosts(searchInput.value);
    });
  })();
</script>
<script src="/js/suggest.js"></script>
