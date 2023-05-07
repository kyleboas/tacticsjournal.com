---
layout: page
title: Preview
permalink: "/preview/"
---

<div class="filter">
    <a href="#" class="league" data-name="premier-league">Premier League</a> 
    <a href="#" class="league" data-name="la-liga">La Liga</a> 
    <a href="#" class="topic premier-league-team" data-name="ARS">ARS</a> 
    <a href="#" class="topic premier-league-team" data-name="AVL">AVL</a>
    <a href="#" class="topic la-liga-team" data-name="BAR">BAR</a> 
    <a href="#" class="topic la-liga-team" data-name="MAD">MAD</a>
    <a href="#" class="topic hidden" data-name="other">...</a>
</div>

<script>
(function(){
  function addPermalinkToHeader(header) {
    if (header.id) {
      var permalink = document.createElement('a');
      permalink.href = '#' + header.id;
      permalink.innerHTML = '&sect;';
      header.appendChild(permalink);
      header.tabIndex = 0;
      permalink.onfocus = function() { this.style.display = 'block' };
      permalink.onblur = function() { this.style.display = '' };
    }
  }
  var headers = document.getElementsByTagName('h3');
  for (var i = headers.length; i--; ) {
    addPermalinkToHeader(headers[i]);
  }
  headers = document.getElementsByTagName('h4');
  for (var i = headers.length; i--; ) {
    addPermalinkToHeader(headers[i]);
  }
  headers = document.getElementsByTagName('h5');
  for (var i = headers.length; i--; ) {
    addPermalinkToHeader(headers[i]);
  }
})();

document.documentElement.onclick = function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement;
  var clearAll;

  if (target.className.indexOf('topic') > -1) {

    // only add class if not clicking on the same one
    if (target.className.indexOf('selected') === -1) {
      clearAll = false;
    }
    else {
      clearAll = true;
    }

    var topicEls = [].slice.call(document.getElementsByClassName('topic'));
    for (var i = 0, len = topicEls.length; i < len; i++) {
      topicEls[i].className = topicEls[i].className.replace('selected', '');
    }

    if (!clearAll) {
      target.className += ' selected';
    }

    var tagName = target.getAttribute('data-name');
    var liEls = document.getElementsByClassName('posts')[0].getElementsByTagName('li');

    var numShown = 0;

    for (var i = 0, len = liEls.length; i < len; i++) {
      var content = liEls[i].getElementsByClassName('tags')[0].textContent;
      if (content.indexOf(tagName) > -1 || clearAll) {
        liEls[i].className = liEls[i].className.replace(/hidden/g, '');
        numShown++;
      }
      else {
        liEls[i].className += ' hidden';
      }
    }

    document.getElementById('shown').innerHTML = numShown;

    return false;
  }
  
  // Add this block of code
  var leagueEls = [].slice.call(document.getElementsByClassName('league'));
  if (target.className.indexOf('league') > -1) {
    for (var i = 0, len = leagueEls.length; i < len; i++) {
      leagueEls[i].className = leagueEls[i].className.replace('selected', '');
      var leagueId = leagueEls[i].getAttribute('data-id');
      var teamEls = document.querySelectorAll('[data-league="' + leagueId + '"]');
      for (var j = 0, teamLen = teamEls.length; j < teamLen; j++) {
        teamEls[j].className += ' hidden';
      }
    }
    target.className += ' selected';
    var leagueId = target.getAttribute('data-id');
    var teamEls = document.querySelectorAll('[data-league="' + leagueId + '"]');
    for (var j = 0, teamLen = teamEls.length; j < teamLen; j++) {
      teamEls[j].className = teamEls[j].className.replace('hidden', '');
    }
  }
</script>



May 7, 2023 - 67 days since his last start, 18-year-old Rico Lewis reminded everyone why he deserves to start regularly for Manchester City.

I forgot how crisp his touches were and how good he is at moving to open space for others. His spatial awareness, tight control, and agility set him apart from other options in that inverted full-back position.

I'd put him above John Stones in quality *for that position*, but Stones has years more experience, so he edges out Lewis in the short-term. Stones is playing out of position, so the fact that he is even considered an option is remarkable.

<figure>
    <img src="https://tacticsjournal.com/uploads/2023/05/06/Image-06May2023_20:27:35.jpeg">
    <figcaption>Figure 1.1 - Lewis threads a pass to Erling Haaland.</figcaption>
</figure>

Lewis' ability to pick the correct pass is an underrated trait of his. In Figure 1.1, he weights the pass perfectly so that Erling Haaland doesn't even need to break stride. The ball is planted directly on his left foot between two defenders, with one more defender breathing down his neck as he makes the pass.

