---
layout: default
permalink: /preview/
---

<style>
    form {
        display: flex;
        flex-direction: column;
        font-family: Helvetica, sans-serif;
        padding-top: 10px;
        padding-bottom: 20px;
    }

    .form-container {
        display: flex;
        overflow: hidden;
    }

    input[type="email"] {
        flex: 1;
        padding: 5px;
        padding-left: 0px;
        font-size: 13px;
        border: none;
        outline: none;
        max-width: 150px;
    }

    button#subscribeButton {
    display: none;
    background-color: transparent;
    color: #000000;
    font-weight: bold;
    cursor: pointer;
    outline: none;
    font-family: Arial, serif;
    border: none;
    opacity: 0;
    transform: translateY(5px);
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }

    button#subscribeButton.show {
    display: block;
    opacity: 1;
    transform: translateY(0);
    }
    .subscribe-section-header {
        font-weight: bold;
        font-size: 13px;
    }
</style>

<div class="subscribe-section">
   <div class="subscribe-section-header">Subscribe</div>
<form action="https://buttondown.com/api/emails/embed-subscribe/TacticsJournal" 
      method="post" 
      target="_blank">

    <div class="form-container">
        <input type="email" name="email" id="email" placeholder="Enter your email..." required>

        <button type="submit" id="subscribeButton">
            <svg width="15" height="15" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 L40 80 L90 20" stroke="black" stroke-width="15" fill="none"/>
            </svg>
        </button>
    </div>
</form>
</div>

<script>
    document.getElementById("email").addEventListener("input", function() {
    let button = document.getElementById("subscribeButton");
    if (this.value.trim() !== "") {
        button.classList.add("show");
    } else {
        button.classList.remove("show");
    }
});
</script>