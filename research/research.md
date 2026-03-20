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
  <p class="r-sub-statement r-fade r-fade-d2">Spot trends in football before they become popular.</p>
  <div class="r-hero-actions r-fade r-fade-d3">
    {% include research-waitlist-form.html %}
  </div>
  {% include research-source-marquee.html %}
</div>

<!-- THE PROBLEM -->
<div class="r-section">
  <div class="r-section-label">The Problem</div>
  <p>
    Football tactics travel faster than anyone can follow. A manager changes shape mid-match in LaLiga. A defensive structure appears independently at three clubs across two leagues. A pressing trigger starts showing up in YouTube breakdowns in German, then French, then Portuguese — weeks before it surfaces in English-language coverage.
  </p>
  <p>
    No person can read 118 RSS feeds, watch 33 YouTube channels, and process press conferences, interviews, and analysis in eight languages. By the time a tactical trend is widely discussed, it has already been adopted. The information existed earlier. It was just scattered across too many sources for any individual to connect.
  </p>
  <div class="r-card">
    <div class="r-card-label">From the Research Pipeline — Live</div>
    <p>
      The source network now covers 151 configured outlets: 118 RSS feeds and 33 YouTube channels. Every source is tagged by frontier vs. mainstream status, football culture, and format so the detector can surface ideas that are spreading in one part of the game before the big outlets package them for everyone else.
    </p>
  </div>
</div>

<!-- HOW IT WORKS -->
<div class="r-section">
  <div class="r-section-label">How It Works</div>
  <p>
    The research pipeline runs continuously. Three stages, fully automated, each building on the last.
  </p>

  <div class="r-flow">
    <div class="r-flow-node">
      <div class="r-flow-node-title">Ingest</div>
      <div class="r-flow-node-sub">151 sources · hourly</div>
    </div>
    <div class="r-flow-arrow">→</div>
    <div class="r-flow-node">
      <div class="r-flow-node-title">Detect</div>
      <div class="r-flow-node-sub">Frontier-gap + weak-signal</div>
    </div>
    <div class="r-flow-arrow">→</div>
    <div class="r-flow-node">
      <div class="r-flow-node-title">Report</div>
      <div class="r-flow-node-sub">Finding-first, cited</div>
    </div>
  </div>
  <div class="r-flow-note">↻ A separate autoresearch loop evaluates ingest, detect, and report policy changes and applies them when the evidence is good enough.</div>

  <div style="margin-top: 36px;">
  <div class="r-step">
    <div class="r-step-num">01</div>
    <div>
      <div class="r-step-title">Ingest</div>
      <div class="r-step-body">
        Every hour, the pipeline pulls from 118 RSS feeds and 33 YouTube channels across eight languages. RSS items are fetched directly, long-form article text and video transcripts are extracted, and every source is tagged with metadata about tier, culture, and format before it is chunked and embedded for retrieval. It reads what the best analysts read — in every language they write in.
      </div>
      <div class="r-tags">
        <span class="r-tag">RSS</span>
        <span class="r-tag">YouTube Transcripts</span>
        <span class="r-tag">Full-Text Extraction</span>
        <span class="r-tag">Source Taxonomy</span>
        <span class="r-tag">Vector Embeddings</span>
      </div>
    </div>
  </div>

  <div class="r-step">
    <div class="r-step-num">02</div>
    <div>
      <div class="r-step-title">Detect</div>
      <div class="r-step-body">
        Two complementary detectors run before report generation. A frontier-gap detector looks for ideas circulating across independent frontier sources before they cross into mainstream coverage. A BERTrend-inspired weak-signal detector clusters the corpus over time and tracks what is actually accelerating. Candidates are then rescored for novelty, source diversity, cross-culture spread, and spoken primary-source evidence from press conferences, interviews, and podcasts.
      </div>
      <div class="r-tags">
        <span class="r-tag">Frontier Gap Detection</span>
        <span class="r-tag">Weak-Signal Clustering</span>
        <span class="r-tag">Novelty Scoring</span>
        <span class="r-tag">Cross-Culture Scoring</span>
        <span class="r-tag">Spoken Primary Sources</span>
      </div>
    </div>
  </div>

  <div class="r-step">
    <div class="r-step-num">03</div>
    <div>
      <div class="r-step-title">Report</div>
      <div class="r-step-body">
        When a candidate clears the quality gate, a multi-agent research team activates. A lead researcher decomposes the question, parallel sub-agents investigate the evidence, spread, mechanism, and counterevidence, and a synthesis pass turns the work into a finding-first report. Then a dedicated citation pass checks every non-obvious claim before final revision. Every claim is traced back to its source.
      </div>
      <div class="r-tags">
        <span class="r-tag">Multi-Agent Research</span>
        <span class="r-tag">Finding-First Reports</span>
        <span class="r-tag">Citation Verification</span>
        <span class="r-tag">Quality Gates</span>
        <span class="r-tag">Automated Publishing</span>
      </div>
    </div>
  </div>
  </div>
</div>

