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
const searchInput = document.getElementById('search-input');
const resultBox = document.querySelector('.resultBox');
const postItems = document.querySelectorAll('.post-item');
const dateSeparators = document.querySelectorAll('.date-separator');

searchInput.addEventListener('input', function () {
  const searchQuery = searchInput.value.toLowerCase();

  // Track visible date separators
  const visibleDateSeparators = [];

  postItems.forEach(postItem => {
    const title = postItem.querySelector('a').textContent.toLowerCase();
    const content = postItem.querySelector('p').textContent.toLowerCase();
    const tags = postItem.getAttribute('data-tags').toLowerCase();
    const categories = postItem.getAttribute('data-categories').toLowerCase();

    const isVisible = (
      title.includes(searchQuery) ||
      content.includes(searchQuery) ||
      tags.includes(searchQuery) ||
      categories.includes(searchQuery)
    );

    postItem.style.display = isVisible ? 'block' : 'none';

    if (isVisible) {
      // Keep track of visible date separators
      const dateSeparator = postItem.closest('.date-separator');
      if (dateSeparator) {
        visibleDateSeparators.push(dateSeparator);
      }
    }
  });

  // Display or hide date separators based on the visibility of associated posts
  dateSeparators.forEach(separator => {
    const isAssociatedDateSeparatorVisible = visibleDateSeparators.includes(separator);
    separator.style.display = isAssociatedDateSeparatorVisible ? 'block' : 'none';
  });
});
</script>
<script src="/js/suggest.js"></script>
