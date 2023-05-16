---
---
  
(function() {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var postList = document.getElementById('post-list');

  var posts = [
    // Posts data...
  ];

  function search(query) {
    var results = [];

    if (!query || query.trim() === '') {
      return posts;
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

  function highlightMatch(text, query) {
    var regex = new RegExp(query, 'gi');
    return text.replace(regex, function(match) {
      return '<span class="highlight">' + match + '</span>';
    });
  }

  function renderResults(results) {
        postList.innerHTML = '';

    if (results.length === 0 && searchInput.value !== '') {
      searchResults.innerHTML = '<p>No results found.</p>';
    } else {
      var postsToRender = searchInput.value === '' ? posts : results;

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

  function clearFilterSelection() {
    var topicEls = document.getElementsByClassName('topic');

    for (var i = 0; i < topicEls.length; i++) {
      topicEls[i].classList.remove('selected');
    }
  }

  function filterPostsByTag(tagName) {
    var liEls = document.getElementsByClassName('post-item');
    var numShown = 0;

    for (var i = 0; i < liEls.length; i++) {
      var content = liEls[i].getElementsByClassName('tags')[0].textContent;

      if (content.indexOf(tagName) > -1 || tagName === 'all') {
        liEls[i].classList.remove('hidden');
        numShown++;
      } else {
        liEls[i].classList.add('hidden');
      }
    }

    document.getElementById('shown').innerHTML = numShown;
  }

  searchInput.addEventListener('input', function() {
    var query = searchInput.value;
    var results = search(query);
    renderResults(results);
  });

  document.documentElement.onclick = function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (target.className.indexOf('topic') > -1) {
      clearFilterSelection();

      if (target.className.indexOf('selected') === -1) {
        target.classList.add('selected');
        var tagName = target.getAttribute('data-name');
        filterPostsByTag(tagName);
        searchInput.value = '';
        renderResults(posts);
      } else {
        filterPostsByTag('all');
        renderResults(posts);
      }

      return false;
    }
  };

  // Initial render of all posts
  renderResults(posts);
})();

