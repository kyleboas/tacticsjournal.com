---
title: Research
layout: page
---

<style>
/* Research page layout */
.research-page { max-width: 100%; margin: 0; padding: 0; }
.page > h1 { display: none; }

/* Section structure: left label + right content */
.r-section {
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 0 24px;
  padding: 48px 0;
  border-top: 1px solid #ddd;
}
.r-section:first-child { border-top: none; padding-top: 24px; }

.r-label {
  font-size: 10px;
  letter-spacing: 2.5px;
  text-transform: uppercase;
  color: #999;
  padding-top: 4px;
  font-family: Helvetica, Arial, sans-serif;
}

.r-content p {
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 20px;
  color: #333;
}
.r-content p:last-child { margin-bottom: 0; }

/* Hero — full bleed, no label column */
.r-hero {
  display: block;
  padding: 32px 0 40px;
  border-top: none;
}

.r-hero-statement {
  font-size: 22px;
  line-height: 1.45;
  font-weight: bold;
  color: #111;
  margin-bottom: 16px;
}

@media screen and (min-width: 570px) {
  .r-hero-statement { font-size: 26px; line-height: 1.4; }
}
@media screen and (min-width: 1000px) {
  .r-hero-statement { font-size: 30px; line-height: 1.35; }
}

.r-sub-statement {
  font-size: 15px;
  color: #666;
  line-height: 1.65;
  margin-bottom: 0;
}

/* Divider line */
.r-divider {
  width: 36px;
  height: 2px;
  background: #333;
  margin: 20px 0 0 0;
}

/* Hero CTA */
.r-hero-cta {
  font-size: 13px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-top: 16px;
  font-family: Helvetica, Arial, sans-serif;
}
.r-hero-cta a {
  color: #333;
  text-decoration: none;
  border-bottom: 1px solid #333;
  padding-bottom: 1px;
}
.r-hero-cta a:hover { color: #000; }

/* Numbered items */
.r-step {
  display: grid;
  grid-template-columns: 28px 1fr;
  gap: 0 16px;
  margin-bottom: 28px;
}
.r-step:last-child { margin-bottom: 0; }

.r-step-num {
  font-size: 11px;
  letter-spacing: 1px;
  color: #999;
  padding-top: 3px;
  font-family: Helvetica, Arial, sans-serif;
}

.r-step-title {
  font-size: 16px;
  font-weight: bold;
  color: #222;
  margin-bottom: 6px;
}

.r-step-body {
  font-size: 15px;
  line-height: 1.65;
  color: #555;
}

/* Source callout boxes */
.r-callout {
  border: 1px solid #ddd;
  border-left: 3px solid #222;
  padding: 20px 24px;
  margin: 24px 0;
}

.r-callout-ref {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 10px;
  font-family: Helvetica, Arial, sans-serif;
}

.r-callout p {
  font-size: 15px;
  line-height: 1.6;
  color: #444;
  margin-bottom: 12px;
}
.r-callout p:last-child { margin-bottom: 0; }

/* Source cards grid */
.r-source-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 24px 0;
}

.r-source-card {
  border: 1px solid #ddd;
  padding: 20px;
}

.r-source-card-count {
  font-size: 24px;
  font-weight: bold;
  color: #111;
  margin-bottom: 2px;
}

.r-source-card-label {
  font-size: 11px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #999;
  font-family: Helvetica, Arial, sans-serif;
}

.r-source-card-breakdown {
  font-size: 11px;
  color: #aaa;
  margin-top: 6px;
  letter-spacing: 0.5px;
  font-family: Helvetica, Arial, sans-serif;
}

/* Tags / pills */
.r-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0;
}

.r-tag {
  font-size: 11px;
  letter-spacing: 0.5px;
  color: #555;
  border: 1px solid #ccc;
  padding: 4px 12px;
  font-family: Helvetica, Arial, sans-serif;
}

