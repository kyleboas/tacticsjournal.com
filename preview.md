---
layout: default
permalink: /preview/
---

<div>
  <h2>Submitted Questions:</h2>
  <ul id="questionList"></ul>
</div>

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

<div id="replyForm" style="display: none;">
  <form>
    <label for="reply">Reply:</label>
    <textarea id="reply" rows="4" cols="50" required></textarea>
    <br>
    <button type="button" onclick="submitReply()">Submit Reply</button>
  </form>
</div>

<div>
  <form id="passwordForm">
    <label for="password">Enter Password:</label>
    <input type="password" id="password" required>
    <button type="button" onclick="associatePassword()">Submit</button>
  </form>
</div>

<script src="/js/question.js"></script>
