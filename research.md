---
title: Research
layout: page
---

<style>
/* ==========================================================================
   Research Page — Phodex-inspired design
   Geist font, animations, pill buttons, spacious layout
   Light + Dark theme via prefers-color-scheme
   ========================================================================== */

/* ---- THEME TOKENS ---- */
.research-page {
  /* Light (default) */
  --r-bg: #ffffff;
  --r-text: #111111;
  --r-text-secondary: #555555;
  --r-text-muted: #999999;
  --r-text-faint: #bbbbbb;
  --r-border: rgba(0,0,0,0.08);
  --r-border-hover: rgba(0,0,0,0.2);
  --r-border-input: rgba(0,0,0,0.12);
  --r-border-input-focus: rgba(0,0,0,0.3);
  --r-btn-bg: #111111;
  --r-btn-text: #ffffff;
  --r-btn-secondary-bg: rgba(255,255,255,0.8);
  --r-btn-secondary-border: rgba(0,0,0,0.15);
  --r-btn-secondary-hover-border: rgba(0,0,0,0.35);
  --r-btn-secondary-hover-bg: rgba(0,0,0,0.03);
  --r-tag-border: rgba(0,0,0,0.1);
  --r-tag-hover: rgba(0,0,0,0.3);
  --r-mono-bg: rgba(0,0,0,0.03);
  --r-shimmer-base: #999999;
  --r-shimmer-flash: #111111;
}

@media (prefers-color-scheme: dark) {
  .research-page {
    --r-bg: #0a0a0a;
    --r-text: #fafafa;
    --r-text-secondary: #a1a1a1;
    --r-text-muted: #737373;
    --r-text-faint: #525252;
    --r-border: rgba(255,255,255,0.08);
    --r-border-hover: rgba(255,255,255,0.2);
    --r-border-input: rgba(255,255,255,0.12);
    --r-border-input-focus: rgba(255,255,255,0.3);
    --r-btn-bg: #fafafa;
    --r-btn-text: #0a0a0a;
    --r-btn-secondary-bg: rgba(10,10,10,0.8);
    --r-btn-secondary-border: rgba(255,255,255,0.15);
    --r-btn-secondary-hover-border: rgba(255,255,255,0.35);
    --r-btn-secondary-hover-bg: rgba(255,255,255,0.05);
    --r-tag-border: rgba(255,255,255,0.1);
    --r-tag-hover: rgba(255,255,255,0.3);
    --r-mono-bg: rgba(255,255,255,0.05);
    --r-shimmer-base: #737373;
    --r-shimmer-flash: #fafafa;
  }
}

/* Font override for research page */
.research-page,
.research-page * {
  font-family: 'Geist', sans-serif;
}

.research-page { max-width: 100%; margin: 0; padding: 0; }
.page > h1 { display: none; }

