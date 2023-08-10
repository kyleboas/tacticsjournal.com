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
function highlightMatch(text, query) {
  var regex = new RegExp('(' + query + ')', 'gi');
  return text.replace(regex, function (match) {
    return '<span class="highlight">' + match + '</span>';
  });
}

const postItems = document.querySelectorAll('.post-item');
const dateSeparators = document.querySelectorAll('.date-separator');

function filterAndHighlight(searchQuery) {
  postItems.forEach(postItem => {
    const titleElement = postItem.querySelector('a');
    const contentElement = postItem.querySelector('p');
    if (!titleElement || !contentElement) {
      return;
    }
    
    const titleText = titleElement.textContent.toLowerCase();
    const contentText = contentElement.textContent.toLowerCase();

    const isVisible = (
      titleText.includes(searchQuery) ||
      contentText.includes(searchQuery)
    );

    const titleHighlighted = isVisible ? highlightMatch(titleText, searchQuery) : titleText;
    const contentHighlighted = isVisible ? highlightMatch(contentText, searchQuery) : contentText;

    titleElement.innerHTML = titleHighlighted;
    contentElement.innerHTML = contentHighlighted;

    postItem.style.display = isVisible ? 'block' : 'none';
  });

  dateSeparators.forEach(separator => {
    const associatedPosts = separator.nextElementSibling.querySelectorAll('.post-item');
    const visibleAssociatedPosts = Array.from(associatedPosts).filter(postItem => postItem.style.display !== 'none');
    separator.style.display = visibleAssociatedPosts.length > 0 ? 'block' : 'none';
  });
}

// Use existing searchInput without re-declaring it
searchInput.addEventListener('input', function () {
  const searchQuery = searchInput.value.toLowerCase();
  filterAndHighlight(searchQuery);
});
</script>
<script src="/js/suggest.js"></script>
