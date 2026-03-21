---
title: Research
layout: page
permalink: /research/
---
<link rel="stylesheet" href="{{ site.baseurl }}/research/research.css" />
<link rel="stylesheet" href="{{ site.baseurl }}/research/graphics.css" />
<link rel="stylesheet" href="{{ site.baseurl }}/research/scrolling-headlines.css" />
<script src="{{ site.baseurl }}/research/scrolling-headlines.js" defer></script>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Source+Serif+4:wght@700&display=swap" rel="stylesheet">

<div class="research-page">

<!-- HERO -->
<div class="r-hero">
  <h2 class="r-fade r-fade-d1">Get ahead of the game</h2>
  <p class="r-sub-statement r-fade r-fade-d2">The future of football tactics, delivered to you today.</p>
  <div class="r-hero-actions r-fade r-fade-d3">
    {% include research-waitlist-form.html %}
  </div>
</div>

<!-- SCROLLING HEADLINES -->
{% include research-scrolling-headlines.html %}

<!-- THE PROBLEM -->
<div class="r-section">
  <div class="r-section-label">The Problem</div>
  <p>
    Useful ideas show up first in niche places. A pressing tweak mentioned in a German podcast. A positional pattern on a Portuguese blog. A phrase a manager drops in a press conference before anyone writes about the concept.
  </p>
  <p>
    By the time major outlets cover it, the edge is gone. No one can read everything, in every language.
  </p>
</div>

<!-- WHAT THIS IS -->
<div class="r-section">
  <div class="r-section-label">What This Is</div>
  <p>
    An AI-powered system that monitors football analysis across leagues, languages, and cultures, and writes reports on what it finds before bigger outlets pick it up.
  </p>
</div>

<!-- HOW IT WORKS -->
<div class="r-section">
  <div class="r-section-label">How It Works</div>

  <div class="r-steps-compact">
    <div class="r-step-compact">
      <div class="r-step-header">
        <span class="r-step-num">01</span>
        <span class="r-step-title">Ingest</span>
      </div>
      <div class="r-step-detail">
        Pulls content and transcripts from blogs, articles, YouTube videos, press conferences, interviews, and podcasts. Re-checks a rolling window so nothing is missed.
      </div>
    </div>

    <div class="r-step-compact">
      <div class="r-step-header">
        <span class="r-step-num">02</span>
        <span class="r-step-title">Detect</span>
      </div>
      <div class="r-step-detail">
        Classifies sources as frontier or mainstream. Finds ideas in smaller sources before they appear in major coverage. Scores on source diversity, cross-culture corroboration, and novelty.
      </div>
    </div>

    <div class="r-step-compact">
      <div class="r-step-header">
        <span class="r-step-num">03</span>
        <span class="r-step-title">Report</span>
      </div>
      <div class="r-step-detail">
        Only candidates that pass a quality gate get written up. Researched, citation-checked, revised. Every report requires counterevidence.
      </div>
    </div>

    <div class="r-step-compact">
      <div class="r-step-header">
        <span class="r-step-num">04</span>
        <span class="r-step-title">Tune</span>
      </div>
      <div class="r-step-detail">
        Tests its own settings hourly and keeps what works better.
      </div>
    </div>
  </div>
</div>

<!-- SOURCES -->
<div class="r-section">
  <div class="r-section-label">Sources</div>
  <p class="r-audience">
    Independent analysts, niche outlets, press conferences, interviews, and non-English football media. Each source classified by tier, culture, and format. Press conferences weighted as early-signal material.
  </p>
</div>

<!-- OPEN SOURCE -->
<div class="r-section">
  <div class="r-section-label">Open Source</div>
  <p>The entire pipeline is <a href="https://github.com/kyleboas/research" target="_blank">open source</a>. Run your own instance or subscribe for less than it would cost to run it yourself.</p>
  <p>
    <a href="https://github.com/kyleboas/research" target="_blank" class="r-github-link">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      View on GitHub
    </a>
  </p>
</div>


<!-- PRICING -->
<div class="r-section">
  <div class="r-section-label">Pricing</div>

  <div class="r-pricing-toggle-wrapper">
    <span class="r-pricing-toggle-label r-pricing-toggle-label--active" id="toggle-monthly-label">Monthly</span>
    <div class="r-pricing-toggle" id="pricing-toggle" onclick="togglePricing()">
      <div class="r-pricing-toggle-knob"></div>
    </div>
    <span class="r-pricing-toggle-label" id="toggle-yearly-label">Yearly</span>
  </div>

  <div class="r-pricing-graphic">
    <div class="r-pricing-grid">
      {% include research-pricing-card.html
        name="Free"
        description="A simple way to sample the feed."
        price="$0"
        item_1="Read 1 full report per week"
        item_2="See a 255-character opening preview on every report"
        item_3_x="After your free report is used, the next full report prompts you to upgrade"
        item_4="Reports arrive by email and stay accessible on the website"
        cta_text="Get Started"
        cta_href="#waitlist"
      %}

      {% include research-pricing-card.html
        name="Pro"
        description="Full access to the research archive."
        price="$10"
        price_yearly="$8"
        price_suffix="month"
        yearly_note="$96 billed yearly (20% off)"
        item_1="Read every report in full"
        item_2="Every report delivered by email"
        item_3="Direct links to reports on the website"
        item_4="Built for analysts, coaches, and clubs following ideas closely"
        cta_text="Subscribe"
        cta_href="#waitlist"
        featured=true
      %}
    </div>
  </div>
</div>

<script>
let isYearly = false;
function togglePricing() {
  isYearly = !isYearly;
  const toggle = document.getElementById('pricing-toggle');
  const monthlyLabel = document.getElementById('toggle-monthly-label');
  const yearlyLabel = document.getElementById('toggle-yearly-label');
  
  if (isYearly) {
    toggle.classList.add('r-pricing-toggle--active');
    monthlyLabel.classList.remove('r-pricing-toggle-label--active');
    yearlyLabel.classList.add('r-pricing-toggle-label--active');
  } else {
    toggle.classList.remove('r-pricing-toggle--active');
    monthlyLabel.classList.add('r-pricing-toggle-label--active');
    yearlyLabel.classList.remove('r-pricing-toggle-label--active');
  }
  
  document.querySelectorAll('[data-price-monthly]').forEach(el => {
    el.textContent = isYearly ? el.dataset.priceYearly : el.dataset.priceMonthly;
  });
  document.querySelectorAll('[data-yearly-note]').forEach(el => {
    el.style.display = isYearly ? 'block' : 'none';
  });
}
</script>

<!-- WAITLIST -->
<div class="r-section" id="waitlist">
  <div class="r-section-label">Early Access</div>
  <p>
    Join the waitlist for early access and updates.
  </p>
  {% include research-waitlist-form.html %}
</div>

</div>

<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('r-visible');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.r-offerings, .r-oss-compare, .r-pricing-graphic').forEach(el => {
  observer.observe(el);
});
</script>
