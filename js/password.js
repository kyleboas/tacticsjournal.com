function associatePassword() {
  // Get the entered password
  var password = document.getElementById('password').value;

  // Example: Associate password with a name (you may use a more sophisticated method)
  var guestName = "John Doe"; 

  // Example: Store the association in localStorage (consider more secure options)
  localStorage.setItem('guestPassword', password);
  localStorage.setItem('guestName', guestName);

  // You can redirect or perform further actions here
}
