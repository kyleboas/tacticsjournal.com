---
---

(function () {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var postList = document.getElementById('post-list');

  var pages = [
    {% for post in site.posts %}
      {
        title: "{{ post.title | xml_escape }}",
        url: "{{ site.baseurl }}{{ post.url | xml_escape }}",
        content: "{{ post.content | strip_html | strip_newlines | escape }}"
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  function search(query) {
    var results = [];

    for (var i = 0; i < pages.length; i++) {
      var page = pages[i];
      if (page.title.toLowerCase().includes(query.toLowerCase()) || page.content.toLowerCase().includes(query.toLowerCase())) {
        results.push(page);
      }
    }

    return results;
  }

  function renderResults(results) {
    searchResults.innerHTML = '';

    if (results.length === 0) {
      searchResults.innerHTML = '<li>No results found.</li>';
    } else {
      for (var i = 0; i < results.length; i++) {
        var result = results[i];
        var li = document.createElement('li');
        var a = document.createElement('a');
        a.href = result.url;
        a.innerText = result.title;
        li.appendChild(a);
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
