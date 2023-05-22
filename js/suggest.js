(function () {
  var searchInput = document.getElementById('search-input');
  var suggestionList = document.getElementById('suggestion-list');

  var posts = [
    {% for post in site.posts %}
      {
        title: "{{ post.title | xml_escape }}",
        url: "{{ site.baseurl }}{{ post.url | xml_escape }}"
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  function getSuggestions(query) {
    if (!query || query.trim() === '') {
      return [];
    }

    var lowerCaseQuery = query.toLowerCase();
    var suggestions = posts
      .filter(function (post) {
        return post.title.toLowerCase().includes(lowerCaseQuery);
      })
      .map(function (post) {
        return post.title;
      });

    return suggestions;
  }

  function showSuggestions() {
    var query = searchInput.value;
    var suggestions = getSuggestions(query);
    var listData = '';

    if (!suggestions.length) {
      suggestionList.innerHTML = '';
      return;
    }

    listData = suggestions
      .map(function (data) {
        return "<li class='suggestion-item'>" + data + '</li>';
      })
      .join('');

    suggestionList.innerHTML = listData;
  }

  searchInput.addEventListener('input', showSuggestions);
})();
