---
---


document.addEventListener('DOMContentLoaded', function () {
  var searchInput = document.getElementById('search-input');
  var suggestionList = document.getElementById('suggestion-list');
  var postList = document.getElementById('post-list');
  var posts = []; // Replace this with your actual array of posts

  // Function to render the posts
  function renderPosts(posts) {
    postList.innerHTML = '';
    if (posts.length === 0) {
      postList.innerHTML = '<li class="post-item">No posts found.</li>';
    } else {
      posts.forEach(function (post) {
        postList.innerHTML += '<li class="post-item">' + post.title + '</li>';
      });
    }
  }

  // Function to filter posts based on search
  function filterPosts(searchText) {
    var filteredPosts = posts.filter(function (post) {
      // Perform your search logic here, e.g., title, excerpt, tags, and categories matching
      return (
        post.title.toLowerCase().includes(searchText.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchText.toLowerCase()) ||
        post.tags.includes(searchText.toLowerCase()) ||
        post.categories.includes(searchText.toLowerCase())
      );
    });
    renderPosts(filteredPosts);
  }

  // Function to display suggestions based on search
  function displaySuggestions(searchText) {
    var suggestions = [];
    posts.forEach(function (post) {
      if (
        post.title.toLowerCase().startsWith(searchText.toLowerCase()) &&
        suggestions.length < 5
      ) {
        suggestions.push(post.title);
      }
      post.tags.forEach(function (tag) {
        if (
          tag.toLowerCase().startsWith(searchText.toLowerCase()) &&
          suggestions.indexOf(tag) === -1 &&
          suggestions.length < 5
        ) {
          suggestions.push(tag);
        }
      });
      post.categories.forEach(function (category) {
        if (
          category.toLowerCase().startsWith(searchText.toLowerCase()) &&
          suggestions.indexOf(category) === -1 &&
          suggestions.length < 5
        ) {
          suggestions.push(category);
        }
      });
    });

    suggestionList.innerHTML = '';
    suggestions.forEach(function (suggestion) {
      suggestionList.innerHTML +=
        '<li onclick="autocompleteSearch(\'' +
        suggestion +
        '\')" class="suggestion-item">' +
        suggestion +
        '</li>';
    });
  }

  // Function to autocomplete search field
  function autocompleteSearch(text) {
    searchInput.value = text;
    filterPosts(text);
    suggestionList.innerHTML = '';
  }

  // Event listeners
  searchInput.addEventListener('input', function () {
    var searchText = searchInput.value.trim();
    if (searchText.length === 0) {
      renderPosts(posts);
      suggestionList.innerHTML = '';
    } else {
      filterPosts(searchText);
      displaySuggestions(searchText);
    }
  });

  // Initial render of all posts
  renderPosts(posts);
});
