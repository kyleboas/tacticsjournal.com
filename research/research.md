---
title: Research
layout: page
permalink: /research/
---
<link rel="stylesheet" href="{{ site.baseurl }}/research/research.css" />
<link rel="stylesheet" href="{{ site.baseurl }}/research/marquee.css" />
<link rel="stylesheet" href="{{ site.baseurl }}/research/graphics.css" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@500;700&family=Source+Serif+4:wght@700&display=swap" rel="stylesheet">

<div class="research-page">

<!-- HERO -->
<div class="r-hero">
  <h2 class="r-fade r-fade-d1">Research</h2>
  <p class="r-sub-statement r-fade r-fade-d2">Spot football trends before they become obvious.</p>
  <div class="r-hero-actions r-fade r-fade-d3">
    {% include research-waitlist-form.html %}
  </div>
  {% include research-source-marquee.html %}
</div>

<!-- THE PROBLEM -->
<div class="r-section">
  <div class="r-section-label">The Problem</div>
  <p>
    Tactical ideas appear in frontier sources, in any language, weeks before English-language coverage picks them up. No person can track 151 sources across every language in real time.
  </p>

</div>

<!-- HOW IT WORKS -->
<div class="r-section">
  <div class="r-section-label">How It Works</div>
  <p>Three stages, fully automated, running continuously.</p>

  <div class="r-steps-compact">
    <div class="r-step-compact" tabindex="0">
      <div class="r-step-header">
        <span class="r-step-num">01</span>
        <span class="r-step-title">Ingest</span>
        <span class="r-step-expand">+</span>
      </div>
      <div class="r-step-detail">
        Pulls from 118 RSS feeds and 33 YouTube channels in any language every hour. Full-text extraction, transcript processing, and vector embedding. Every source tagged by tier, culture, and format.
        <div class="r-tags">
          <span class="r-tag">RSS</span>
          <span class="r-tag">YouTube Transcripts</span>
          <span class="r-tag">Full-Text Extraction</span>
          <span class="r-tag">Vector Embeddings</span>
        </div>
      </div>
    </div>

    <div class="r-step-compact" tabindex="0">
      <div class="r-step-header">
        <span class="r-step-num">02</span>
        <span class="r-step-title">Detect</span>
        <span class="r-step-expand">+</span>
      </div>
      <div class="r-step-detail">
        A frontier-gap detector finds ideas circulating in independent sources before mainstream pickup. A weak-signal detector clusters the corpus over time to track acceleration. Candidates are scored for novelty, source diversity, and cross-culture spread.
        <div class="r-tags">
          <span class="r-tag">Frontier Gap</span>
          <span class="r-tag">Weak-Signal Clustering</span>
          <span class="r-tag">Novelty Scoring</span>
          <span class="r-tag">Cross-Culture</span>
        </div>
      </div>
    </div>

    <div class="r-step-compact" tabindex="0">
      <div class="r-step-header">
        <span class="r-step-num">03</span>
        <span class="r-step-title">Report</span>
        <span class="r-step-expand">+</span>
      </div>
      <div class="r-step-detail">
        A multi-agent research team decomposes the question, investigates evidence in parallel, and produces a finding-first report. A dedicated citation pass verifies every claim before publishing.
        <div class="r-tags">
          <span class="r-tag">Multi-Agent Research</span>
          <span class="r-tag">Citation Verification</span>
          <span class="r-tag">Quality Gates</span>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- SELF-IMPROVING -->
<div class="r-section">
  <div class="r-section-label">Self-Improving</div>
  <p>The pipeline tunes itself. A separate autoresearch loop evaluates and optimizes each stage. Changes only apply when they beat the current baseline.</p>

</div>

