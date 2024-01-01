function submitQuestion() {
  var question = document.getElementById('question').value;
  var guestName = document.getElementById('guestName').value || "Anonymous";

  localStorage.setItem('submittedQuestion', question);
  localStorage.setItem('guestName', guestName);

  displayQuestions();

  localStorage.removeItem('submittedQuestion');
  localStorage.removeItem('guestName');
}

function displayQuestions() {
  var question = localStorage.getItem('submittedQuestion');
  var guestName = localStorage.getItem('guestName');

  var questionList = document.getElementById('questionList');
  var listItem = document.createElement('li');
  listItem.textContent = `${guestName}: ${question}`;
  questionList.appendChild(listItem);
}

function submitReply() {
  var reply = document.getElementById('reply').value;
  var guestName = localStorage.getItem('guestName');

  var replyList = document.getElementById('replyList');
  var listItem = document.createElement('li');
  listItem.textContent = `${guestName}: ${reply}`;
  replyList.appendChild(listItem);

  localStorage.removeItem('reply');
}

function displayReplies() {
  var reply = localStorage.getItem('reply');
  var guestName = localStorage.getItem('guestName');

  var replyList = document.getElementById('replyList');
  var listItem = document.createElement('li');
  listItem.textContent = `${guestName}: ${reply}`;
  replyList.appendChild(listItem);

  localStorage.removeItem('reply');
}

function enableReplyForm() {
  var password = localStorage.getItem('guestPassword');
  if (password) {
    document.getElementById('replyForm').style.display = 'block';
  }
}

function associatePassword() {
  var password = document.getElementById('password').value;
  var guestName = "John Doe";

  localStorage.setItem('guestPassword', password);
  localStorage.setItem('guestName', guestName);
}
