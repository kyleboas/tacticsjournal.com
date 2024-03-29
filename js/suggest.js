---
---
    

// Array of suggestions
let suggestions = [
{% assign all_tags = "" %}
{% for post in site.posts %}
  {% assign post_tags = post.tags | join: '", "' %}
  {% assign all_tags = all_tags | append: '", "' | append: post_tags %}
{% endfor %}
{% assign unique_tags = all_tags | split: '", "' | uniq %}
{% for tag in unique_tags %}
  "{{ tag }}"{% unless forloop.last %},{% endunless %}
{% endfor %},

{% assign all_categories = "" %}
{% for post in site.posts %}
  {% assign post_categories = post.categories | join: '", "' %}
  {% assign all_categories = all_categories | append: '", "' | append: post_categories %}
{% endfor %}
{% assign unique_categories = all_categories | split: '", "' | uniq %}
{% for category in unique_categories %}
  "{{ category }}"{% unless forloop.last %},{% endunless %}
{% endfor %},
];

// Getting all required elements
const searchInput = document.querySelector(".searchInput");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// Function to handle suggestion selection
function select(element) {
  let selectedSuggestion = element.textContent;
  input.value = selectedSuggestion;
  resultBox.innerHTML = ""; // Clear the suggestions
  
  // Set the value of the search input field in search.js
  var searchInput = document.getElementById("search-input");
  searchInput.value = selectedSuggestion;

  // Trigger the 'input' event to perform the search
  var inputEvent = new Event('input');
  searchInput.dispatchEvent(inputEvent);

  searchInput.classList.remove('active');
  resultBox.innerHTML = "";
}

// Event listener for suggestion item clicks
resultBox.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li.suggestion-item")) {
    select(e.target);
  }
});

// Event listener for input event on the input field
input.addEventListener("input", (e) => {
  let userData = e.target.value.trim(); // User entered data with leading/trailing whitespace removed
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLowerCase().includes(userData.toLowerCase());
    });

    if (emptyArray.length > 0) {
      searchInput.classList.add("active");
      let listData = emptyArray.map((data) => "<li class='suggestion-item'>" + data + "</li>").join("");
      resultBox.innerHTML = listData;
    } else {
      searchInput.classList.remove("active");
      resultBox.innerHTML = ""; // Clear the suggestions
    }
  } else {
    searchInput.classList.remove("active");
    resultBox.innerHTML = ""; // Clear the suggestions
  }
});

// Sort the suggestions alphabetically
suggestions.sort();

// Function to display the suggestions
function showSuggestions() {
  // Clear any previous suggestions
  resultBox.innerHTML = "";

  // Append only 5 sorted suggestions to the resultBox
  for (let i = 0; i < 5 && i < suggestions.length; i++) {
    const suggestionItem = document.createElement("li");
    suggestionItem.classList.add("suggestion-item");
    suggestionItem.textContent = suggestions[i];
    resultBox.appendChild(suggestionItem);
  }
}

// Initial call to display suggestions
showSuggestions();