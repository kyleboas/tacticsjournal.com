---
---


(function () {
  var searchInput = document.getElementById('search-input');
  var suggestionList = document.getElementById('suggestion-list');
  var postList = document.getElementById('post-list');
  var noResultsMessage = document.getElementById('no-results-message');

  if (!noResultsMessage) {
    noResultsMessage = document.createElement('div');
    noResultsMessage.id = 'no-results-message';

    var quoteBlock = document.createElement('blockquote');
    var quoteParagraph = document.createElement('p');
    quoteParagraph.textContent =
      'All the managers in the world, it doesn\'t matter how good you are, if your players don\'t understand what you are looking for or what you want, it makes no sense. - Pep Guardiola';
    quoteBlock.appendChild(quoteParagraph);
    noResultsMessage.appendChild(quoteBlock);

    var imageLink = document.createElement('a');
    imageLink.href = '{{ site.baseurl }}/';
    var image = document.createElement('img');
    image.src = '/images/FE0024A5-5B8C-4CB7-84A7-0A88C8801B63.jpeg';
    image.style.width = '100px';
    imageLink.appendChild(image);
    noResultsMessage.appendChild(imageLink);

    var noResultsText = document.createElement('p');
    noResultsText.textContent = 'No results found.';
    noResultsMessage.appendChild(noResultsText);

    noResultsMessage.style.display = 'none'; // Initially hide the message
    postList.parentNode.insertBefore(noResultsMessage, postList); // Insert the message above the post-list
  }

  var posts = [
    // Posts data here
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
        post.tags.toLowerCase().includes(query.toLowerCase()) || // Add search in tags
        post.category.toLowerCase().includes(query.toLowerCase()) // Add search in category
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

  function highlightMatch(text, query) {
    var regex = new RegExp(query, 'gi');
    return text.replace(regex, function (match) {
      return '<span class="highlight">' + match + '</span>';
    });
  }

  function renderResults(results) {
    postList.innerHTML = '';

    if (results.length === 0 && searchInput.value.trim() !== '') {
      noResultsMessage.style.display = 'block'; // Show the message
    } else {
      noResultsMessage.style.display = 'none'; // Hide the message

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

  // Get the search query from the URL
  var searchQuery = new URLSearchParams(window.location.search).get('search');
  if (searchQuery) {
    searchInput.value = searchQuery;
  }

  searchInput.addEventListener('input', function () {
    var query = searchInput.value;
    var results = search(query);
    renderResults(results);
  });

  // Initial render of all posts
  renderResults(posts);
})();