<!-- WHAT YOU GET -->
<div class="r-section">
  <div class="r-section-label">What You Get</div>
  <p>The main blog is written by Kyle Boas. The research section is what the pipeline sees across 151 sources that no individual could track alone.</p>

  <div class="r-offerings">
    <div class="r-offering" tabindex="0">
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
        <div class="r-offering-title">Daily Trend Reports</div>
        <div class="r-offering-desc">One citation-checked report per day on an emerging tactical pattern. One per week is free.</div>
      </div>
    </div>

    <div class="r-offering" tabindex="0">
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
        <div class="r-offering-title">Early Signals</div>
        <div class="r-offering-desc">See what the pipeline is tracking before it becomes a full report, before English press picks it up.</div>
      </div>
    </div>

    <div class="r-offering" tabindex="0">
      <div class="r-offering-icon">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="14" class="r-icon-stroke" fill="none" stroke-width="1.5"/>
          <path d="M10 20 h20 M20 8 c-4 6-4 18 0 24 M20 8 c4 6 4 18 0 24" class="r-icon-stroke" fill="none" stroke-width="1" />
          <line x1="11" y1="14" x2="29" y2="14" class="r-icon-stroke" stroke-width="0.75"/>
          <line x1="11" y1="26" x2="29" y2="26" class="r-icon-stroke" stroke-width="0.75"/>
        </svg>
      </div>
      <div class="r-offering-text">
        <div class="r-offering-title">Cross-Language Coverage</div>
        <div class="r-offering-desc">Content from any language. You get the patterns that emerge from monitoring sources no individual could track.</div>
      </div>
    </div>
  </div>
</div>

<!-- SOURCES -->
<div class="r-section">
  <div class="r-section-label">Sources</div>

  <p class="r-audience">
    For analysts, coaches, and clubs who want to see what's happening before it's obvious.
  </p>
</div>

<!-- OPEN SOURCE -->
<div class="r-section">
  <div class="r-section-label">Open Source</div>
  <p>The entire pipeline is <a href="https://github.com/kyleboas/research" target="_blank">open source</a>. You can inspect it, run it yourself, or adapt it.</p>

  <!-- Interactive: Open Source vs Subscription comparison -->
  <div class="r-oss-compare">
    <div class="r-oss-col r-oss-free">
      <div class="r-oss-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        <span>Code</span>
      </div>
      <div class="r-oss-body">Free &amp; open source. Clone, configure your feeds, run your own instance.</div>
    </div>
    <div class="r-oss-divider">
      <span>vs</span>
    </div>
    <div class="r-oss-col r-oss-sub">
      <div class="r-oss-header">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path></svg>
        <span>Subscription</span>
      </div>
      <div class="r-oss-body">Curated sources, tuned detection, daily reports. Already running. Costs less than running it yourself.</div>
    </div>
  </div>

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

  <div class="r-pricing-graphic">
    <div class="r-pricing-card">
      <div class="r-pricing-tbd">TBD</div>
      <div class="r-pricing-explain">Subscription cost depends on waitlist interest. More signups means higher-quality models and a lower per-person cost.</div>
      <div class="r-pricing-guarantee">A subscription will cost less than running the pipeline yourself.</div>
    </div>

    <!-- Visual: demand bar -->
    <div class="r-demand-bar">
      <div class="r-demand-fill">
        <div class="r-demand-pulse"></div>
      </div>
      <div class="r-demand-labels">
        <span>More interest</span>
        <span>Better models · Lower cost</span>
      </div>
    </div>
  </div>
</div>

<!-- WAITLIST -->
<div class="r-section" id="waitlist">
  <div class="r-section-label">Early Access</div>
  <p>
    The pipeline is running. Join the waitlist for early access to daily reports, early signals, and cross-language coverage.
  </p>
  {% include research-waitlist-form.html %}
</div>

</div>

<script>
// Expandable step details
document.querySelectorAll('.r-step-compact').forEach(step => {
  step.addEventListener('click', () => {
    step.classList.toggle('r-step-open');
    const icon = step.querySelector('.r-step-expand');
    icon.textContent = step.classList.contains('r-step-open') ? '−' : '+';
  });
  step.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      step.click();
    }
  });
});

// Intersection Observer for scroll-triggered animations
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
