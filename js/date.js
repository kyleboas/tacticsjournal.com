---
---

document.addEventListener('DOMContentLoaded', function() {
    var currentDate = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    var dayOfWeek = days[currentDate.getDay()];
    var day = currentDate.getDate();
    var month = months[currentDate.getMonth()];
    var year = currentDate.getFullYear();
    
    var dateString = dayOfWeek + ', ' + day + ' ' + month + ' ' + year;
    
    // Update the element with id="date" with the current date
    document.getElementById('date').textContent = dateString;
});
