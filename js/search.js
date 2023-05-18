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
      tags: [{% for tag in post.tags %}"{{ tag | xml_escape }}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
      categories: [{% for category in post.categories %}"{{ category | xml_escape }}"{% unless forloop.last %}, {% endunless %}{% endfor %}]
    }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  function search(query) {
    var results = [];

    if (!query || query.trim() === '') {
      return posts; // Return all posts if no query is provided or if it's blank
    }

    var lowercaseQuery = query.toLowerCase();

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];

      for (var j = 0; j < post.tags.length; j++) {
        var tag = post.tags[j].toLowerCase();
        if (tag.includes(lowercaseQuery) && !results.includes(tag)) {
          results.push(tag);
        }
      }

      for (var k = 0; k < post.categories.length; k++) {
        var category = post.categories[k].toLowerCase();
        if (category.includes(lowercaseQuery) && !results.includes(category)) {
          results.push(category);
        }
      }
    }

    return results;
  }

  function renderResults(results) {
    postList.innerHTML = '';
    searchResults.innerHTML = '';

    if (results.length === 0 && searchInput.value.trim() !== '') {
      searchResults.innerHTML = '<p>No results found.</p>';
    } else {
      for (var i = 0; i < results.length; i++) {
        var suggestion = results[i];
        var li = document.createElement('li');
        li.textContent = suggestion;
        searchResults.appendChild(li);
      }
    }
  }

  function renderPosts() {
    postList.innerHTML = '';

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = post.url;
      a.textContent = post.title;
      li.appendChild(a);
      var p = document.createElement('p');
      p.textContent = post.excerpt;
      li.appendChild(p);
      postList.appendChild(li);
    }
  }

  searchInput.addEventListener('input', function () {
    var query = searchInput.value.trim();
    var results = search(query);
    renderResults(results);
  });

  // Initial render of all posts
  renderPosts();

  // Clear search results when the search input is empty
  searchInput.addEventListener('focus', function () {
    if (searchInput.value.trim() === '') {
      renderPosts();
      renderResults([]);
    }
  });
})();