/* Waitlist form — minimal, matches blog subscribe style */
.r-waitlist-form {
  margin-top: 24px;
}

.r-waitlist-form form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  max-width: 400px;
  border-bottom: 1px solid #333;
  padding-bottom: 0;
}

.r-waitlist-form input[type="email"] {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  padding: 10px 0;
  border: none;
  background: transparent;
  color: #333;
  flex: 1;
  outline: none;
  box-sizing: border-box;
}

.r-waitlist-form input[type="email"]::placeholder {
  color: #aaa;
}

.r-waitlist-form button {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 10px 0 10px 16px;
  background: transparent;
  color: #333;
  border: none;
  cursor: pointer;
  flex-shrink: 0;
  white-space: nowrap;
}
.r-waitlist-form button:hover { color: #000; }

/* Audience line */
.r-audience {
  font-size: 13px;
  letter-spacing: 1px;
  color: #999;
  margin-top: 32px;
}

/* Pipeline flow diagram */
.r-flow {
  display: flex;
  align-items: flex-start;
  gap: 0;
  margin: 28px 0;
  flex-wrap: wrap;
}

.r-flow-node {
  border: 1px solid #ddd;
  padding: 12px 20px;
  min-width: 100px;
  text-align: center;
}

.r-flow-node-title {
  font-size: 13px;
  font-weight: bold;
  color: #222;
  margin-bottom: 4px;
  font-family: Helvetica, Arial, sans-serif;
}

.r-flow-node-sub {
  font-size: 11px;
  color: #999;
  letter-spacing: 0.5px;
  font-family: Helvetica, Arial, sans-serif;
}

.r-flow-arrow {
  font-size: 16px;
  color: #bbb;
  padding: 12px 6px 0;
  flex-shrink: 0;
}

.r-flow-note {
  font-size: 11px;
  color: #999;
  letter-spacing: 1px;
  margin-top: 12px;
  font-family: Helvetica, Arial, sans-serif;
}

/* Mobile: collapse to single column */
@media screen and (max-width: 569px) {
  .r-section {
    grid-template-columns: 1fr;
    gap: 8px 0;
    padding: 32px 0;
  }
  .r-label {
    margin-bottom: 4px;
  }
  .r-source-grid {
    grid-template-columns: 1fr;
  }
  .r-hero-statement {
    font-size: 20px;
  }
  .r-flow {
    flex-direction: column;
    align-items: stretch;
    gap: 0;
  }
  .r-flow-arrow {
    transform: rotate(90deg);
    padding: 4px 0;
    text-align: center;
  }
  .r-flow-node {
    min-width: auto;
  }
  .r-waitlist-form form {
    max-width: 100%;
  }
}
</style>

<div class="research-page">

<!-- HERO — full bleed, no label column -->
<div class="r-hero">
  <div class="r-hero-statement">
    A tactical shift happens in Serie A. A pressing pattern emerges in the Bundesliga. A youth coach in Portugal tries something no one has named yet. You will read about it in English in three weeks. This pipeline reads about it now.
  </div>
  <p class="r-sub-statement">
    The Tactics Journal Research Pipeline monitors 148 football sources across eight languages, every hour. It detects emerging tactical patterns before they become popular and publishes citation-checked reports on what's actually changing in the sport.
  </p>
  <div class="r-divider"></div>
  <div class="r-waitlist-form" style="margin-top: 20px;">
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

<!-- THE PROBLEM -->
<div class="r-section">
  <div class="r-label">The Problem</div>
  <div class="r-content">
    <p>
      Football tactics travel faster than anyone can follow. A manager changes shape mid-match in LaLiga. A defensive structure appears independently at three clubs across two leagues. A pressing trigger starts showing up in YouTube breakdowns in German, then French, then Portuguese — weeks before it surfaces in English-language coverage.
    </p>
    <p>
      No person can read 118 RSS feeds, watch 30 YouTube channels, and process press conferences in eight languages. By the time a tactical trend is widely discussed, it has already been adopted. The information existed earlier. It was just scattered across too many sources for any individual to connect.
    </p>
    <div class="r-callout">
      <div class="r-callout-ref">From the Research Pipeline — Live</div>
      <p>
        The system currently tracks 1,491 ingested sources, has identified 557 distinct tactical patterns, and scores each for novelty against a historical baseline. When a signal reaches sufficient strength across independent sources, a multi-agent research team produces a full report — automatically.
      </p>
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<div class="r-section">
  <div class="r-label">How It Works</div>
  <div class="r-content">
    <p>
      The research pipeline runs continuously. Three stages, fully automated, each building on the last.
    </p>

    <div class="r-flow">
      <div class="r-flow-node">
        <div class="r-flow-node-title">Ingest</div>
        <div class="r-flow-node-sub">148 sources · hourly</div>
      </div>
      <div class="r-flow-arrow">→</div>
      <div class="r-flow-node">
        <div class="r-flow-node-title">Detect</div>
        <div class="r-flow-node-sub">3-layer signal scoring</div>
      </div>
      <div class="r-flow-arrow">→</div>
      <div class="r-flow-node">
        <div class="r-flow-node-title">Report</div>
        <div class="r-flow-node-sub">Multi-agent, cited</div>
      </div>
    </div>
    <div class="r-flow-note">↻ The pipeline evaluates and adjusts its own detection thresholds every cycle.</div>

    <div style="margin-top: 32px;">
    <div class="r-step">
      <div class="r-step-num">01</div>
      <div>
        <div class="r-step-title">Ingest</div>
        <div class="r-step-body">
          Every hour, the pipeline pulls from 118 RSS feeds and 30 YouTube channels across eight languages. Articles are extracted in full text. Video transcripts are fetched and processed. Content is chunked, embedded, and stored with vector representations for semantic search. It reads what the best analysts read — in every language they write in.
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
          Three detection layers run in sequence. A BERTrend-inspired weak-signal detector identifies emerging clusters. A tactical pattern extractor maps specific actor–action–zone combinations across the entire corpus. An LLM fallback catches what the algorithmic detectors miss. Each candidate is scored for novelty, source diversity, and growth trajectory — surfacing the patterns that are gaining traction before they become mainstream.
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
          When a trend candidate clears the quality gate, a multi-agent research team activates. A lead researcher plans the investigation. Parallel sub-agents run independent research cycles. Their findings are synthesized, checked for citation accuracy, and revised into a final report — all without human intervention. Every claim is traced back to its source.
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
</div>

<!-- SELF-IMPROVING -->
<div class="r-section">
  <div class="r-label">Self-Improving</div>
  <div class="r-content">
    <p>
      The pipeline doesn't just run — it gets better. Every hour, it measures what it missed, what it flagged too early, and what it got right. Detection thresholds tighten. Source weighting shifts. Report quality is scored and the generation parameters are adjusted. It is, at the point you are reading this, better than it was when this page was first published.
    </p>
    <div class="r-callout">
      <div class="r-callout-ref">Pipeline Self-Tuning</div>
      <p>
        If the detection layer consistently flags a pattern that reports find unsupported, the confidence threshold for that pattern type is automatically raised. The system penalizes its own false positives. No manual tuning required.
      </p>
    </div>
  </div>
</div>

<!-- WHAT YOU GET -->
<div class="r-section">
  <div class="r-label">What You Get</div>
  <div class="r-content">
    <p>
      The main Tactics Journal blog remains written by Kyle Boas — observation, analysis, argument built brick by brick. The research section is different. It's what the pipeline sees across 148 sources that no individual could track alone.
    </p>
    <p>
      One new report publishes every day. One report per week is free to read. Full access to the daily reports, early signals, and the complete archive is available to subscribers.
    </p>
    <div class="r-step">
      <div class="r-step-num">01</div>
      <div>
        <div class="r-step-title">Daily Trend Reports</div>
        <div class="r-step-body">
          One full-length, citation-checked report every day on an emerging tactical pattern detected across the source network. Each report traces the signal back to its origin — which sources mentioned it first, how it spread, and why it matters. One report per week is free. Reports publish at <span style="font-family: Helvetica, Arial, sans-serif; font-size: 13px; color: #666;">/research/year/month/day/title/</span>
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
</div>

<!-- SOURCES -->
<div class="r-section">
  <div class="r-label">Sources</div>
  <div class="r-content">
    <p>
      The pipeline reads what the best analysts read — and everything they don't have time to. Sources span eight languages, every major European league, and both written analysis and video breakdowns.
    </p>

    <div class="r-source-grid">
      <div class="r-source-card">
        <div class="r-source-card-count">148</div>
        <div class="r-source-card-label">Sources Monitored</div>
        <div class="r-source-card-breakdown">118 RSS · 30 YouTube</div>
      </div>
      <div class="r-source-card">
        <div class="r-source-card-count">557</div>
        <div class="r-source-card-label">Tactical Patterns</div>
      </div>
      <div class="r-source-card">
        <div class="r-source-card-count">8</div>
        <div class="r-source-card-label">Languages</div>
      </div>
    </div>

    <div class="r-callout">
      <div class="r-callout-ref">Written Analysis</div>
      <p>
        The Athletic, Coaches' Voice, StatsBomb, Tifo, Spielverlagerung, Total Football Analysis, Between The Posts, Analytics United, and 100+ independent analysts on Substack and personal sites.
      </p>
    </div>

    <div class="r-callout">
      <div class="r-callout-ref">Video Sources</div>
      <p>
        Tifo Football, Statman Dave, Football Made Simple, Premier League, LaLiga, Serie A, Bundesliga, L'Équipe, El Chiringuito TV, beIN SPORTS Arabic — transcripts extracted and processed for tactical content.
      </p>
    </div>

    <div class="r-callout">
      <div class="r-callout-ref">Languages</div>
      <p>
        English, Spanish, French, German, Portuguese, Italian, Dutch, and Arabic. Press conferences, post-match analysis, tactical breakdowns, and transfer reporting from across European football — not just the Premier League bubble.
      </p>
    </div>

    <p class="r-audience">
      For individuals, analysts, coaches, and clubs who want to see what's happening before it's obvious.
    </p>
  </div>
</div>

<!-- OPEN SOURCE -->
<div class="r-section">
  <div class="r-label">Open Source</div>
  <div class="r-content">
    <p>
      The entire research pipeline is open source. You can inspect how it works, run it yourself, or adapt it for your own sources and use case.
    </p>
    <div class="r-callout">
      <div class="r-callout-ref">GitHub Repository</div>
      <p>
        The pipeline code, detection algorithms, report generation logic, and self-tuning harness are all public. Clone the repo, configure your own feeds and API keys, and run your own instance. Full setup instructions included.
      </p>
      <p style="margin-top: 8px;">
        <a href="https://github.com/kyleboas/research" target="_blank" style="font-size: 12px; letter-spacing: 1.5px; text-transform: uppercase; color: #333; text-decoration: none; font-family: Helvetica, Arial, sans-serif; border-bottom: 1px solid #333; padding-bottom: 1px;">View on GitHub →</a>
      </p>
    </div>
    <p>
      What you're paying for with a subscription is not the software — it's the curated source network, the tuned detection policies, the daily reports, and the fact that it's already running. The code is free. The intelligence is the product.
    </p>
  </div>
</div>

<!-- WAITLIST -->
<div class="r-section" id="waitlist">
  <div class="r-label">Early Access</div>
  <div class="r-content">
    <p>
      The pipeline is already running. Early access opens to the waitlist first — daily reports, early signals, and cross-language coverage before it's public.
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

</div>
