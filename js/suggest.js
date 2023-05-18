---
---
    

// Array of suggestions
let suggestions = [
  "Channel",
  "CodingLab",
  "CodingNepal",
  "YouTube",
  "YouTuber",
  "YouTube Channel",
  "Blogger",
  "Bollywood",
  "Vlogger",
  "Vehicles",
  "Facebook",
  "Freelancer",
  "Facebook Page",
  "Designer",
  "Developer",
  "Web Designer",
  "Web Developer",
  "Login Form in HTML & CSS",
  "How to learn HTML & CSS",
  "How to learn JavaScript",
  "How to become a Freelancer",
  "How to become a Web Designer",
  "How to start a Gaming Channel",
  "How to start a YouTube Channel",
  "What does HTML stand for?",
  "What does CSS stand for?",
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
  input.value = selectedSuggestion; // Autocomplete the search input field
  searchInput.classList.remove("active"); // Hide autocomplete box
}

// Event listener for keyup event on the input field
input.onkeyup = (e) => {
  let userData = e.target.value; // User entered data
  let emptyArray = [];
  if (userData) {
    emptyArray = suggestions.filter((data) => {
      // Filtering array value and user characters to lowercase and return only those words which start with user entered chars
      return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
    });
    emptyArray = emptyArray.map((data) => {
      // Passing return data inside li tag
      return (data = "<li>" + data + "</li>");
    });
    searchInput.classList.add("active"); // Show autocomplete box
    showSuggestions(emptyArray);
    let allList = resultBox.querySelectorAll("li");
    for (let i = 0; i < allList.length; i++) {
      // Adding onclick attribute in all li tags
      allList[i].setAttribute("onclick", "select(this)");
    }
  } else {
    searchInput.classList.remove("active"); // Hide autocomplete box
  }
};

// Function to display the suggestions
function showSuggestions(list) {
  let listData;
  if (!list.length) {
    userValue = inputBox.value;
    listData = "<li>" + userValue + "</li>";
  } else {
    listData = list.join("");
  }
  resultBox.innerHTML = listData;
}
