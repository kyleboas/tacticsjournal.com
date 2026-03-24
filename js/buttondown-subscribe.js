(function () {
  'use strict';

  // Cloudflare Worker URL — update after deploying the worker
  var WORKER_URL = 'https://tacticsjournal-subscribe.heyboas.workers.dev';

  function getFormTags(form) {
    var tags = [];
    form.querySelectorAll('input[name="tag"]').forEach(function (input) {
      var val = input.value.trim();
      if (val) tags.push(val);
    });
    return tags;
  }

  function lockFormSize(form) {
    if (form.dataset.lockedHeight) return;
    form.dataset.lockedHeight = form.offsetHeight;
    form.dataset.lockedWidth = form.offsetWidth;
    form.style.height = form.offsetHeight + 'px';
    form.style.width = form.offsetWidth + 'px';
    form.style.display = 'flex';
    form.style.alignItems = 'center';
    form.style.justifyContent = 'center';
  }

  function unlockFormSize(form) {
    delete form.dataset.lockedHeight;
    delete form.dataset.lockedWidth;
    form.style.height = '';
    form.style.width = '';
    form.style.display = '';
    form.style.alignItems = '';
    form.style.justifyContent = '';
  }

  function showMessage(form, message) {
    lockFormSize(form);
    var inputs = form.querySelectorAll('input');
    inputs.forEach(function(input) { input.style.display = 'none'; });
    var btn = form.querySelector('button[type="submit"]');
    if (btn) btn.style.display = 'none';

    var msgDiv = form.querySelector('.subscribe-message');
    if (!msgDiv) {
      msgDiv = document.createElement('div');
      msgDiv.className = 'subscribe-message';
      msgDiv.style.textAlign = 'center';
      msgDiv.style.width = '100%';
      msgDiv.style.padding = '0.5rem';
      form.appendChild(msgDiv);
    }
    
    var spinner = form.querySelector('.subscribe-spinner');
    if (spinner) spinner.style.display = 'none';

    msgDiv.textContent = message;
    msgDiv.style.display = 'block';

    setTimeout(function() {
      // Logic to close the inline form if it is the header inline form
      var actions = form.closest('.site-actions');
      if (actions && actions.hasAttribute('data-inline-open')) {
        actions.removeAttribute('data-inline-open');
        var header = document.querySelector('.site-header');
        if (header) header.removeAttribute('data-inline-open');
        var toggles = document.querySelectorAll('[data-inline-toggle="subscribe"]');
        toggles.forEach(function(t) { t.setAttribute('aria-expanded', 'false'); });
      }
      
      // Reset form visually after a small delay to allow close animation
      setTimeout(function() {
         inputs.forEach(function(input) { 
           if (input.type !== 'hidden') {
             input.style.display = ''; 
             input.value = '';
           }
         });
         if (btn) btn.style.display = '';
         msgDiv.style.display = 'none';
         unlockFormSize(form);

         // Trigger input event to reset button state
         var event = new Event('input', { bubbles: true });
         var emailInput = form.querySelector('input[type="email"]');
         if (emailInput) emailInput.dispatchEvent(event);
      }, 500);
    }, 4000);
  }

  function showSpinner(form) {
    lockFormSize(form);
    var inputs = form.querySelectorAll('input');
    inputs.forEach(function(input) { input.style.display = 'none'; });
    var btn = form.querySelector('button[type="submit"]');
    if (btn) btn.style.display = 'none';

    var spinner = form.querySelector('.subscribe-spinner');
    if (!spinner) {
      spinner = document.createElement('div');
      spinner.className = 'subscribe-spinner';
      spinner.style.margin = '0 auto';
      spinner.innerHTML = '<style>.ts-spinner{border:3px solid rgba(150,150,150,0.2);width:20px;height:20px;border-radius:50%;border-left-color:#3b82f6;animation:ts-spin 1s linear infinite;margin:0 auto;}@keyframes ts-spin{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}</style><div class="ts-spinner"></div>';
      form.appendChild(spinner);
    }
    spinner.style.display = 'block';
  }

  function handleSubmit(form, e) {
    e.preventDefault();  // Always prevent default first

    var emailInput = form.querySelector('input[name="email"]');
    if (!emailInput) return;

    var email = emailInput.value.trim();
    var tags = getFormTags(form);
    if (!email || !tags.length) return;

    showSpinner(form);

    fetch(WORKER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email, tags: tags }),
    })
      .then(function (res) { return res.json(); })
      .then(function (data) {
        if (data.status === 'already_subscribed') {
          showMessage(form, "You are already subscribed.");
        } else if (data.status === 'updated') {
          showMessage(form, "Successfully subscribed.");
        } else if (data.status === 'created') {
          showMessage(form, "Check your email to confirm your subscription.");
        } else {
          showMessage(form, "Successfully subscribed.");
        }
      })
      .catch(function () {
        showMessage(form, "Check your email to confirm your subscription.");
      });
  }

  function isValidEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function init() {
    document.querySelectorAll('form[action*="embed-subscribe"]').forEach(function (form) {
      var emailInput = form.querySelector('input[type="email"]');
      var submitBtn = form.querySelector('button[type="submit"]');

      if (emailInput && submitBtn) {
        function updateBtn() {
          if (isValidEmail(emailInput.value)) {
            submitBtn.classList.add('valid');
          } else {
            submitBtn.classList.remove('valid');
          }
        }
        emailInput.addEventListener('input', updateBtn);
        updateBtn(); // set initial state
      }

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
