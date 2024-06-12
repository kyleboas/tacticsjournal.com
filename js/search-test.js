---
---

(function () {
  var searchInput1 = document.getElementById('search-input1');
  var searchInput2 = document.getElementById('search-input2');
  var searchInput3 = document.getElementById('search-input3');
  var searchInput4 = document.getElementById('search-input4');
  var postList = document.getElementById('post-list');
  var noResultsMessage = document.getElementById('no-results-message');

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
          excerpt: "{{ post.excerpt | strip_html | strip_newlines | escape }}",
          date: "{{ post.date | date: "%d %B %Y" }}",
          tags: "{% for tag in post.tags %}{{ tag }}{% unless forloop.last %}, {% endunless %}{% endfor %}",
          categories: "{{ post.categories | xml_escape }}",
          content: "{{- post.content | replace: '"', '\"' | strip_newlines | strip -}}"
        }{% unless forloop.last %},{% endunless %}
      {% endunless %}
    {% endfor %}
  ];

  function search(query1, query2, query3, query4) {
    var results = [];

    // If all fields are empty, return all posts
    if ((!query1 || query1.trim() === '') && (!query2 || query2.trim() === '') && (!query3 || query3.trim() === '') && (!query4 || query4.trim() === '')) {
      return posts;
    }

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      var matchesQuery1 = query1 && (
        post.categories.toLowerCase().includes(query1.toLowerCase())
      );
      var matchesQuery2 = query2 && (
        post.title.toLowerCase().includes(query2.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query2.toLowerCase()) ||
        post.date.toLowerCase().includes(query2.toLowerCase())
      );
      var matchesQuery3 = query3 && (
        post.categories.toLowerCase().includes(query3.toLowerCase())
      );
      var matchesQuery4 = query4 && (
        post.title.toLowerCase().includes(query4.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(query4.toLowerCase()) ||
        post.date.toLowerCase().includes(query4.toLowerCase())
      );

      // If all queries have values, the post must match all
      if (query1 && query2 && query3 && query4) {
        if (matchesQuery1 && matchesQuery2 && matchesQuery3 && matchesQuery4) {
          var highlightedTitle = highlightMatch(post.title, query2);
          var highlightedExcerpt = highlightMatch(post.excerpt, query2);
          var highlightedDate = highlightMatch(post.date, query2);
          results.push({
            title: highlightedTitle,
            date: highlightedDate,
            url: post.url,
            excerpt: highlightedExcerpt,
            tags: post.tags,
            categories: post.categories
          });
        }
      // If only query1 and query3 have values, filter by category
      } else if (query1 && query3) {
        if (matchesQuery1 && matchesQuery3) {
          results.push(post);
        }
      // If only query2 and query4 have values, filter by title, excerpt, and date
      } else if (query2 && query4) {
        if (matchesQuery2 && matchesQuery4) {
          var highlightedTitle = highlightMatch(post.title, query4);
          var highlightedExcerpt = highlightMatch(post.excerpt, query4);
          var highlightedDate = highlightMatch(post.date, query4);
          results.push({
            title: highlightedTitle,
            date: highlightedDate,
            url: post.url,
            excerpt: highlightedExcerpt,
            tags: post.tags,
            categories: post.categories
          });
        }
      }
    }

    return results;
  }

  function highlightMatch(text, query) {
    if (!query) return text;
    var regex = new RegExp(query, 'gi');
    return text.replace(regex, function (match) {
      return '<span class="highlight">' + match + '</span>';
    });
  }

  function renderResults(results) {
    postList.innerHTML = '';

    var searchQuery1 = searchInput1.value.trim();
    var searchQuery2 = searchInput2.value.trim();
    var searchQuery3 = searchInput3.value.trim();
    var searchQuery4 = searchInput4.value.trim();
    var countElement = document.getElementById('result-count');

    if (searchQuery1 === '' && searchQuery2 === '' && searchQuery3 === '' && searchQuery4 === '') {
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
        a.href = result.url;
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

  function getCurrentPageUrl() {
    return window.location.href;
  }

  searchInput1.addEventListener('input', function () {
    var query1 = searchInput1.value;
    var query2 = searchInput2.value;
    var query3 = searchInput3.value;
    var query4 = searchInput4.value;
    var results = search(query1, query2, query3, query4);
    renderResults(results);
  });

  searchInput2.addEventListener('input', function () {
    var query1 = searchInput1.value;
    var query2 = searchInput2.value;
    var query3 = searchInput3.value;
    var query4 = searchInput4.value;
    var results = search(query1, query2, query3, query4);
    renderResults(results);
  });

  searchInput3.addEventListener('input', function () {
    var query1 = searchInput1.value;
    var query2 = searchInput2.value;
    var query3 = searchInput3.value;
    var query4 = searchInput4.value;
    var results = search(query1, query2, query3, query4);
    renderResults(results);
  });

  searchInput4.addEventListener('input', function () {
    var query1 = searchInput1.value;
    var query2 = searchInput2.value;
    var query3 = searchInput3.value;
    var query4 = searchInput4.value;
    var results = search(query1, query2, query3, query4);
    renderResults(results);
  });

  // Initial render of the first 15 posts
  renderResults(posts.slice(0, 15));
})();
