---
title: Research
layout: page
permalink: /research/
---
 
<link rel="stylesheet" href="{{ site.baseurl }}/research/research.css" />
 
<div class="research-page">
 
<!-- HERO -->
<div class="r-hero">
  <h2 class="r-fade r-fade-d1">Spot football's next tactical shift <span class="r-shimmer">before anyone else.</span></h2>
  <p class="r-sub-statement r-fade r-fade-d2">
    An automated research pipeline that monitors football sources in every language, every hour. It detects emerging tactical patterns and publishes citation-checked reports on what's actually changing in the sport.
  </p>
  <div class="r-hero-actions r-fade r-fade-d3">
    <div class="r-waitlist-form">
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/TacticsJournal"
        method="post"
        target="_blank"
      >
        <input type="hidden" name="tag" value="research-waitlist" />
        <input type="email" name="email" placeholder="Your email" required />
        <button type="submit">Join Waitlist</button>
      </form>
    </div>
  </div>
</div>
 
<!-- THE PROBLEM -->
<div class="r-section">
  <div class="r-section-label">The Problem</div>
  <p>
    Tactical ideas spread across languages and leagues faster than any person can follow. A pressing trigger shows up in German YouTube breakdowns, then French, then Portuguese — weeks before English-language coverage catches on. The information was there. It was just scattered across too many sources to connect.
  </p>
</div>
 
<!-- HOW IT WORKS -->
<div class="r-section">
  <div class="r-section-label">How It Works</div>
  <p>
    Three stages. Fully automated. Each building on the last.
  </p>
 
  <div class="r-flow">
    <div class="r-flow-node">
      <div class="r-flow-node-title">Ingest</div>
      <div class="r-flow-node-sub">148 sources · hourly</div>
    </div>
    <div class="r-flow-arrow">→</div>
    <div class="r-flow-node">
      <div class="r-flow-node-title">Detect</div>
      <div class="r-flow-node-sub">3-layer scoring</div>
    </div>
    <div class="r-flow-arrow">→</div>
    <div class="r-flow-node">
      <div class="r-flow-node-title">Report</div>
      <div class="r-flow-node-sub">Multi-agent, cited</div>
    </div>
  </div>
  <div class="r-flow-note">↻ Detection thresholds self-adjust every cycle.</div>
 
  <div style="margin-top: 36px;">
  <div class="r-step">
    <div class="r-step-num">01</div>
    <div>
      <div class="r-step-title">Ingest</div>
      <div class="r-step-body">
        Every hour, the pipeline pulls from 118 RSS feeds and 30 YouTube channels in every language. Articles are extracted in full text. Video transcripts are fetched and processed. Content is chunked, embedded, and stored with vector representations for semantic search.
      </div>
      <div class="r-tags">
        <span class="r-tag">RSS</span>
        <span class="r-tag">YouTube Transcripts</span>
        <span class="r-tag">Full-Text Extraction</span>
        <span class="r-tag">Vector Embeddings</span>
      </div>
    </div>
  </div>
 
  <div class="r-step">
    <div class="r-step-num">02</div>
    <div>
      <div class="r-step-title">Detect</div>
      <div class="r-step-body">
        Three detection layers run in sequence. A BERTrend-inspired weak-signal detector identifies emerging clusters. A tactical pattern extractor maps specific actor–action–zone combinations across the entire corpus. An LLM fallback catches what the algorithmic detectors miss. Each candidate is scored for novelty, source diversity, and growth trajectory.
      </div>
      <div class="r-tags">
        <span class="r-tag">Weak-Signal Detection</span>
        <span class="r-tag">Tactical Pattern Extraction</span>
        <span class="r-tag">Novelty Scoring</span>
        <span class="r-tag">Growth Tracking</span>
      </div>
    </div>
  </div>
 
  <div class="r-step">
    <div class="r-step-num">03</div>
    <div>
      <div class="r-step-title">Report</div>
      <div class="r-step-body">
        When a trend candidate clears the quality gate, a multi-agent research team activates. A lead researcher plans the investigation. Parallel sub-agents run independent research cycles. Their findings are synthesized, checked for citation accuracy, and revised into a final report. Every claim is traced back to its source.
      </div>
      <div class="r-tags">
        <span class="r-tag">Multi-Agent Research</span>
        <span class="r-tag">Citation Verification</span>
        <span class="r-tag">Quality Gates</span>
        <span class="r-tag">Automated Publishing</span>
      </div>
    </div>
  </div>
  </div>
</div>
 
<!-- WHAT YOU GET -->
<div class="r-section">
  <div class="r-section-label">What You Get</div>
  <p>
    One report per week is free for everyone. Subscribers get daily reports and full access to the archive.
  </p>
  <div class="r-step">
    <div class="r-step-num">01</div>
    <div>
      <div class="r-step-title">Daily Reports</div>
      <div class="r-step-body">
        One citation-checked report every day on an emerging tactical pattern. Each report traces the signal to its origin — which sources mentioned it first, how it spread, and why it matters.
      </div>
    </div>
  </div>
  <div class="r-step">
    <div class="r-step-num">02</div>
    <div>
      <div class="r-step-title">Early Signals</div>
      <div class="r-step-body">
        See what the pipeline is tracking before it becomes a full report. What's gaining momentum, what just appeared on the radar — before the English-language press picks it up.
      </div>
    </div>
  </div>
</div>
 
<!-- OPEN SOURCE -->
<div class="r-section">
  <div class="r-section-label">Open Source</div>
  <p>
    The entire pipeline is <a href="https://github.com/kyleboas/research" target="_blank" class="r-github-link"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg> open source on GitHub</a>. The code is free. What you're paying for is the curated source network, the tuned detection, and the daily reports.
  </p>
</div>
 
<!-- WAITLIST -->
<div class="r-section" id="waitlist">
  <div class="r-section-label">Join the Waitlist</div>
  <p>
    One free report per week. Subscribers get daily reports, early signals, and the full archive.
  </p>
  <div class="r-waitlist-form">
    <form
      action="https://buttondown.com/api/emails/embed-subscribe/TacticsJournal"
      method="post"
      target="_blank"
    >
      <input type="hidden" name="tag" value="research-waitlist" />
      <input type="email" name="email" placeholder="Your email" required />
      <button type="submit">Join Waitlist</button>
    </form>
  </div>
</div>
 
</div>