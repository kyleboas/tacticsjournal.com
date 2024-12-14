---
title: Confirmed
layout: page
---

You have successfully confirmed your subscription. You will receive the next post in your inbox. All that I ask of you now is to help me get the word out. If you like my work, share it with ten of your friends.

<script>
function copyToClipboard() {
  const url = document.URL;
}
</script>
  <a href="mailto:?subject=Tactics Journal&body={{ site.url }}">Share via email</a>
  <a href="#" id="copy-link">Copy link</a>

<script>
  var copyLink = document.getElementById("copy-link");
  
  if (!copyLink) {
    console.error("Unable to find link element with ID 'copy-link'");
  } else {
    copyLink.addEventListener("click", function(event) {
      event.preventDefault();
      console.log("Link clicked");
      navigator.clipboard.writeText("{{ site.url }}");
      copyLink.innerText = "Link copied!";
      
      setTimeout(function() {
        copyLink.innerText = "Copy link";
      }, 3000);
    });
  }
</script>

</div>