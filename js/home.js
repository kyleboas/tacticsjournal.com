---
---
  

(function () {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var postList = document.getElementById('post-list');
  var selectedFilter = null;

  var posts = [
    {% for post in site.posts %}
      {
        title: "{{ post.title | xml_escape }}",
        url: "{{ site.baseurl }}{{ post.url | xml_escape }}",
        excerpt: "{{ post.excerpt | strip_html | strip_newlines | escape }}",
        tags: [{% for tag in post.tags %}"{{ tag }}"{% unless forloop.last %}, {% endunless %}{% endfor %}]
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  function search(query) {
  var results = [];

  if (!query || query.trim() === '') {
    return posts; // Return all posts if no query is provided or if it's blank
  }

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];

    if (
      (selectedFilter === null || post.tags.includes(selectedFilter)) && // Check if the post matches the selected filter (if any)
      (post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()))
    ) {
      var highlightedTitle = highlightMatch(post.title, query);
      var highlightedExcerpt = highlightMatch(post.excerpt, query);
      results.push({
        title: highlightedTitle,
        url: post.url,
        excerpt: highlightedExcerpt,
        tags: post.tags,
      });
    }
  }

  return results;
}


  function highlightMatch(text, query) {
    var regex = new RegExp(query, 'gi');
    return text.replace(regex, function (match) {
      return '<span class="highlight">' + match + '</span>';
    });
  }

  // ...

function renderResults(results) {
  postList.innerHTML = '';

  if (results.length === 0 && searchInput.value !== '') {
    searchResults.innerHTML = '<p>No results found.</p>';
  } else {
    searchResults.innerHTML = ''; // Clear the search results
    var postsToRender = searchInput.value === '' ? posts : results;

    for (var i = 0; i < postsToRender.length; i++) {
      var result = postsToRender[i];
      var li = document.createElement('li');
      li.classList.add('post-item'); // Add a custom class for styling purposes
      var a = document.createElement('a');
      a.href = result.url;
      a.innerHTML = result.title;
      li.appendChild(a);
      var p = document.createElement('p');
      p.innerHTML = result.excerpt;
      li.appendChild(p);

      // Add tags for the post
      var tags = document.createElement('span');
      tags.classList.add('tags');
      tags.style.display = 'none'; // Hide the tags initially
      tags.innerHTML = result.tags.join(', '); // Assuming the tags are an array of strings
      li.appendChild(tags);

      postList.appendChild(li);
    }
  }

      selectedFilter = null; // Clear the selected filter
  }

  var filterLinks = document.querySelectorAll('.topic');

  for (var i = 0; i < filterLinks.length; i++) {
    filterLinks[i].addEventListener('click', function (event) {
      event.preventDefault();

      var selectedTag = this.getAttribute('data-name');

      if (selectedFilter === selectedTag) {
        selectedFilter = null; // Deselect the filter if it's already selected
      } else {
        selectedFilter = selectedTag; // Select the clicked filter
        searchInput.value = ''; // Clear the search input
      }

      var results = search(searchInput.value);
      renderResults(results);
    });
  }

  searchInput.addEventListener('input', function () {
    var query = searchInput.value;
    var results = search(query);
    renderResults(results);
  });

  // Initial render of all posts
  renderResults(posts);
})();

