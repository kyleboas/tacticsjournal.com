---
---


(function () {
  var searchInput = document.getElementById('search-input');
  var suggestionList = document.getElementById('suggestion-list');
  var postList = document.getElementById('post-list');

  var posts = [
    {% for post in site.posts %}
    {
      title: "{{ post.title | xml_escape }}",
      url: "{{ site.baseurl }}{{ post.url | xml_escape }}",
      excerpt: "{{ post.excerpt | strip_html | strip_newlines | escape }}",
      tags: [{% for tag in post.tags %}"{{ tag }}"{% unless forloop.last %}, {% endunless %}{% endfor %}],
      categories: [{% for category in post.categories %}"{{ category }}"{% unless forloop.last %}, {% endunless %}{% endfor %}]
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
        post.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        post.categories.some(category => category.toLowerCase().includes(query.toLowerCase()))
      ) {
        results.push(post);
      }
    }

    return results;
  }

  function renderResults(results) {
    postList.innerHTML = '';
    suggestionList.innerHTML = ''; // Clear previous suggestions

    if (results.length === 0 && searchInput.value.trim() !== '') {
      suggestionList.innerHTML = '<li>No results found.</li>'; // Show message only when there are no results and the search input is not empty
    } else {
      var suggestionsToRender = searchInput.value.trim() === '' ? [] : results.map(post => post.title);

      for (var i = 0; i < suggestionsToRender.length; i++) {
        var suggestion = suggestionsToRender[i];
        var li = document.createElement('li');
        li.innerHTML = suggestion;
        suggestionList.appendChild(li);
      }

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

  function highlightMatch(text, query) {
    // Add your highlighting logic here
    return text;
  }

  searchInput.addEventListener('input', function () {
    var query = searchInput.value;
    var results = search(query);
    renderResults(results);
  });

  // Initial render of all posts
  renderResults(posts);
})();

function autocomplete(inp, arr) {
  var currentFocus;

  inp.addEventListener("input", function(e) {
    var a, b, i, val = this.value;
    closeAllLists();

    if (!val) { return false; }
    currentFocus = -1;

    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    this.parentNode.appendChild(a);

    for (i = 0; i < arr.length; i++) {
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        b = document.createElement("DIV");
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        b.addEventListener("click", function(e) {
          inp.value = this.innerText;
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });

  inp.addEventListener("keydown", function(e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      currentFocus++;
      addActive(x);
    } else if (e.keyCode == 38) {
      currentFocus--;
      addActive(x);
    } else if (e.keyCode == 13) {
      e.preventDefault();
      if (currentFocus > -1) {
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}

var tagsAndCategories = getTagsAndCategories();

// Call the autocomplete function with the search input element and the tags and categories array
autocomplete(document.getElementById("search-input"), tagsAndCategories);

function getTagsAndCategories() {
  var tagsAndCategories = [];

  for (var i = 0; i < posts.length; i++) {
    var post = posts[i];
    tagsAndCategories = tagsAndCategories.concat(post.tags, post.categories);
  }

  return Array.from(new Set(tagsAndCategories));
}
