---
layout: default
permalink: /preview/
---

<div>
  <form id="passwordForm">
    <label for="password">Enter Password:</label>
    <input type="password" id="password" required>
    <button type="button" onclick="associatePassword()">Submit</button>
  </form>
</div>

<!-- Add this inside the <div> in your existing HTML file -->
<div>
  <form id="questionForm">
    <label for="question">Ask a Question:</label>
    <textarea id="question" rows="4" cols="50" required></textarea>
    <br>
    <label for="guestName">Your Name (optional):</label>
    <input type="text" id="guestName">
    <br>
    <button type="button" onclick="submitQuestion()">Submit</button>
  </form>
</div>

<!-- Add this section after the existing form in your HTML file -->
<div>
  <h2>Submitted Questions:</h2>
  <ul id="questionList"></ul>
</div>


<script src="/js/password.js"></script>
<script src="/js/question.js"></script>
