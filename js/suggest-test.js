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
  {% endfor %}
];

// Getting all required elements
const searchInputContainer = document.querySelector(".searchInput");
const searchInputs = searchInputContainer.querySelectorAll("input");
const resultBox = searchInputContainer.querySelector(".resultBox");

// Function to handle suggestion selection
function select(element, input) {
  let selectedSuggestion = element.textContent;
  input.value = selectedSuggestion;
  resultBox.innerHTML = ""; // Clear the suggestions

  // Trigger the 'input' event to perform the search
  var inputEvent = new Event('input');
  input.dispatchEvent(inputEvent);

  searchInputContainer.classList.remove('active');
  resultBox.innerHTML = "";
}

// Event listener for suggestion item clicks
resultBox.addEventListener("click", function(e) {
  if (e.target && e.target.matches("li.suggestion-item")) {
    let activeInput = document.querySelector(".searchInput input:focus");
    select(e.target, activeInput);
  }
});

// Event listener for input events on all input fields
searchInputs.forEach(input => {
  input.addEventListener("input", (e) => {
    let userData = e.target.value.trim(); // User entered data with leading/trailing whitespace removed
    let emptyArray = [];
    if (userData) {
      emptyArray = suggestions.filter((data) => {
        return data.toLowerCase().includes(userData.toLowerCase());
      });

      if (emptyArray.length > 0) {
        searchInputContainer.classList.add("active");
        let listData = emptyArray.map((data) => "<li class='suggestion-item'>" + data + "</li>").join("");
        resultBox.innerHTML = listData;
      } else {
        searchInputContainer.classList.remove('active');
        resultBox.innerHTML = ""; // Clear the suggestions
      }
    } else {
      searchInputContainer.classList.remove('active');
      resultBox.innerHTML = ""; // Clear the suggestions
    }
  });
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