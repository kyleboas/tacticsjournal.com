---
---
    

// Array of suggestions
let suggestions = [
{% assign all_tags = "" %}
{% assign all_categories = "" %}

{% for post in site.posts %}
  {% assign post_tags = post.tags | join: '", "' %}
  {% assign all_tags = all_tags | append: '", "' | append: post_tags %}

  {% assign post_categories = post.categories | join: '", "' %}
  {% assign all_categories = all_categories | append: '", "' | append: post_categories %}
{% endfor %}

{% assign unique_tags = all_tags | split: '", "' | uniq %}
{% assign unique_categories = all_categories | split: '", "' | uniq %}

{% for tag in unique_tags %}
  "{{ tag }}"{% unless forloop.last %},{% endunless %}
{% endfor %}

{% for category in unique_categories %}
  "{{ category }}"{% unless forloop.last %},{% endunless %}
{% endfor %}
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
  
  var searchInput = document.getElementById("search-input");
  searchInput.value = selectedSuggestion; // Set the value of the search input field in search.js

  // Trigger the 'input' event to perform the search
  var inputEvent = new InputEvent('input', { bubbles: true });
  searchInput.dispatchEvent(inputEvent);

  searchInput.classList.remove('active');
  resultBox.innerHTML = "";
}



// Event listener for input event on the input field
input.addEventListener("input", (e) => {
  let userData = e.target.value.trim(); // User entered data with leading/trailing whitespace removed
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      return data.toLowerCase().startsWith(userData.toLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      return "<li class='suggestion-item'>" + data + "</li>";
    });
    searchInput.classList.add("active");
    showSuggestions(emptyArray);
    let allList = resultBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchInput.classList.remove("active");
    resultBox.innerHTML = ""; // Clear the suggestions
  }
});


// Function to display the suggestions
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    listData = "<li class='suggestion-item'>" + userValue + "</li>";
  } else {
    let slicedArray = list.slice(0, 5); // Slice the array to include only the first 5 elements
    listData = slicedArray.map((data) => "<li class='suggestion-item'>" + data + "</li>").join("");
  }
  resultBox.innerHTML = listData;
}
