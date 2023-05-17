---
---
  
  
(function () {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var postList = document.getElementById('post-list');
  var autoCorrectMenu = document.createElement('ul'); // Create the auto-correct menu list
  autoCorrectMenu.classList.add('auto-correct-menu'); // Add CSS class for styling

  var posts = [
    {% for post in site.posts %}
    {
      title: "{{ post.title | xml_escape }}",
      url: "{{ site.baseurl }}{{ post.url | xml_escape }}",
      excerpt: "{{ post.excerpt | strip_html | strip_newlines | escape }}",
      tags: "{% for tag in post.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}",
      categories: "{{ post.categories | xml_escape }}"
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  function search(query) {
    var results = [];
    var autoCorrectSuggestions = []; // New array to store auto-correct suggestions

    if (!query || query.trim() === '') {
      return posts; // Return all posts if no query is provided or if it's blank
    }

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];

      if (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.toLowerCase().includes(query.toLowerCase()) ||
        post.categories.toLowerCase().includes(query.toLowerCase()) // Include search in categories
      ) {
        var highlightedTitle = highlightMatch(post.title, query);
        var highlightedExcerpt = highlightMatch(post.excerpt, query);
        results.push({
          title: highlightedTitle,
          url: post.url,
          excerpt: highlightedExcerpt,
          tags: post.tags
        });
      } else if (post.tags.toLowerCase().includes(query.toLowerCase())) {
        autoCorrectSuggestions.push(post.tags); // Add the tag to auto-correct suggestions
      } else if (post.categories.toLowerCase().includes(query.toLowerCase())) {
        autoCorrectSuggestions.push(post.categories); // Add the category to auto-correct suggestions
      }
    }

    renderAutoCorrectSuggestions(autoCorrectSuggestions); // Render auto-correct suggestions

    return results;
  }

  function renderResults(results) {
    postList.innerHTML = '';
    searchResults.innerHTML = ''; // Clear any previous messages

    if (results.length === 0 && searchInput.value.trim() !== '') {
      searchResults.innerHTML = '<p>No results found.</p>'; // Show message only when there are no results and the search input is not empty
    } else {
      var postsToRender = searchInput.value.trim() === '' ? posts : results;

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
        postList.appendChild(li);
      }
    }
  }

  function renderAutoCorrectSuggestions(suggestions) {
    autoCorrectMenu.innerHTML = ''; // Clear previous auto-correct suggestions

    if (suggestions.length > 0) {
      for (var i = 0; i < suggestions.length; i++) {
        var suggestion = suggestions[i];
        var li = document.createElement('li');
        li.innerHTML = suggestion;
        autoCorrectMenu.appendChild(li);
      }
    }
  }

  function highlightMatch(text, query) {
    // Add your highlighting logic here
    return text;
  }

  searchInput.addEventListener('input', function () {
    var query = searchInput.value;
    var results = search(query);
    renderResults(results);
  });

  // Attach the auto-correct menu below the search input
  searchInput.parentNode.insertBefore(autoCorrectMenu, searchInput.nextSibling);

  // Initial render of all posts
  renderResults(posts);
})();

