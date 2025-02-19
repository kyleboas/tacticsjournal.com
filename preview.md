---
layout: default
permalink: /preview/
---

<form action="https://buttondown.com/api/emails/embed-subscribe/TacticsJournal" 
      method="post" 
      target="_blank" 
      style="display: flex; flex-direction: column; font-family: Helvetica, sans-serif; padding-top: 10px; padding-bottom: 20px;">

  <div style="display: flex; overflow: hidden;">
    <input type="email" name="email" id="email" placeholder="Enter your email..." required 
           style="flex: 1; padding: 10px; font-size: 14px; border: none; outline: none; max-width: 150px;">
    
    <button type="submit" id="subscribeButton" style="display: none; background-color: #f5ec00; color: #000000; font-weight: bold; cursor: pointer; outline: none; font-family: Arial, serif;">
      Subscribe
    </button>
  </div>
</form>

<script>
  document.getElementById("email").addEventListener("input", function() {
    let button = document.getElementById("subscribeButton");
    if (this.value.trim() !== "") {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }
  });
</script>