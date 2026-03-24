(function () {
  'use strict';

  // Cloudflare Worker URL — update after deploying the worker
  var WORKER_URL = 'https://tacticsjournal-subscribe.YOUR_SUBDOMAIN.workers.dev';

  function getFormTags(form) {
    var tags = [];
    form.querySelectorAll('input[name="tag"]').forEach(function (input) {
      var val = input.value.trim();
      if (val) tags.push(val);
    });
    return tags;
  }

  function showSuccess(form) {
    var btn = form.querySelector('button[type="submit"]');
    if (!btn) return;
    var original = btn.textContent;
    btn.textContent = 'Subscribed!';
    btn.disabled = true;
    setTimeout(function () {
      btn.textContent = original;
      btn.disabled = false;
    }, 3000);
  }

  function handleSubmit(form, e) {
    var emailInput = form.querySelector('input[name="email"]');
    if (!emailInput) return;

    var email = emailInput.value.trim();
    var tags = getFormTags(form);
    if (!email || !tags.length) return;

    e.preventDefault();

    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, tags: tags }),
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.status === 'updated') {
          // Existing subscriber — tags merged, no need to re-submit
          showSuccess(form);
        } else {
          // New subscriber — let Buttondown handle creation + confirmation email
          form.submit();
        }
      })
      .catch(function () {
        // Network error or worker down — fall back to direct form submit
        form.submit();
      });
  }

  function init() {
    document.querySelectorAll('form[action*="embed-subscribe"]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        handleSubmit(form, e);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
