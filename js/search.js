---
---

  
(function () {
  var searchInput = document.getElementById('search-input');
  var suggestionsList = document.getElementById('suggestions-list');
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

      // Concatenate tags and categories as one item in the suggestions
      var tagsAndCategories = post.tags.concat(post.categories);

      if (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        tagsAndCategories.some(function (item) {
          return item.toLowerCase().includes(query.toLowerCase());
        })
      ) {
        var highlightedTitle = highlightMatch(post.title, query);
        var highlightedExcerpt = highlightMatch(post.excerpt, query);
        results.push({
          title: highlightedTitle,
          url: post.url,
          excerpt: highlightedExcerpt,
          tagsAndCategories: tagsAndCategories
        });
      }
    }

    return results;
  }

  function renderSuggestions(suggestions) {
    suggestionsList.innerHTML = '';

    if (suggestions.length === 0 || searchInput.value.trim() === '') {
      return; // Return early if there are no suggestions or the search input is empty
    }

    for (var i = 0; i < suggestions.length; i++) {
      var suggestion = suggestions[i];
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.href = suggestion.url;
      a.textContent = suggestion.title;
      li.appendChild(a);
      suggestionsList.appendChild(li);
    }
  }

  function renderResults(results) {
    postList.innerHTML = '';

    if (results.length === 0 && searchInput.value.trim() !== '') {
      postList.innerHTML = '<p>No results found.</p>'; // Show message only when there are no results and the search input is not empty
    } else {
      for (var i = 0; i < results.length; i++) {
        var result = results[i];
        var li = document.createElement('li');
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
  }

  function highlightMatch(text, query) {
    // Add your highlighting logic here
    return text;
  }

  function handleInput() {
    var query = searchInput.value;
    var results = search(query);
    renderResults(results);
    var suggestions = results.slice(0, 5); // Show top 5 suggestions
    renderSuggestions(suggestions);
  }

  searchInput.addEventListener('input', handleInput);

  // Initial render of all posts
  renderResults(posts);

  // Clear search results and suggestions when the search input is empty
  searchInput.addEventListener('focus', function () {
    if (searchInput.value.trim() === '') {
      renderResults([]);
      renderSuggestions([]);
    }
  });
})();
