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


<div class="signup-container">
  <div class="login_bar">
    <span class="login" id="bd-email">super-email@gmail.com</span>
    <span class="subscribe_button" onclick="subscribeOnClick()">subscribe</span>
    <span class="subscribing"></span>
    <span class="thanks"> Check your email to confirm your subscription.</span>
  </div>
</div>

<style>
@import url(https://fonts.googleapis.com/css?family=Lato:400,700);

.signup-container {	
	width: 300px;
	height: 300px;
	margin: auto;
}

.login_bar {
	width: 300px;
	height: 50px;
	background: white;
	border-radius: 10px;
	top: 50%;
	position: relative;
  z-index: 1;
	overflow: hidden;
}

.login {
	background: transparent;
	position: absolute;
	height: 100%;
	width: 190px;
	padding-left: 10px;
	text-align: left;
	line-height: 50px;
	vertical-align: middle;
	z-index: 10;
	-webkit-transition: transform 0.2s ease-in-out 0s;
	   -moz-transition: transform 0.2s ease-in-out 0s;
	     -o-transition: transform 0.2s ease-in-out 0s;
	        transition: transform 0.2s ease-in-out 0s;
}

.login_active {
	-webkit-transform: translateX(300px);
	   -moz-transform: translateX(300px);
	    -ms-transform: translateX(300px);
	     -o-transform: translateX(300px);
	        transform: translateX(300px);
}

.subscribe_button:hover{
	background-color: #222A33;
	cursor:pointer;
}

.subscribe_button {
	background: #171D23;
	position: absolute;
	top: -50px;
	left: 200px;
	border-top-right-radius: 10px;
	border-bottom-right-radius: 10px;
	height: 150px;
	width: 100px;
	text-align: center;
	line-height: 150px;
	vertical-align: middle;	
	color: white;
	-webkit-transition: transform 0.5s ease 0s;
	   -moz-transition: transform 0.5s ease 0s;
	     -o-transition: transform 0.5s ease 0s;
	        transition: transform 0.5s ease 0s;
}

.subscribe_button_active{
	-webkit-transform: translateY(50px);
	   -moz-transform: translateY(50px);
	    -ms-transform: translateY(50px);
	     -o-transform: translateY(50px);
	        transform: translateY(50px);
}

.subscribing{
	background: #CDD4DC;
	height: 100%;
	width: 300px;
	z-index: 5;
	position: absolute;
	left:-300px;
	display: inline-block;
	-webkit-transition: transform 1s ease 0s ;
	   -moz-transition: transform 1s ease 0s ;
	     -o-transition: transform 1s ease 0s ;
	        transition: transform 1s ease 0s ;
}

.subscribing_active {
	-webkit-transform: translateX(300px);
	   -moz-transform: translateX(300px);
	    -ms-transform: translateX(300px);
	     -o-transform: translateX(300px);
	        transform: translateX(300px);
}

.thanks{
	background: transparent;
	height: 100%;
	width: 300px;
	z-index: 5;
	text-align: left;
	line-height: 50px;
	vertical-align: middle;
	padding-left: 10px;
	position: absolute;
	top:50px;
	display: inline-block;
	-webkit-transition: transform 0.5s ease 0s ;
	   -moz-transition: transform 0.5s ease 0s ;
	     -o-transition: transform 0.5s ease 0s ;
	        transition: transform 0.5s ease 0s ;
}

.thanks_active {
	-webkit-transform: translateY(-50px);
	   -moz-transform: translateY(-50px);
	    -ms-transform: translateY(-50px);
	     -o-transform: translateY(-50px);
	        transform: translateY(-50px);
}
</style>

<script>
var subscribe_button = document.querySelector(".subscribe_button");

subscribe_button.addEventListener('click', function(){
	var subscribing = document.querySelector(".subscribing");
	var thanks = document.querySelector(".thanks");
	var login = document.querySelector(".login");

	subscribing.classList.add("subscribing_active");
	subscribe_button.classList.add("subscribe_button_active");
	setTimeout(function(){
		login.classList.add("login_active");
	}, 1200);
	setTimeout(function(){
		thanks.classList.add("thanks_active");
	}, 1400);

	setTimeout(function(){
		thanks.classList.remove("thanks_active");
		login.classList.remove("login_active");
		subscribing.classList.remove("subscribing_active");
		subscribe_button.classList.remove("subscribe_button_active");
	}, 4000);
});
</script>
