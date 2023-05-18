---
---

    
(function () {
  var searchInput = document.getElementById('search-input');
  var suggestionList = document.getElementById('suggestion-list');
  var postList = document.getElementById('post-list');

  var posts = [
    {% for post in site.posts %}
    {
      title: "{{ post.title | xml_escape }}",
      url: "{{ site.baseurl }}{{ post.url | xml_escape }}",
      excerpt: "{{ post.excerpt | strip_html | strip_newlines | escape }}",
      tags: [{% for tag in post.tags %}"{{ tag }}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
      categories: [{% for category in post.categories %}"{{ category }}"{% unless forloop.last %}, {% endunless %}{% endfor %}]
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  function search(query) {
    var results = [];

    if (!query || query.trim() === '') {
      return results; // Return empty array if no query is provided or if it's blank
    }

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];

      if (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.some(function(tag) { return tag.toLowerCase().includes(query.toLowerCase()); }) ||
        post.categories.some(function(category) { return category.toLowerCase().includes(query.toLowerCase()); })
      ) {
        results.push(post);
      }
    }

    return results.slice(0, 5); // Return top 5 matching posts
  }

  function renderSuggestions(suggestions) {
  suggestionList.innerHTML = '';

  if (suggestions.length === 0 || searchInput.value.trim() === '') {
    suggestionList.style.display = 'none';
    return;
  }

  suggestionList.style.display = 'block';

  var uniqueSuggestions = new Set();

  suggestions.forEach(function(post) {
    post.tags.forEach(function(tag) {
      uniqueSuggestions.add(tag);
    });

    post.categories.forEach(function(category) {
      uniqueSuggestions.add(category);
    });
  });

  uniqueSuggestions.forEach(function(suggestion) {
    var li = document.createElement('li');
    li.textContent = suggestion;
    suggestionList.appendChild(li);
  });
}

  function renderResults(results) {
  postList.innerHTML = '';

  if (results.length === 0 && searchInput.value.trim() !== '') {
    searchResults.innerHTML = '<p>No results found.</p>';
  } else {
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var li = document.createElement('li');
      li.classList.add('post-item'); // Add "post-item" class
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


  function handleInput() {
    var query = searchInput.value.trim();
    var results = search(query);
    renderSuggestions(results.map(function(post) { return post.tags.concat(post.categories); }));
    renderResults(results);
  }

  searchInput.addEventListener('input', handleInput);

  // Initial render of all posts
  renderResults(posts);

  // Clear search results and suggestions when the search input is empty
  searchInput.addEventListener('focus', function() {
    if (searchInput.value.trim() === '') {
      suggestionList.style.display = 'none';
      renderResults(posts);
    }
  });
})();