/* Dark mode: paint background on the entire page chrome */
@media (prefers-color-scheme: dark) {
  body:has(.research-page) {
    background: #0a0a0a;
    color: #fafafa;
  }
  body:has(.research-page) header { border-color: rgba(255,255,255,0.1); }
  body:has(.research-page) .blog-title a,
  body:has(.research-page) .blog-author { color: #fafafa; }
  body:has(.research-page) .blog-slogan { color: #737373; }
  body:has(.research-page) .subscribe-section input[type="email"] { color: #fafafa; }
  body:has(.research-page) .subscribe-section input[type="email"]::placeholder { color: #525252; }
  body:has(.research-page) .front-page-content,
  body:has(.research-page) .entry,
  body:has(.research-page) .page,
  body:has(.research-page) article { background: transparent; }
  body:has(.research-page) .subscribe-section { border-color: rgba(255,255,255,0.1); }
  body:has(.research-page) .site-avatar img { filter: brightness(0) invert(1); }
  body:has(.research-page) #subscribeButton svg path { stroke: #fafafa; }
}

/* Fade-in animation */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

.r-fade {
  opacity: 0;
  animation: fadeUp 0.6s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
.r-fade-d1 { animation-delay: 0.1s; }
.r-fade-d2 { animation-delay: 0.2s; }
.r-fade-d3 { animation-delay: 0.3s; }
.r-fade-d4 { animation-delay: 0.4s; }

/* Shimmer animation for accent text */
@keyframes shimmer {
  0%  { background-position: 200% center; }
  to  { background-position: -200% center; }
}

.r-shimmer {
  background: linear-gradient(90deg, var(--r-shimmer-base) 0%, var(--r-shimmer-base) 40%, var(--r-shimmer-flash) 50%, var(--r-shimmer-base) 60%, var(--r-shimmer-base) 100%);
  -webkit-text-fill-color: transparent;
  background-size: 200% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shimmer 3s linear infinite;
}

/* ---- HERO ---- */
.r-hero {
  display: block;
  padding: 48px 0 56px;
  border-top: none;
}

.r-hero h1 {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--r-text-muted);
  margin-bottom: 20px;
}

.r-hero h2 {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  line-height: 1.2;
  font-weight: 700;
  letter-spacing: -0.025em;
  color: var(--r-text);
  margin-bottom: 20px;
}

.r-sub-statement {
  font-size: 15px;
  color: var(--r-text-secondary);
  line-height: 1.7;
  margin-bottom: 0;
  max-width: 540px;
}

/* ---- PILL BUTTONS (phodex style) ---- */
.r-btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  border-radius: 9999px;
  background: var(--r-btn-bg);
  color: var(--r-btn-text);
  padding: 0 28px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Geist', sans-serif;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.r-btn-primary:hover { opacity: 0.85; }

.r-btn-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 44px;
  border-radius: 9999px;
  border: 1px solid var(--r-btn-secondary-border);
  background: var(--r-btn-secondary-bg);
  color: var(--r-text-secondary);
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Geist', sans-serif;
  text-decoration: none;
  cursor: pointer;
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
              background-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.r-btn-secondary:hover {
  border-color: var(--r-btn-secondary-hover-border);
  background: var(--r-btn-secondary-hover-bg);
}

.r-hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
  align-items: center;
}

/* ---- BADGE / PILL (phodex style) ---- */
.r-badge {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--r-border-input);
  border-radius: 9999px;
  padding: 5px 14px;
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--r-text-muted);
  font-weight: 500;
}

/* ---- SECTIONS ---- */
.r-section {
  padding: 56px 0;
  border-top: 1px solid var(--r-border);
}
.r-section:first-child { border-top: none; }

.r-section-label {
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--r-text-muted);
  margin-bottom: 20px;
}

.r-section-title {
  font-size: clamp(1.2rem, 2vw, 1.5rem);
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--r-text);
  margin-bottom: 16px;
  line-height: 1.3;
}

.r-section p {
  font-size: 15px;
  line-height: 1.7;
  color: var(--r-text-secondary);
  margin-bottom: 20px;
}
.r-section p:last-child { margin-bottom: 0; }

/* ---- CARDS ---- */
.r-card {
  border: 1px solid var(--r-border);
  border-radius: 12px;
  padding: 24px;
  margin: 20px 0;
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.r-card:hover { border-color: var(--r-border-hover); }

.r-card-label {
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--r-text-muted);
  margin-bottom: 12px;
  font-weight: 500;
}

.r-card p {
  font-size: 15px;
  line-height: 1.65;
  color: var(--r-text-secondary);
  margin-bottom: 12px;
}
.r-card p:last-child { margin-bottom: 0; }

/* ---- STAT CARDS ---- */
.r-stat-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 28px 0;
}

.r-stat-card {
  border: 1px solid var(--r-border);
  border-radius: 12px;
  padding: 24px 20px;
  text-align: center;
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.r-stat-card:hover { border-color: var(--r-border-hover); }

.r-stat-num {
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: var(--r-text);
  margin-bottom: 4px;
}

.r-stat-label {
  font-size: 10px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--r-text-muted);
  font-weight: 500;
}

.r-stat-sub {
  font-size: 11px;
  color: var(--r-text-faint);
  margin-top: 6px;
  font-family: 'Geist Mono', monospace;
}

