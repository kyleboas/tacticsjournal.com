---
title: About
layout: page
---

<a href="<?= $page->url() ?>/like/toggle">❤️ <span><?= $page->likeCount() ?></span></a>

<a href="<?= $page->url() ?>/like/add">👍</a>
<a href="<?= $page->url() ?>/like/remove">👎</a>

<script>
// Select target selector
var button = document.querySelector('like-button');

// Add click handler
button.addEventListener('click', function(e) {
  fetch(this.getAttribute('href'), {
    method: 'POST'
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    this.querySelector('span').innerText = data.likeCount;

    if (data.hasLiked) {
      this.classList.add('has_liked');
    } else {
      this.classList.remove('has_liked');
    }
  });
})
</script>

fields:
  likes:
    label: Likes
    type: likes