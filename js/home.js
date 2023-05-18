---
---
  
  
(function () {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var postList = document.getElementById('post-list');

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
        results.push(post);
      }
    }

    return results.slice(0, 5); // Return top 5 matching posts
  }

  function renderSuggestions(suggestions) {
    searchResults.innerHTML = '';

    for (var i = 0; i < suggestions.length; i++) {
      var suggestion = suggestions[i];
      var li = document.createElement('li');
      li.textContent = suggestion.tags;
      li.addEventListener('click', function () {
        searchInput.value = this.textContent; // Autocomplete the search field with the clicked suggestion
        searchInput.focus(); // Set focus back to the search input
      });
      searchResults.appendChild(li);
    }
  }

  function renderPosts(posts) {
    postList.innerHTML = '';

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var li = document.createElement('li');
      li.classList.add('post-item'); // Add a custom class for styling purposes
      var a = document.createElement('a');
      a.href = post.url;
      a.innerHTML = post.title;
      li.appendChild(a);
      var p = document.createElement('p');
      p.innerHTML = post.excerpt;
      li.appendChild(p);
      postList.appendChild(li);
    }
  }

  function handleSearchInput() {
    var query = searchInput.value.trim();
    var results = search(query);

    renderSuggestions(results);
    renderPosts(results);
  }

  searchInput.addEventListener('input', handleSearchInput);

  // Initial render of all posts
  renderPosts(posts);
})();