/* ---- FLOW DIAGRAM ---- */
.r-flow {
  display: flex;
  align-items: center;
  gap: 0;
  margin: 28px 0;
  flex-wrap: wrap;
}

.r-flow-node {
  border: 1px solid var(--r-border);
  border-radius: 10px;
  padding: 14px 24px;
  min-width: 110px;
  text-align: center;
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.r-flow-node:hover { border-color: var(--r-border-hover); }

.r-flow-node-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--r-text);
  margin-bottom: 4px;
}

.r-flow-node-sub {
  font-size: 11px;
  color: var(--r-text-muted);
  font-family: 'Geist Mono', monospace;
}

.r-flow-arrow {
  font-size: 16px;
  color: var(--r-text-faint);
  padding: 0 8px;
  flex-shrink: 0;
}

.r-flow-note {
  font-size: 12px;
  color: var(--r-text-muted);
  margin-top: 12px;
  font-family: 'Geist Mono', monospace;
}

/* ---- STEPS ---- */
.r-step {
  display: grid;
  grid-template-columns: 32px 1fr;
  gap: 0 14px;
  margin-bottom: 32px;
}
.r-step:last-child { margin-bottom: 0; }

.r-step-num {
  font-size: 12px;
  font-weight: 500;
  color: var(--r-text-faint);
  padding-top: 2px;
  font-family: 'Geist Mono', monospace;
}

.r-step-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--r-text);
  margin-bottom: 6px;
}

.r-step-body {
  font-size: 14px;
  line-height: 1.7;
  color: var(--r-text-secondary);
}

/* ---- TAGS / PILLS ---- */
.r-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 14px 0;
}

