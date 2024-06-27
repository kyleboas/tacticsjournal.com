---
---

(function () {
  var searchInput = document.getElementById('search-input');
  var searchTags1Input = document.getElementById('search-tags-1');
  var searchTags2Input = document.getElementById('search-tags-2');
  var searchCategoriesInput = document.getElementById('search-categories');
  var postList = document.getElementById('post-list');
  var initialPosts = document.querySelectorAll('.initial-post');
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

  function search(query, tags1, tags2, categories) {
    var results = [];

    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];

      var match = true;

      if (query && query.trim() !== '') {
        match &= post.title.toLowerCase().includes(query.toLowerCase()) ||
                 post.excerpt.toLowerCase().includes(query.toLowerCase()) ||
                 post.date.toLowerCase().includes(query.toLowerCase());
      }

      if (tags1 && tags1.trim() !== '') {
        match &= post.tags.toLowerCase().includes(tags1.toLowerCase());
      }

      if (tags2 && tags2.trim() !== '') {
        match &= post.tags.toLowerCase().includes(tags2.toLowerCase());
      }

      if (categories && categories.trim() !== '') {
        match &= post.categories.toLowerCase().includes(categories.toLowerCase());
      }

      if (match) {
        var highlightedTitle = highlightMatch(post.title, query);
        var highlightedExcerpt = highlightMatch(post.excerpt, query);
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

  function highlightMatch(text, query) {
    if (!query) return text;
    var regex = new RegExp(query, 'gi');
    return text.replace(regex, function (match) {
      return '<span class="highlight">' + match + '</span>';
    });
  }

  function renderResults(results) {
    postList.innerHTML = ''; // Clear the post-list content

    var searchQuery = searchInput.value.trim();
    var countElement = document.getElementById('result-count');

    if (searchQuery === '' && searchTags1Input.value.trim() === '' &&
        searchTags2Input.value.trim() === '' && searchCategoriesInput.value.trim() === '') {
      countElement.innerHTML = 'Last 15 posts';
      noResultsMessage.style.display = 'none';

      // Show initial posts if no search query
      initialPosts.forEach(function(post) {
        post.style.display = 'block';
        postList.appendChild(post);
      });
    } else if (results.length === 0) {
      countElement.innerHTML = 'No posts found';
      noResultsMessage.style.display = 'block';
    } else {
      countElement.innerHTML = results.length + ' posts found';
      noResultsMessage.style.display = 'none';

      // Hide initial posts
      initialPosts.forEach(function(post) {
        post.style.display = 'none';
      });

      for (var i = 0; i < results.length; i++) {
        var result = results[i];
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
        p.innerHTML = result.excerpt;
        li.appendChild(p);

        postList.appendChild(li);
      }
    }
  }

  // Attach event listeners to all search fields
  var searchFields = [searchInput, searchTags1Input, searchTags2Input, searchCategoriesInput];
  searchFields.forEach(function(field) {
    field.addEventListener('input', function () {
      var query = searchInput.value;
      var tags1 = searchTags1Input.value;
      var tags2 = searchTags2Input.value;
      var categories = searchCategoriesInput.value;
      var results = search(query, tags1, tags2, categories);
      renderResults(results);
    });
  });

  // Initial render of the first 15 posts
  initialPosts.forEach(function(post) {
    post.style.display = 'block';
    postList.appendChild(post);
  });
})();