<figure>
    <img src="https://tacticsjournal.com/uploads/2023/05/06/Image-06May2023_20:28:09.jpeg">
    <figcaption>Figure 2.1 - Lewis moves forward to give De Bruyne space. De Bruyne passes to Mahrez, and Lewis continues his run.</figcaption>
</figure>

<figure>
    <img src="https://tacticsjournal.com/uploads/2023/05/06/Image-06May2023_20:28:29.jpeg">
    <figcaption>Figure 2.2 - Lewis continues his run, dragging defenders, which opens space for Gündoğan on the edge of the box.</figcaption>
</figure>

Helping others by moving away from them to create the space needed is something Lewis excels at. The goal is not always to move to receive the ball; it is to move to create space for someone else. Drag defenders with you, and a free man will appear somewhere.

<figure>
    <img src="https://tacticsjournal.com/uploads/2023/05/06/Image-06May2023_20:29:03.jpeg">
    <figcaption>Figure 3.1 - Gündoğan passes to Lewis.</figcaption>
</figure>

<figure>
    <img src="https://tacticsjournal.com/uploads/2023/05/06/Image-06May2023_20:29:30.jpeg">
    <figcaption>Figure 3.2 - Lewis passes to Haaland, and then immediately moves.</figcaption>
</figure>

<figure>
    <img src="https://tacticsjournal.com/uploads/2023/05/06/Image-06May2023_20:29:54.jpeg">
    <figcaption>Figure 3.3 - Haaland receives the ball.</figcaption>
</figure>

Pass and move. Many players, including some Manchester City players, should watch young Rico Lewis at work because he has mastered this. Between Figure 3.2 and 3.3, his movement opens the space for Haaland to run into.

The important part is that it's immediate, no delay. Pass, move, don't think. Defenses can't handle it.

<figure>
    <img src="https://tacticsjournal.com/uploads/2023/05/06/Image-06May2023_20:30:14.jpeg">
    <figcaption>Figure 3.4 - Haaland drives into the space Lewis left, and then passes to Mahrez.</figcaption>
</figure> 

<figure>
    <img src="https://tacticsjournal.com/uploads/2023/05/06/Image-06May2023_20:30:36.jpeg">
    <figcaption>Figure 3.5 - Haaland and Lewis continue their run to open space behind them. Mahrez passes to Gündoğan.</figcaption>
</figure> 

Haaland follows suit. Pass and move, no delay. They're not expecting to get the ball; they're creating space. Every defender is distracted, they must follow Haaland, so they forget about Gündoğan on the edge of the box.

Throughout the match, Lewis is constantly scanning, looking for space, seeing where there's not enough space, then calculating the perfect move to open space.

This is [something Julian Alvarez could work on](https://tacticsjournal.com/Manchester-City-needed-more-runners-against-West-Ham/). Julian doesn't move enough. Rico Lewis is never reactive; he's always proactive. Alvarez is reactive, but he has a high enough work-rate where, if coached, he can quickly be as active and aware as Lewis. Alvarez doesn't seem to know when to move; there's a delay. There can be no delay.

<figure>
    <img src="https://tacticsjournal.com/uploads/2023/05/06/D4D575DF-C0BA-4C67-A850-6BB0C2CB23C3.gif">
    <figcaption>Figure 4.1 - Lewis passes to Haaland on his left foot out of the reach of the defender.</figcaption>
</figure>

This post only focuses on his movement and passing. There's more. Defensively, he's solid, similar to a nat. He's always buzzing around, and his work-rate, paired with his quickness, gives him enough of an edge to make him a solid complementary defender. He excels offensively.

Rico Lewis performed so well today; he should be the one to mark Rodrygo when Manchester City face Real Madrid in the Champions League Semi-Final on Tuesday.

That would allow Manuel Akanji to play right-back instead of Kyle Walker, whose poor positioning at right-back up against Vinicius Jr. really worries me. Additionally, Akanji has looked uncomfortable both [on the ball](https://tacticsjournal.com/Manuel-Akanji-weak-foot-and-bad-angles-at-left-center-back-in-Manchester-City-3-2/) and [off the ball](https://tacticsjournal.com/Manuel-Akanji-weak-foot-and-bad-angles-at-left-center-back-in-Manchester-City-3-2/) at left-back.

Nathan Ake picked up an injury in today's match, making a trip to the Santiago Bernabéu very tricky. 

A double-team of Manuel Akanji and John Stones on Vinicius Jr., with Rico Lewis 1v1 against Rodrygo with the help of Ruben Dias, is something I think would work.
