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
          categories: "{{ post.categories | xml_escape }}"
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
        post.categories.toLowerCase().includes(query.toLowerCase()) // Add search in categories
      ) {
        var highlightedTitle = highlightMatch(post.title, query);
        var highlightedExcerpt = highlightMatch(post.excerpt, query);
        results.push({
          title: highlightedTitle,
          url: post.url,
          excerpt: highlightedExcerpt,
          tags: post.tags,
          categories: post.categories
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

  var searchQuery = searchInput.value.trim();
  var countElement = document.getElementById('result-count');
  var currentDate = null; // Track the current date

  if (searchQuery === '') {
    countElement.textContent = 'All Posts';
    noResultsMessage.style.display = 'none';

    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var li = document.createElement('li');
      li.classList.add('post-item');

      // Check if the post has the category "Notes"
      if (result.categories.includes('Notes')) {
        // Display the post without the title
        var p = document.createElement('p');
        p.innerHTML = result.excerpt;
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

      // Check if the current date is different from the previous post's date
      if (result.date !== currentDate) {
        currentDate = result.date;

        // Add a date header
        var dateHeader = document.createElement('div');
        dateHeader.classList.add('date-header');
        var dateParagraph = document.createElement('p');
        dateParagraph.textContent = currentDate;
        dateHeader.appendChild(dateParagraph);
        postList.appendChild(dateHeader);

        // Add a separator element between date groups, except for the first group
        if (i > 0) {
          var separator = document.createElement('hr');
          separator.classList.add('date-separator');
          postList.appendChild(separator);

          // Add the date of the previous group underneath the separator
          var previousDateHeader = document.createElement('div');
          previousDateHeader.classList.add('date-header');
          var previousDateParagraph = document.createElement('p');
          previousDateParagraph.textContent = currentDate;
          previousDateHeader.appendChild(previousDateParagraph);
          postList.appendChild(previousDateHeader);
        }
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

    for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var li = document.createElement('li');
      li.classList.add('post-item'); // Add a custom class for styling purposes

      // Check if the post has the category "Notes"
      if (result.categories.includes('Notes')) {
        // Display the post without the title
        var p = document.createElement('p');
        p.innerHTML = result.excerpt;
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

      // Check if the current date is different from the previous post's date
      if (result.date !== currentDate) {
        currentDate = result.date;

        // Add a date header
        var dateHeader = document.createElement('div');
        dateHeader.classList.add('date-header');
        var dateParagraph = document.createElement('p');
        dateParagraph.textContent = currentDate;
        dateHeader.appendChild(dateParagraph);
        postList.appendChild(dateHeader);

        // Add a separator element between date groups
        if (i > 0 && result.date !== results[i - 1].date) {
          var separator = document.createElement('hr');
          separator.classList.add('date-separator');
          postList.appendChild(separator);

          // Add the date of the previous group underneath the separator
          var previousDateHeader = document.createElement('div');
          previousDateHeader.classList.add('date-header');
          var previousDateParagraph = document.createElement('p');
          previousDateParagraph.textContent = currentDate;
          previousDateHeader.appendChild(previousDateParagraph);
          postList.appendChild(previousDateHeader);
        }
      }

      postList.appendChild(li);
    }
  }
}


   
   // Get the search query from the URL
  var searchQuery = new URLSearchParams(window.location.search).get('search');
  if (searchQuery) {
    searchInput.value = searchQuery;
    var results = search(searchQuery); // Perform search with the query
    renderResults(results, searchQuery); // Pass the results and query to render
  }

  // Event listener for input event on the searchInput element
  searchInput.addEventListener('input', function () {
    var query = searchInput.value;
    var results = search(query);
    renderResults(results, query); // Pass the results and query to render
  });
   
  // Initial render of all posts
  renderResults(posts);
})();
