---
title: Research
layout: page
permalink: /research/
---
<link rel="stylesheet" href="{{ site.baseurl }}/research/research.css" />
<link rel="stylesheet" href="{{ site.baseurl }}/research/graphics.css" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Source+Serif+4:wght@700&display=swap" rel="stylesheet">

<div class="research-page">

<!-- HERO -->
<div class="r-hero">
  <h2 class="r-fade r-fade-d1">Research</h2>
  <p class="r-sub-statement r-fade r-fade-d2">Spot trends in football before they become popular.</p>
  <div class="r-hero-actions r-fade r-fade-d3">
    {% include research-waitlist-form.html %}
  </div>
</div>

<!-- THE PROBLEM -->
<div class="r-section">
  <div class="r-section-label">The Problem</div>
  <p>
    Good ideas often show up first in smaller outlets, interviews, and podcasts in different leagues and languages. By the time bigger English outlets cover them, the edge is gone.
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
        The system pulls in articles and videos and stores the useful parts in a searchable archive.
      </div>
    </div>

    <div class="r-step-compact">
      <div class="r-step-header">
        <span class="r-step-num">02</span>
        <span class="r-step-title">Detect</span>
        
      </div>
      <div class="r-step-detail">
        It looks for ideas that show up in blog posts, press conferences, podcasts, and interviews before they reach mainstream coverage. Weak ideas get pushed back. Stronger ones move forward.
        <div class="r-tags">
          <span class="r-tag">Early Ideas</span>
          <span class="r-tag">Quality Filter</span>
          <span class="r-tag">Ranking</span>
        </div>
      </div>
    </div>

    <div class="r-step-compact">
      <div class="r-step-header">
        <span class="r-step-num">03</span>
        <span class="r-step-title">Report</span>
        
      </div>
      <div class="r-step-detail">
        Only the best candidates become reports. Each report is researched, checked, and revised before it is published using a multi-model LLM.
        <div class="r-tags">
          <span class="r-tag">Research</span>
          <span class="r-tag">Checks</span>
          <span class="r-tag">Citations</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- SELF-IMPROVING -->
<div class="r-section">
  <div class="r-section-label">Self-Improving</div>
  <p>The system also tests ways to improve itself. Better settings get kept. Worse ones do not.</p>

</div>

<!-- WHAT YOU GET -->
<div class="r-section">
  <div class="r-section-label">What You Get</div>
  <p>A deep research report in your inbox every day.</p>

  <div class="r-offerings">
    <div class="r-offering">
      <div class="r-offering-icon">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="4" width="28" height="32" rx="4" class="r-icon-stroke" fill="none" stroke-width="1.5"/>
          <line x1="12" y1="12" x2="28" y2="12" class="r-icon-stroke" stroke-width="1.5"/>
          <line x1="12" y1="18" x2="24" y2="18" class="r-icon-stroke" stroke-width="1.5"/>
          <line x1="12" y1="24" x2="26" y2="24" class="r-icon-stroke" stroke-width="1.5"/>
          <line x1="12" y1="30" x2="20" y2="30" class="r-icon-stroke" stroke-width="1.5"/>
        </svg>
      </div>
      <div class="r-offering-text">
        <div class="r-offering-title">Citation-Checked Reports</div>
        <div class="r-offering-desc">Reports on ideas that look important early, with sources checked before publication.</div>
      </div>
    </div>

    <div class="r-offering">
      <div class="r-offering-icon">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="14" class="r-icon-stroke" fill="none" stroke-width="1.5"/>
          <circle cx="20" cy="20" r="3" class="r-icon-fill"/>
          <circle cx="20" cy="20" r="8" class="r-icon-stroke r-radar-ring" fill="none" stroke-width="1"/>
          <line x1="20" y1="6" x2="20" y2="14" class="r-icon-stroke" stroke-width="1"/>
          <line x1="20" y1="26" x2="20" y2="34" class="r-icon-stroke" stroke-width="1"/>
          <line x1="6" y1="20" x2="14" y2="20" class="r-icon-stroke" stroke-width="1"/>
          <line x1="26" y1="20" x2="34" y2="20" class="r-icon-stroke" stroke-width="1"/>
        </svg>
      </div>
      <div class="r-offering-text">
        <div class="r-offering-title">Candidate Queue</div>
        <div class="r-offering-desc">A look at what the system is tracking before it becomes a full report.</div>
      </div>
    </div>

    <div class="r-offering">
      <div class="r-offering-icon">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="14" class="r-icon-stroke" fill="none" stroke-width="1.5"/>
          <path d="M10 20 h20 M20 8 c-4 6-4 18 0 24 M20 8 c4 6 4 18 0 24" class="r-icon-stroke" fill="none" stroke-width="1" />
          <line x1="11" y1="14" x2="29" y2="14" class="r-icon-stroke" stroke-width="0.75"/>
          <line x1="11" y1="26" x2="29" y2="26" class="r-icon-stroke" stroke-width="0.75"/>
        </svg>
      </div>
      <div class="r-offering-text">
        <div class="r-offering-title">Live Web Research</div>
        <div class="r-offering-desc">Research built from a stored archive first, with live web fact-checking.</div>
      </div>
    </div>
  </div>
</div>

<!-- OPEN SOURCE -->
<div class="r-section">
  <div class="r-section-label">Open Source</div>
  <p>The entire system is <a href="https://github.com/kyleboas/research" target="_blank">open source</a>. You can inspect it and run it yourself.</p>

  <div class="r-oss-compare">
    <div class="r-oss-col r-oss-free">
      <div class="r-oss-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>Code</span>
      </div>
      <div class="r-oss-body">Free &amp; open source. Fork, configure your feeds, run your own instance. Setup instructions included in the repository.</div>
    </div>
    <div class="r-oss-divider">
      <span>vs</span>
    </div>
    <div class="r-oss-col r-oss-sub">
      <div class="r-oss-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
        <span>Subscription</span>
      </div>
      <div class="r-oss-body">We run it, you use it. No setup, no maintenance.</div>
    </div>
  </div>

  <p>
    <a href="https://github.com/kyleboas/research" target="_blank" class="r-github-link">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      View on GitHub
    </a>
  </p>
</div>

<!-- RUNTIME BUDGET -->
<div class="r-section">
  <div class="r-section-label">Pricing</div>

  <div class="r-pricing-graphic">
    <div class="r-pricing-card">
      <div class="r-pricing-tbd">$0.85</div>
      <div class="r-pricing-explain">Right now the system aims to keep report cost to about $0.85 per report.</div>
      <div class="r-pricing-guarantee">That limit can increased by how much interest.</div>
    </div>

    <!-- Visual: demand bar -->
    <div class="r-demand-bar">
      <div class="r-demand-fill">
        <div class="r-demand-pulse"></div>
      </div>
      <div class="r-demand-labels">
        <span>Lower spend</span>
        <span>More depth when it helps</span>
      </div>
    </div>
  </div>
</div>

<!-- WAITLIST -->
<div class="r-section" id="waitlist">
  <div class="r-section-label">Early Access</div>
  <p>
    Join the waitlist to be notified when this goes live.
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