<!-- SELF-IMPROVING -->
<div class="r-section">
  <div class="r-section-label">Self-Improving</div>
  <p>
    The pipeline doesn't just run — it tunes itself. A separate autoresearch loop evaluates ingest policy, detect policy, and report policy from observed outcomes, then applies changes only when they improve the baseline. That means the source-overlap windows, report gates, and report-generation parameters keep moving toward better quality without requiring a human to babysit every knob.
  </p>
  <div class="r-card">
    <div class="r-card-label">Hourly Autoresearch Loop</div>
    <p>
      Ingest policy optimization uses historical source lag and volume. Detect policy evaluation replays candidate decisions without paid model calls. Report policy optimization simulates quality and cost tradeoffs, enforces a per-report budget target, and only writes a new live policy when it beats the current one.
    </p>
  </div>
</div>

<!-- WHAT YOU GET -->
<div class="r-section">
  <div class="r-section-label">What You Get</div>
  <p>
    The main Tactics Journal blog remains written by Kyle Boas — observation, analysis, argument built brick by brick. The research section is different. It's what the pipeline sees across 151 sources that no individual could track alone.
  </p>
  <p>
    One new report publishes every day. One report per week is free to read. Full access to the daily reports, early signals, and the complete archive is available to subscribers.
  </p>
  <div class="r-step">
    <div class="r-step-num">01</div>
    <div>
      <div class="r-step-title">Daily Trend Reports</div>
      <div class="r-step-body">
        One full-length, citation-checked report every day on an emerging idea, method, or tactical pattern detected across the source network. Each report traces the signal back to its origin — which frontier sources surfaced it first, how it spread across cultures, and why it matters. One report per week is free. Reports publish at <span class="r-mono">/research/year/month/day/title/</span>
      </div>
    </div>
  </div>
  <div class="r-step">
    <div class="r-step-num">02</div>
    <div>
      <div class="r-step-title">Early Signals</div>
      <div class="r-step-body">
        Access to trend candidates before they become full reports. See what the pipeline is tracking, what's gaining momentum, and what just appeared on the radar — before the English-language press picks it up.
      </div>
    </div>
  </div>
  <div class="r-step">
    <div class="r-step-num">03</div>
    <div>
      <div class="r-step-title">Cross-Language Coverage</div>
      <div class="r-step-body">
        The pipeline reads more football analysis in a day than any person could read in a month. English, Spanish, French, German, Portuguese, Italian, Dutch, and Arabic — you get the patterns that emerge from that volume.
      </div>
    </div>
  </div>
</div>

<!-- SOURCES -->
<div class="r-section">
  <div class="r-section-label">Sources</div>
  <p>
    The pipeline reads what the best analysts read — and everything they don't have time to. Sources span eight languages, every major European league, and both written analysis and video breakdowns.
  </p>

  <div class="r-stat-grid">
    <div class="r-stat-card">
      <div class="r-stat-num">151</div>
      <div class="r-stat-label">Sources Monitored</div>
      <div class="r-stat-sub">118 RSS · 33 YouTube</div>
    </div>
    <div class="r-stat-card">
      <div class="r-stat-num">3</div>
      <div class="r-stat-label">Source Dimensions</div>
      <div class="r-stat-sub">Tier · culture · format</div>
    </div>
    <div class="r-stat-card">
      <div class="r-stat-num">8</div>
      <div class="r-stat-label">Languages</div>
    </div>
  </div>

  <div class="r-card">
    <div class="r-card-label">Written Analysis</div>
    <p>
      The Athletic, Coaches' Voice, StatsBomb, Tifo, Spielverlagerung, Total Football Analysis, Between The Posts, Analytics United, and 100+ independent analysts on Substack and personal sites.
    </p>
  </div>

  <div class="r-card">
    <div class="r-card-label">Video Sources</div>
    <p>
      Tifo Football, Statman Dave, Football Made Simple, Premier League, LaLiga, Serie A, Bundesliga, L'Équipe, El Chiringuito TV, beIN SPORTS Arabic, NOS Sport, DAZN Italia, Sky Sport Italia — transcripts extracted and processed for tactical content.
    </p>
  </div>

  <div class="r-card">
    <div class="r-card-label">Languages</div>
    <p>
      English, Spanish, French, German, Portuguese, Italian, Dutch, and Arabic. Press conferences, post-match analysis, tactical breakdowns, and transfer reporting from across European football — not just the Premier League bubble.
    </p>
  </div>

  <p class="r-audience">
    For individuals, analysts, coaches, and clubs who want to see what's happening before it's obvious.
  </p>
</div>

<!-- OPEN SOURCE -->
<div class="r-section">
  <div class="r-section-label">Open Source</div>
  <p>
    The entire research pipeline is open source. You can inspect how it works, run it yourself, or adapt it for your own sources and use case.
  </p>
  <div class="r-card">
    <div class="r-card-label">GitHub Repository</div>
    <p>
      The pipeline code, detection algorithms, report generation logic, and self-tuning harness are all public. Clone the repo, configure your own feeds and API keys, and run your own instance. Full setup instructions included.
    </p>
    <p style="margin-top: 8px;">
      <a href="https://github.com/kyleboas/research" target="_blank" class="r-github-link">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        View on GitHub
      </a>
    </p>
  </div>
  <p>
    What you're paying for with a subscription is not the software — it's the curated source network, the tuned detection policies, the daily reports, and the fact that it's already running. The code is free. The intelligence is the product.
  </p>
</div>

<!-- WAITLIST -->
<div class="r-section" id="waitlist">
  <div class="r-section-label">Early Access</div>
  <p>
    The pipeline is already running. Early access opens to the waitlist first — daily reports, early signals, and cross-language coverage before it's public.
  </p>
  {% include research-waitlist-form.html %}
</div>

</div>
