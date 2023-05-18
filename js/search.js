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
      tags: "{% for tag in post.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}",
      categories: "{{ post.categories | xml_escape }}"
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
        post.tags.toLowerCase().includes(query.toLowerCase()) ||
        post.categories.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push(post);
      }
    }

    return results.slice(0, 5); // Return top 5 matching posts
  }

  function renderSuggestions(results) {
    suggestionList.innerHTML = '';

    if (results.length === 0) {
      return; // Do not show suggestions if there are no results
    }

    for (var i = 0; i < results.length; i++) {
      var suggestion = results[i];
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = suggestion.url;
      a.textContent = suggestion.title;
      li.appendChild(a);
      suggestionList.appendChild(li);
    }
  }

  function renderPosts(results) {
    postList.innerHTML = '';

    if (results.length === 0) {
      postList.innerHTML = '<p>No results found.</p>';
      return;
    }

    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var li = document.createElement('li');
      li.classList.add('post-item');
      var a = document.createElement('a');
      a.href = result.url;
      a.textContent = result.title;
      li.appendChild(a);
      var p = document.createElement('p');
      p.textContent = result.excerpt;
      li.appendChild(p);
      postList.appendChild(li);
    }
  }

  function handleInput() {
    var query = searchInput.value.trim();
    var results = search(query);
    renderSuggestions(results);
    renderPosts(results);
  }

  searchInput.addEventListener('input', handleInput);

  // Initial render of all posts
  renderPosts(posts);
})();
