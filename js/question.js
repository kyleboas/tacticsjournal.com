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
