// Add this function to your existing script.js file
function submitQuestion() {
  // Get the entered question and guest name
  var question = document.getElementById('question').value;
  var guestName = document.getElementById('guestName').value || "Anonymous";

  // Example: Store the question in localStorage (consider more secure options)
  localStorage.setItem('submittedQuestion', question);
  localStorage.setItem('guestName', guestName);

  // You can redirect or perform further actions here
}

// Modify your existing script.js file to include this function
function displayQuestions() {
  // Retrieve submitted question and guest name from localStorage
  var question = localStorage.getItem('submittedQuestion');
  var guestName = localStorage.getItem('guestName');

  // Display the question in the questionList
  var questionList = document.getElementById('questionList');
  var listItem = document.createElement('li');
  listItem.textContent = `${guestName}: ${question}`;
  questionList.appendChild(listItem);

  // Clear localStorage after displaying the question
  localStorage.removeItem('submittedQuestion');
  localStorage.removeItem('guestName');
}
