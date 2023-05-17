---
---
  
  
(function () {
  var searchInput = document.getElementById('search-input');
  var searchResults = document.getElementById('search-results');
  var postList = document.getElementById('post-list');

  var posts = [
    // Your posts data
  ];

  var selectedFilter = null;

  function search(query) {
    var results = [];

    if (!query || query.trim() === '') {
      if (selectedFilter === null) {
        return posts; // Return all posts if no query and no filter selected
      }
      // Filter posts based on the selected filter
      results = posts.filter(function (post) {
        return post.tags.includes(selectedFilter);
      });
    } else {
      // Apply both filter and search query
      results = posts.filter(function (post) {
        return (
          (selectedFilter === null || post.tags.includes(selectedFilter)) && // Check if the post matches the selected filter (if any)
          (post.title.toLowerCase().includes(query.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(query.toLowerCase()))
        );
      });
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

    if (results.length === 0 && searchInput.value !== '') {
      searchResults.innerHTML = '<p>No results found.</p>';
    } else {
      searchResults.innerHTML = ''; // Clear the search results
      var postsToRender = searchInput.value === '' ? posts : results;

      for (var i = 0; i < postsToRender.length; i++) {
        var result = postsToRender[i];

        // Check if the post's tags include the selected filter (if any)
        if (selectedFilter === null || result.tags.includes(selectedFilter)) {
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

    if (selectedFilter === null) {
      selectedFilter = document.querySelector('.topic.selected') ? document.querySelector('.topic.selected').getAttribute('data-name') : null;
    }
  }

  var filterLinks = document.querySelectorAll('.topic');

  for (var i = 0; i < filterLinks.length; i++) {
    var filterLink = filterLinks[i];

    filterLink.addEventListener('click', function (event) {
      event.preventDefault();

      var selectedTag = this.getAttribute('data-name');

      if (selectedFilter === selectedTag) {
        selectedFilter = null; // Deselect the filter if it's already selected
      } else {
        selectedFilter = selectedTag; // Select the filter
        searchInput.value = ''; // Clear the search input
      }

      var results = search(searchInput.value);
      renderResults(results);
    });
  }

  searchInput.addEventListener('input', function () {
    var query = searchInput.value;
    var results = search(query);

    if (query.trim() !== '' && selectedFilter !== null) {
      selectedFilter = null; // Deselect the filter when a search query is entered
    }

    renderResults(results);
  });

