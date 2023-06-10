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
    image.alt = 'Constructocat by https://github.com/jasoncostello';
    image.style.width = '100px';
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

function getCurrentPageUrl() {
    return window.location.href;
  }
     
function renderResults(results) {
  postList.innerHTML = '';

  var searchQuery = searchInput.value.trim();
  var countElement = document.getElementById('result-count');

  if (searchQuery === '') {
    countElement.innerHTML = 'Past 5 posts';
    noResultsMessage.style.display = 'none';

    // Filter out posts that match the current page's URL
    var filteredResults = results.filter(function (post) {
    return post.url.toLowerCase() !== getCurrentPageUrl().toLowerCase();
   });


    for (var i = 0; i < filteredResults.length; i++) {
      var result = filteredResults[i];
      var li = document.createElement('li');
      li.classList.add('post-item');
      var a = document.createElement('a');
      a.href = result.url;
      a.innerHTML = result.title;
      li.appendChild(a);
      var p = document.createElement('p');
      p.innerHTML = result.excerpt;
      li.appendChild(p);
      postList.appendChild(li);
    }
  } else if (results.length === 0) {
    countElement.innerHTML = 'No posts found';
    noResultsMessage.style.display = 'block'; // Show the message
  } else {
    var postsShown = results.length;
    var totalCount = posts.length;
    var countElement = document.getElementById('result-count');
    countElement.innerHTML = postsShown === 1 ? 'Past post' : 'Past ' + postsShown + ' posts';
    noResultsMessage.style.display = 'none';

    for (var i = 0; i < results.length; i++) {
      var result = results[i];
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

  // Initial render of the first 5 posts
  renderResults(posts.slice(0, 5));
})();
