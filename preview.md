---
layout: default
permalink: /preview/
---

    <style>
        #cookie-notice { 
            font-size: 1rem; 
            padding: 0.5rem 1rem; 
            display: none; 
            text-align: left; 
            position: fixed; 
            bottom: 0; 
            font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
            background: rgb(238, 238, 238); 
            color: #000; 
            display: flex;
            justify-content: left;
            left: 0;
            padding-top: 20px;
            padding-bottom: 20px;
        }
        #cookie-notice span { 
            margin-right: 0.5rem;
            font-size: 10px;
            width: 60%;
            display: inline-block;
        }
        #cookie-notice a { 
            display: block; 
            cursor: pointer; 
        }
        #cookie-notice-accept { 
            background-color: #5dbea3;
            border-radius: 8px;
            border-style: none;
            box-sizing: border-box;
            color: #000;
            cursor: pointer;
            display: inline-block;
            font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
            font-size: 14px;
            font-weight: 500;
            height: 40px;
            line-height: 20px;
            list-style: none;
            margin: 0;
            outline: none;
            padding: 10px 16px;
            position: fixed;
            right: 20px;
            bottom: 22px;
            text-align: center;
            text-decoration: none;
            transition: color 100ms;
            vertical-align: baseline;
            user-select: none;
            -webkit-user-select: none;
            touch-action: manipulation;
        } 
        @media (max-width: 767px) {
            #cookie-notice { 
                flex-direction: column;
            }
            #cookie-notice span { 
                margin-right: 0; 
                margin-bottom: 1rem;
            }
        }
    </style>
</head>
<body>
    <div id="cookie-notice">
        <span>This site uses cookies. By continuing to use this website, you agree to their use. <a href="https://tacticsjournal.com/privacy/" >Privacy Policy</a></span>
        <a id="cookie-notice-accept" class="btn btn-primary btn-sm .button">Accept</a>
    </div>

    <!-- Your existing content here -->
    
    <script>
        function createCookie(name, value, days) {
            var expires = "";
            if (days) { 
                var date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + value + expires + "; path=/";
            console.log("Cookie created: " + name + "=" + value + expires);
        }

        function readCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        }

        document.addEventListener("DOMContentLoaded", function() {
            const cookieNotice = document.getElementById('cookie-notice');
            const cookieValue = readCookie('cookie-notice-dismissed');
            console.log("Cookie read value:", cookieValue);
            
            if (cookieValue !== 'true') {
                cookieNotice.style.display = 'block';
            } else {
                console.log("Cookie read: cookie-notice-dismissed=true");
                cookieNotice.style.display = 'none';
            }
        });

        document.getElementById('cookie-notice-accept').addEventListener("click", function() {
            createCookie('cookie-notice-dismissed', 'true', 180);
            document.getElementById('cookie-notice').style.display = 'none';
        });
    </script>


 
<div style="display: flex; align-items: center; padding: 10px; margin-bottom: 5px;">
    <img src="
https://raw.githubusercontent.com/kyleboas/images/main/uploads/2024/07/30/Image-30Jul2024_01:02:42.png" alt="Image" style="width: 40px; margin-right: 10px;">
    <p style="font-size: 14px; margin: 0;">
        <a href="https://youtu.be/A_CPkCktBTQ?si=HsHuvxVcCnBy8_eb">Be Your Best</a> is the VR football app to improve your vision, decision making, and cognitive skills. <a href="https://www.portal.beyourbest.com/?via=tacticsjournal">Sign up.</a>
    </p>
</div>
<p style="margin-top: -15px; margin-left: 60px; font-size:13px;"><small>If you sign up using this link I will earn a commission.</small></p>

<div class="searchInput">
  <div id="search-criteria-container">
    <input type="text" id="search-input" placeholder="Search...">
  </div>
  <p id="p-result-count" style="margin-top: 0px;"><span id="result-count"></span></p>
  <div class="resultBox">
    <!-- here list are inserted from javascript -->
  </div>
</div>

<ul id="post-list">
  {% for post in site.posts limit:15 %}
    <li class="post-item initial-post">
      <a href="{{ post.link | default: post.url }}" target="_blank" class="long-title">{{ post.title }}</a>
      <p class="post-date">{{ post.date | date: "%d %B %Y" }}</p>
      <p>{{ post.content }}</p>
    </li>
  {% endfor %}
</ul>

<hr>

<p><em>To view all of the posts, <a href="https://tacticsjournal.com/archive/">visit the archive</a> or <a href="https://tacticsjournal.com/#top">search</a> at the top of the page.</em></p>

<style>

.tag {
  display: inline-block;
  background-color: #e0e0e0;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 14px;
}

.tag .remove-tag {
  margin-left: 10px;
  cursor: pointer;
  color: #ff0000;
}

</style>

<script>
  window.addEventListener("DOMContentLoaded", function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var searchQuery = urlParams.get("search");

    if (searchQuery) {
      var searchInput = document.getElementById("search-input");
      searchInput.value = searchQuery;
      searchInput.dispatchEvent(new Event("input"));
    }
  });
</script>

<script src="/js/search-test-test.js"></script>
<script src="/js/suggest.js"></script>