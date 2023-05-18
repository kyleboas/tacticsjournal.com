---
---

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
    "Vechiles",
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
    "How to became Freelancer",
    "How to became Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];

// getting all required elements
const searchInput = document.querySelector("#search-input");
const input = searchInput.querySelector("input");
const resultBox = searchInput.querySelector(".resultBox");
const icon = searchInput.querySelector(".icon");
let linkTag = searchInput.querySelector("a");
let webLink;

// if user presses any key and releases
input.onkeyup = (e) => {
    let userData = e.target.value; // user entered data
    let emptyArray = [];
    if (userData) {
        emptyArray = suggestions.filter((data) =>
            data.toLowerCase().startsWith(userData.toLowerCase())
        );
        emptyArray = emptyArray.map(
            (data) => `<li>${data}</li>`
        );
        searchInput.classList.add("active"); // show autocomplete box
        showSuggestions(emptyArray);
        let allList = resultBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }
    } else {
        searchInput.classList.remove("active"); // hide autocomplete box
    }
};

function showSuggestions(list) {
    let listData;
    if (!list.length) {
        listData = `<li>${input.value}</li>`;
    } else {
        listData = list.join("");
    }
    resultBox.innerHTML = listData;
}
