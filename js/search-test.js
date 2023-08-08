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

    var imageLink = document.createElement('a');
    imageLink.href = '{{ site.baseurl }}/';
    var image = document.createElement('img');
    image.src = '{{ site.baseurl }}/images/FE0024A5-5B8C-4CB7-84A7-0A88C8801B63.jpeg';
    image.style.width = '100px';
    image.style.paddingTop = '10px';
    imageLink.appendChild(image);
    noResultsMessage.appendChild(imageLink);

    noResultsMessage.style.display = 'none'; // Initially hide the message
    postList.parentNode.insertBefore(noResultsMessage, postList); // Insert the message above the post-list
  }

  var posts = [
    {% for post in site.posts %}
        {
          title: "{{ post.title | xml_escape }}",
          url: "{{ site.baseurl }}{{ post.url | xml_escape }}",
          excerpt: "{{ post.excerpt | strip_html | strip_newlines | escape }}",
          tags: "{% for tag in post.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}",
          categories: "{{ post.categories | xml_escape }}",
          date: "{{ post.date | date: "%B %d, %Y" }}"
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
        post.tags.toLowerCase().includes(query.toLowerCase()) || // Add search in tags
        post.categories.toLowerCase().includes(query.toLowerCase()) || // Add search in categories
        post.date.toLowerCase().includes(query.toLowerCase()) // Add search in date
      ) {
        var highlightedTitle = highlightMatch(post.title, query);
        var highlightedExcerpt = highlightMatch(post.excerpt, query);
        results.push({
          title: highlightedTitle,
          url: post.url,
          excerpt: highlightedExcerpt,
          tags: post.tags,
          categories: post.categories,
          date: post.date
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

  function renderResults(results, query) {
    postList.innerHTML = '';

    var searchQuery = searchInput.value.trim();
    var countElement = document.getElementById('result-count');

    if (searchQuery === '') {
      countElement.textContent = 'All Posts';
      noResultsMessage.style.display = 'none';

      var currentDate = null;
      var firstGroup = true;
      for (var i = 0; i < results.length; i++) {
        var result = results[i];

        // Check if the date has changed and add a separator
        if (result.date !== currentDate) {
          var separator = document.createElement('div');
          separator.classList.add('date-separator');
          var p = document.createElement('p');
          p.textContent = result.date;
          separator.appendChild(p);

          // Add first-date-separator class to the first group of posts
          if (firstGroup) {
            separator.classList.add('first-date-separator');
            separator.style.marginTop = '0px'; // Add margin-top: 0px to the first-date-separator
            firstGroup = false;
          }

          postList.appendChild(separator);

          currentDate = result.date;
        }

        var li = document.createElement('li');
        li.classList.add('post-item');

        // Check if the post has the category "Notes"
        if (result.categories.includes('Notes')) {
          // Display the post without the title
          var p = document.createElement('p');
          var a = document.createElement('a');
          a.href = result.url;
          a.innerHTML = result.title;
          a.classList.add('title');
          p.appendChild(a);
          p.innerHTML += result.excerpt;
          li.appendChild(p);
        } else {
          // Display the post with the title and excerpt
          var a = document.createElement('a');
          a.href = result.url;
          a.innerHTML = result.title;
          li.appendChild(a);
          var p = document.createElement('p');
          p.innerHTML = result.excerpt;
          li.appendChild(p);
        }

        postList.appendChild(li);
      }
    } else if (results.length === 0) {
      countElement.textContent = 'No posts found';
      noResultsMessage.style.display = 'block'; // Show the message
    } else {
      var resultCount = results.length;
      countElement.textContent = resultCount + ' posts found'; // Update the count
      noResultsMessage.style.display = 'none';

      var currentDate = null;
      var firstGroup = true;
      for (var i = 0; i < results.length; i++) {
        var result = results[i];

        // Check if the date has changed and add a separator
        if (result.date !== currentDate) {
          var separator = document.createElement('div');
          separator.classList.add('date-separator');
          var p = document.createElement('p');
          p.textContent = result.date;
          separator.appendChild(p);

          // Add first-date-separator class to the first group of posts
          if (firstGroup) {
            separator.classList.add('first-date-separator');
            separator.style.marginTop = '0px'; // Add margin-top: 0px to the first-date-separator
            firstGroup = false;
          }

          postList.appendChild(separator);

          currentDate = result.date;
        }

        var li = document.createElement('li');
        li.classList.add('post-item'); // Add a custom class for styling purposes

        // Check if the post has the category "Notes"
        if (result.categories.includes('Notes')) {
          // Display the post without the title
          var p = document.createElement('p');
          var a = document.createElement('a');
          a.href = result.url;
          a.innerHTML = result.title;
          a.classList.add('title');
          p.appendChild(a);
          p.innerHTML += result.excerpt;
          li.appendChild(p);
        } else {
          // Display the post with the title and excerpt
          var a = document.createElement('a');
          a.href = result.url;
          a.innerHTML = result.title;
          li.appendChild(a);
          var p = document.createElement('p');
          p.innerHTML = result.excerpt;
          li.appendChild(p);
        }

        postList.appendChild(li);
      }
    }

    // Add first-date-separator class to the first group of posts
    var firstGroupSeparator = postList.querySelector('.first-date-separator');
    if (firstGroupSeparator) {
      firstGroupSeparator.classList.add('first-date-separator');
      firstGroupSeparator.style.marginTop = '0px'; // Add margin-top: 0px to the first-date-separator
    }
  }

  // Get the search query from the URL
  var searchQuery = new URLSearchParams(window.location.search).get('search');
  if (searchQuery) {
    searchInput.value = searchQuery;
    var results = search(searchQuery); // Perform search with the query

    // Add first-date-separator class to the first group of posts
    if (results.length > 0) {
      var firstGroupSeparator = postList.querySelector('.first-date-separator');
      if (firstGroupSeparator) {
        firstGroupSeparator.classList.add('first-date-separator');
        firstGroupSeparator.style.marginTop = '0px'; // Add margin-top: 0px to the first-date-separator
      }
    }

    renderResults(results, searchQuery); // Pass the results and query to render
  }

  // Event listener for input event on the searchInput element
  searchInput.addEventListener('input', function () {
    var query = searchInput.value;
    var results = search(query);

    // Add first-date-separator class to the first group of posts
    if (results.length > 0) {
      var firstGroupSeparator = postList.querySelector('.first-date-separator');
      if (firstGroupSeparator) {
        firstGroupSeparator.classList.add('first-date-separator');
        firstGroupSeparator.style.marginTop = '0px'; // Add margin-top: 0px to the first-date-separator
      }
    }

    renderResults(results, query); // Pass the results and query to render
  });

  // Initial render of all posts
  renderResults(posts);
})();
