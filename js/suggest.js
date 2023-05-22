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
  searchInput.value = selectedSuggestion; // Set the value of the search input field in search.js
  searchInput.dispatchEvent(new Event('input')); // Trigger the 'input' event to perform the search
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
