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

    return results; // Return all matching posts
  }

  function renderSuggestions(suggestions) {
    suggestionList.innerHTML = ''; // Clear previous suggestions

    if (suggestions.length === 0 || searchInput.value.trim() === '') {
      suggestionList.style.display = 'none'; // Hide suggestion list if there are no suggestions or the search input is empty
      return;
    }

    suggestionList.style.display = 'block';

    var uniqueSuggestions = [...new Set(suggestions)]; // Remove duplicate suggestions

    for (var i = 0; i < 5; i++) { // Display only 5 suggestions
      if (i >= uniqueSuggestions.length) {
        break; // Break the loop if all suggestions have been displayed
      }

      var suggestion = uniqueSuggestions[i];
      if (suggestion.toLowerCase().includes(searchInput.value.trim().toLowerCase())) {
        var li = document.createElement('li');
        li.textContent = suggestion;
        li.addEventListener('click', function() {
          searchInput.value = this.textContent;
          suggestionList.style.display = 'none';
          handleInput(); // Autocomplete the suggestion and trigger search
        });
        suggestionList.appendChild(li);
      }
    }
  }

  function renderResults(results) {
    postList.innerHTML = '';

    if (results.length === 0 && searchInput.value.trim() !== '') {
      postList.innerHTML = '<p>No results found.</p>';
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

    if (query === '') {
      renderResults(posts); // Display all posts if the search input is empty
    } else {
      renderSuggestions(results.map(function(post) { return post.tags.concat(post.categories); }));
      renderResults(results);
    }
    
    if (results.length === 0 && query !== '') {
      postList.innerHTML = '<p>No results found.</p>'; // Display "No results found" message if there are no matching posts
    }
    
    if (suggestionList.style.display === 'none' && query !== '') {
      suggestionList.style.display = 'block'; // Show suggestions if they were hidden and there is a query
    }
  }

  searchInput.addEventListener('input', function() {
    if (searchInput.value.trim() === '') {
      suggestionList.style.display = 'none';
      renderResults(posts);
    } else {
      handleInput();
    }
  });

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
