---
title: About
layout: page
---

<form
  action="https://buttondown.com/api/emails/embed-subscribe/TacticsJournal"
  method="post"
  target="popupwindow"
  onsubmit="window.open('https://buttondown.com/TacticsJournal', 'popupwindow')"
  class="embeddable-buttondown-form"
>
  <label for="bd-email">Subscribe</label>
  <input type="email" name="email" id="bd-email" placeholder="me@email.com"/>
  <input type="submit" value="Sign Up" />
</form>

<div id="poll-banner">
  <span id="vote-count">0</span> people like this post!
  <button id="upvote-button">Upvote 👍</button>
</div>

<script>
  const API_URL = "https://poll-api-seven.vercel.app/api/vote"; // Your Vercel API URL

  document.addEventListener("DOMContentLoaded", async function () {
    const voteCountSpan = document.getElementById("vote-count");
    const upvoteButton = document.getElementById("upvote-button");

    // Fetch the initial vote count
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      voteCountSpan.textContent = data.votes;
    } catch (error) {
      console.error("Error fetching vote count:", error);
    }

    // Handle the upvote button click
    upvoteButton.addEventListener("click", async function () {
      try {
        const response = await fetch(API_URL, { method: "POST" });
        const data = await response.json();
        voteCountSpan.textContent = data.votes;
      } catch (error) {
        console.error("Error submitting vote:", error);
      }
    });
  });
</script>