.r-tag {
  font-size: 11px;
  letter-spacing: 0.03em;
  color: var(--r-text-muted);
  border: 1px solid var(--r-tag-border);
  border-radius: 9999px;
  padding: 4px 12px;
  font-family: 'Geist', sans-serif;
  font-weight: 500;
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.r-tag:hover { border-color: var(--r-tag-hover); }

/* ---- WAITLIST FORM (pill style) ---- */
.r-waitlist-form {
  margin-top: 0;
}

.r-waitlist-form form {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0;
  max-width: 400px;
  border: 1px solid var(--r-border-input);
  border-radius: 9999px;
  padding: 4px 4px 4px 20px;
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.r-waitlist-form form:focus-within {
  border-color: var(--r-border-input-focus);
}

.r-waitlist-form input[type="email"] {
  font-family: 'Geist', sans-serif;
  font-size: 14px;
  padding: 8px 0;
  border: none;
  background: transparent;
  color: var(--r-text);
  flex: 1;
  outline: none;
  box-sizing: border-box;
  min-width: 0;
}

.r-waitlist-form input[type="email"]::placeholder {
  color: var(--r-text-faint);
}

.r-waitlist-form button {
  font-family: 'Geist', sans-serif;
  font-size: 13px;
  font-weight: 500;
  padding: 8px 20px;
  background: var(--r-btn-bg);
  color: var(--r-btn-text);
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  flex-shrink: 0;
  white-space: nowrap;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.r-waitlist-form button:hover { opacity: 0.85; }

/* ---- GITHUB LINK ---- */
.r-github-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 500;
  color: var(--r-text-secondary);
  text-decoration: none;
  border: 1px solid var(--r-border-input);
  border-radius: 9999px;
  padding: 8px 18px;
  font-family: 'Geist', sans-serif;
  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1),
              color 0.15s cubic-bezier(0.4, 0, 0.2, 1);
}
.r-github-link:hover {
  border-color: var(--r-border-hover);
  color: var(--r-text);
}
.r-github-link svg { flex-shrink: 0; }

/* ---- AUDIENCE LINE ---- */
.r-audience {
  font-size: 13px;
  color: var(--r-text-muted);
  margin-top: 32px;
  font-style: italic;
}

/* URL pattern */
.r-mono {
  font-family: 'Geist Mono', monospace;
  font-size: 12px;
  color: var(--r-text-muted);
  background: var(--r-mono-bg);
  padding: 2px 8px;
  border-radius: 4px;
}

/* ---- RESPONSIVE ---- */
@media screen and (max-width: 569px) {
  .r-hero { padding: 32px 0 40px; }
  .r-section { padding: 40px 0; }
  .r-stat-grid { grid-template-columns: 1fr; }
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
  .r-flow-node { min-width: auto; }
  .r-waitlist-form form { max-width: 100%; }
  .r-hero-actions { flex-direction: column; align-items: flex-start; }
}
</style>

<div class="research-page">

<!-- HERO -->
<div class="r-hero">
  <div class="r-badge r-fade">⚡ Research Pipeline</div>
  <h1 class="r-fade r-fade-d1" style="margin-top: 20px;">Research</h1>
  <h2 class="r-fade r-fade-d2">Spot football's next tactical shift <span class="r-shimmer">before anyone else.</span></h2>
  <p class="r-sub-statement r-fade r-fade-d3">
    The Tactics Journal Research Pipeline monitors 148 football sources across eight languages, every hour. It detects emerging tactical patterns before they become popular and publishes citation-checked reports on what's actually changing in the sport.
  </p>
  <div class="r-hero-actions r-fade r-fade-d4">
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
    Football tactics travel faster than anyone can follow. A manager changes shape mid-match in LaLiga. A defensive structure appears independently at three clubs across two leagues. A pressing trigger starts showing up in YouTube breakdowns in German, then French, then Portuguese — weeks before it surfaces in English-language coverage.
  </p>
  <p>
    No person can read 118 RSS feeds, watch 30 YouTube channels, and process press conferences in eight languages. By the time a tactical trend is widely discussed, it has already been adopted. The information existed earlier. It was just scattered across too many sources for any individual to connect.
  </p>
  <div class="r-card">
    <div class="r-card-label">From the Research Pipeline — Live</div>
    <p>
      The system currently tracks 1,491 ingested sources, has identified 557 distinct tactical patterns, and scores each for novelty against a historical baseline. When a signal reaches sufficient strength across independent sources, a multi-agent research team produces a full report — automatically.
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
  <div class="r-flow-note">↻ The pipeline evaluates and adjusts its own detection thresholds every cycle.</div>

  <div style="margin-top: 36px;">
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

<!-- SELF-IMPROVING -->
<div class="r-section">
  <div class="r-section-label">Self-Improving</div>
  <p>
    The pipeline doesn't just run — it gets better. Every hour, it measures what it missed, what it flagged too early, and what it got right. Detection thresholds tighten. Source weighting shifts. Report quality is scored and the generation parameters are adjusted. It is, at the point you are reading this, better than it was when this page was first published.
  </p>
  <div class="r-card">
    <div class="r-card-label">Pipeline Self-Tuning</div>
    <p>
      If the detection layer consistently flags a pattern that reports find unsupported, the confidence threshold for that pattern type is automatically raised. The system penalizes its own false positives. No manual tuning required.
    </p>
  </div>
</div>

<!-- WHAT YOU GET -->
<div class="r-section">
  <div class="r-section-label">What You Get</div>
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
        One full-length, citation-checked report every day on an emerging tactical pattern detected across the source network. Each report traces the signal back to its origin — which sources mentioned it first, how it spread, and why it matters. One report per week is free. Reports publish at <span class="r-mono">/research/year/month/day/title/</span>
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
      <div class="r-stat-num">148</div>
      <div class="r-stat-label">Sources Monitored</div>
      <div class="r-stat-sub">118 RSS · 30 YouTube</div>
    </div>
    <div class="r-stat-card">
      <div class="r-stat-num">557</div>
      <div class="r-stat-label">Tactical Patterns</div>
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
      Tifo Football, Statman Dave, Football Made Simple, Premier League, LaLiga, Serie A, Bundesliga, L'Équipe, El Chiringuito TV, beIN SPORTS Arabic — transcripts extracted and processed for tactical content.
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

