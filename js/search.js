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
        content: "{{ post.content | strip_html | strip_newlines | escape }}",
        tags: "{% for tag in post.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}",
        categories: "{% for category in post.categories %}{{ category }}{% unless forloop.last %}, {% endunless %}{% endfor %}"
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  function search(query) {
    var results = [];

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];

      if (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.tags.toLowerCase().includes(query.toLowerCase()) ||
        post.categories.toLowerCase().includes(query.toLowerCase()) ||
        post.content.toLowerCase().includes(query.toLowerCase())
      ) {
        var highlightedTitle = highlightMatch(post.title, query);
        var highlightedExcerpt = highlightMatch(post.excerpt, query);
        results.push({
          title: highlightedTitle,
          url: post.url,
          excerpt: highlightedExcerpt
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
  searchResults.innerHTML = '';

  if (results.length === 0) {
    searchResults.innerHTML = '<p>No results found.</p>';
  } else {
    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = result.url;
      a.innerHTML = result.title;
      li.appendChild(a);
      var p = document.createElement('p');
      p.innerHTML = result.excerpt;
      li.appendChild(p);
      searchResults.appendChild(li);
    }
  }
}


  searchInput.addEventListener('input', function () {
    var query = searchInput.value;
    var results = search(query);
    renderResults(results);
  });
})();
