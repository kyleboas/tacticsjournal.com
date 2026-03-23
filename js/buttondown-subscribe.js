(function () {
  'use strict';

  var API_BASE = 'https://api.buttondown.email/v1';

  function getApiKey() {
    return window.BUTTONDOWN_API_KEY || '';
  }

  function getFormTags(form) {
    var inputs = form.querySelectorAll('input[name="tag"]');
    var tags = [];
    inputs.forEach(function (input) {
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

  function patchSubscriberTags(subscriberId, existingTags, newTags, apiKey) {
    var merged = existingTags.slice();
    newTags.forEach(function (tag) {
      if (merged.indexOf(tag) === -1) merged.push(tag);
    });
    return fetch(API_BASE + '/subscribers/' + subscriberId, {
      method: 'PATCH',
      headers: {
        'Authorization': 'Token ' + apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tags: merged })
    });
  }

  function lookupSubscriber(email, apiKey) {
    return fetch(API_BASE + '/subscribers?email=' + encodeURIComponent(email), {
      headers: { 'Authorization': 'Token ' + apiKey }
    }).then(function (res) { return res.json(); });
  }

  function handleSubmit(form, e) {
    var apiKey = getApiKey();
    if (!apiKey) return;

    var emailInput = form.querySelector('input[name="email"]');
    if (!emailInput) return;

    var email = emailInput.value.trim();
    var newTags = getFormTags(form);
    if (!email || !newTags.length) return;

    e.preventDefault();

    lookupSubscriber(email, apiKey).then(function (data) {
      if (data.count > 0) {
        var subscriber = data.results[0];
        patchSubscriberTags(subscriber.id, subscriber.tags || [], newTags, apiKey)
          .then(function () { showSuccess(form); })
          .catch(function () { form.submit(); });
      } else {
        form.submit();
      }
    }).catch(function () {
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
