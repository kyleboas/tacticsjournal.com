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
        tags: "{% for tag in post.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}"
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
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      ) {
        var highlightedTitle = highlightMatch(post.title, query);
        var highlightedExcerpt = highlightMatch(post.excerpt, query);
        results.push({
          title: highlightedTitle,
          url: post.url,
          excerpt: highlightedExcerpt,
          tags: post.tags
        });
      }
    }

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
        tags: "{% for tag in post.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}"
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
        post.excerpt.toLowerCase().includes(query.toLowerCase())
      ) {
        var highlightedTitle = highlightMatch(post.title, query);
        var highlightedExcerpt = highlightMatch(post.excerpt, query);
        results.push({
          title: highlightedTitle,
          url: post.url,
          excerpt: highlightedExcerpt,
          tags: post.tags
        });
      }
    }

    return results;
  }

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
        category: "{{ post.category }}"
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
        post.category.toLowerCase().includes(query.toLowerCase())
      ) {
        var highlightedTitle = highlightMatch(post.title, query);
        var highlightedExcerpt = highlightMatch(post.excerpt, query);
        results.push({
          title: highlightedTitle,
          url: post.url,
          excerpt: highlightedExcerpt,
          tags: post.tags,
          category: post.category
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

  function renderResults(results) {
    postList.innerHTML = '';
    searchResults.innerHTML = ''; // Clear any previous messages

    var numResults = results.length;
    var message = document.createElement('p');
    message.textContent = numResults + ' post' + (numResults !== 1 ? 's' : '') + ' found.';
    searchResults.appendChild(message);

    if (numResults === 0 && searchInput.value.trim() !== '') {
      searchResults.innerHTML += '<p>No results found.</p>'; // Show message only when there are no results and the search input is not empty
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

  searchInput.addEventListener('input', function () {
    var query = searchInput.value;
    var results = search(query);
    renderResults(results);
  });

  // Initial render of all posts
  renderResults(posts);
})();
