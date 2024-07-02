---
---

(function () {
  var searchInputContainer = document.getElementById('search-criteria-container');
  var searchInput = document.getElementById('search-input');
  var postList = document.getElementById('post-list');
  var noResultsMessage = document.getElementById('no-results-message');
  var tags = [];

  if (!noResultsMessage) {
    noResultsMessage = document.createElement('div');
    noResultsMessage.id = 'no-results-message';

    var imageLink = document.createElement('a');
    imageLink.href = '{{ site.baseurl }}/';
    var image = document.createElement('img');
    image.src = '{{ site.baseurl }}/assets/C689B127-879F-4B0E-9D00-EDC0D8410697.jpeg';
    image.style.width = '100px';
    imageLink.appendChild(image);
    noResultsMessage.appendChild(imageLink);

    noResultsMessage.style.display = 'none'; // Initially hide the message
    postList.parentNode.insertBefore(noResultsMessage, postList); // Insert the message above the post-list
  }

  var posts = [
    {% for post in site.posts %}
      {% unless post.categories contains 'Notes' %}
        {
          title: "{{ post.title | xml_escape }}",
          url: "{{ site.baseurl }}{{ post.url | xml_escape }}",
          link: "{{ post.link | xml_escape }}", // Add the link from front matter
          excerpt: "{{ post.excerpt | strip_html | strip_newlines | escape }}",
          date: "{{ post.date | date: "%d %B %Y" }}",
          tags: "{% for tag in post.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}",
          categories: "{{ post.categories | xml_escape }}",
          content: "{{- post.content | replace: '"', '\"' | strip_newlines | strip -}}"
        }{% unless forloop.last %},{% endunless %}
      {% endunless %}
    {% endfor %}
  ];

  function parseDate(query) {
    var dateParts = query.split('-');
    if (dateParts.length === 3) {
      return new Date(dateParts[0], dateParts[1] - 1, dateParts[2]); // year, month (0-based), day
    }
    return null;
  }

  function search(queries) {
    var results = [];

    if (queries.length === 0) {
      return posts; // Return all posts if no query is provided or if it's blank
    }

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var match = queries.every(function(query) {
        var dateMatch = false;
        if (query.includes('date:')) {
          var dateQuery = query.replace('date:', '').trim();
          var queryDate = parseDate(dateQuery);
          if (queryDate) {
            var postDate = new Date(post.date);
            dateMatch = postDate.toDateString() === queryDate.toDateString();
          }
        }
        return dateMatch ||
               post.title.toLowerCase().includes(query.toLowerCase()) ||
               post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
               post.tags.toLowerCase().includes(query.toLowerCase()) || // Add search in tags
               post.categories.toLowerCase().includes(query.toLowerCase()); // Add search in categories
      });

      if (match) {
        var highlightedTitle = highlightMatch(post.title, queries);
        var highlightedExcerpt = highlightMatch(post.excerpt, queries);
        results.push({
          title: highlightedTitle,
          date: post.date,
          url: post.url,
          link: post.link, // Include the link in the results
          excerpt: highlightedExcerpt,
          tags: post.tags,
          categories: post.categories
        });
      }
    }

    return results;
  }

  function highlightMatch(text, queries) {
    queries.forEach(function(query) {
      var regex = new RegExp(query, 'gi');
      text = text.replace(regex, function (match) {
        return '<span class="highlight">' + match + '</span>';
      });
    });
    return text;
  }

  function getCurrentPageUrl() {
    return window.location.href;
  }

  function renderResults(results) {
    postList.innerHTML = '';

    var searchQuery = searchInput.value.trim();
    var countElement = document.getElementById('result-count');

    if (tags.length === 0) {
      countElement.innerHTML = 'Last 15 posts';
      noResultsMessage.style.display = 'none';

      // Filter out posts that match the current page's URL
      var filteredResults = results.filter(function (post) {
        return post.url.toLowerCase() !== getCurrentPageUrl().toLowerCase();
      });

      // Show only the first 15 posts
      var slicedResults = filteredResults.slice(0, 15);

      for (var i = 0; i < slicedResults.length; i++) {
        var result = slicedResults[i];
        var li = document.createElement('li');
        li.classList.add('post-item');

        var a = document.createElement('a');
        a.href = result.link ? result.link : result.url; // Use link if it exists
        a.target = '_blank'; // Open link in a new tab
        a.innerHTML = result.title;
        a.classList.add('long-title');
        li.appendChild(a);

        var dateElement = document.createElement('p');
        dateElement.classList.add('post-date');
        dateElement.innerHTML = result.date;
        li.appendChild(dateElement);

        var p = document.createElement('p');
        if (i === 0) {
          p.innerHTML = posts[0].content; // Display full content for the first post
        } else {
          p.innerHTML = result.excerpt; // Display excerpt for other posts
        }
        li.appendChild(p);

        postList.appendChild(li);
      }
    } else if (results.length === 0) {
      countElement.innerHTML = 'No posts found';
      noResultsMessage.style.display = 'block';
    } else {
      var postsShown = results.length;
      var totalCount = posts.length;
      countElement.innerHTML = postsShown + ' posts found';
      noResultsMessage.style.display = 'none';

      for (var i = 0; i < results.length; i++) {
      var result = results[i];
      var li = document.createElement('li');
      li.classList.add('post-item');

      var a = document.createElement('a');
      a.href = result.url;
      a.innerHTML = result.title;
      a.classList.add('long-title');
      li.appendChild(a);

        var dateElement = document.createElement('p');
        dateElement.classList.add('post-date');
        dateElement.innerHTML = result.date;
        li.appendChild(dateElement);

        var p = document.createElement('p');
        p.innerHTML = result.excerpt;
        li.appendChild(p);

        postList.appendChild(li);
      }
    }
  }

  function createTagElement(query) {
    var tag = document.createElement('div');
    tag.classList.add('tag');
    tag.textContent = query;

    var removeButton = document.createElement('span');
    removeButton.textContent = '×';
    removeButton.classList.add('remove-tag');
    removeButton.onclick = function () {
      var index = tags.indexOf(query);
      if (index > -1) {
        tags.splice(index, 1);
        searchInputContainer.removeChild(tag);
        renderResults(search(tags));
      }
    };

    tag.appendChild(removeButton);
    return tag;
  }

  function addTag(query) {
    if (query && !tags.includes(query)) {
      tags.push(query);
      var tagElement = createTagElement(query);
      searchInputContainer.insertBefore(tagElement, searchInput);
    }
    searchInput.value = '';
    renderResults(search(tags));
  }

  // Handle Enter key to add a new tag
  searchInput.addEventListener('keydown', function (event) {
    if (event.key === 'Enter' && searchInput.value.trim() !== '') {
      event.preventDefault();
      addTag(searchInput.value.trim());
    }
  });

  // Filter results as the user types
  searchInput.addEventListener('input', function () {
    var inputText = searchInput.value.trim();
    var tempTags = inputText ? tags.concat([inputText]) : tags;
    renderResults(search(tempTags));
  });

  // Handle suggestion clicks
  document.addEventListener('click', function(event) {
    if (event.target.classList.contains('suggestion-item')) {
      event.preventDefault();
      var suggestionText = event.target.textContent;
      addTag(suggestionText);
    }
  });

  // Initial render of the first 15 posts
  renderResults(posts.slice(0, 15));
})();