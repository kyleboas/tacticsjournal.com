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
    Tactical ideas appear in frontier sources — in German, Portuguese, French — weeks before English-language coverage picks them up. No person can track 151 sources across eight languages in real time.
  </p>

  <!-- Interactive: Information Overload Graphic -->
  <div class="r-graphic-overload">
    <div class="r-overload-feeds">
      <div class="r-feed-col" data-lang="EN">
        <div class="r-feed-bar" style="--bar-h:85%"><span>EN</span></div>
      </div>
      <div class="r-feed-col" data-lang="ES">
        <div class="r-feed-bar" style="--bar-h:72%"><span>ES</span></div>
      </div>
      <div class="r-feed-col" data-lang="DE">
        <div class="r-feed-bar" style="--bar-h:68%"><span>DE</span></div>
      </div>
      <div class="r-feed-col" data-lang="FR">
        <div class="r-feed-bar" style="--bar-h:60%"><span>FR</span></div>
      </div>
      <div class="r-feed-col" data-lang="PT">
        <div class="r-feed-bar" style="--bar-h:55%"><span>PT</span></div>
      </div>
      <div class="r-feed-col" data-lang="IT">
        <div class="r-feed-bar" style="--bar-h:50%"><span>IT</span></div>
      </div>
      <div class="r-feed-col" data-lang="NL">
        <div class="r-feed-bar" style="--bar-h:35%"><span>NL</span></div>
      </div>
      <div class="r-feed-col" data-lang="AR">
        <div class="r-feed-bar" style="--bar-h:40%"><span>AR</span></div>
      </div>
    </div>
    <div class="r-overload-label">
      <span class="r-overload-num">151</span> sources across <span class="r-overload-num">8</span> languages — updated hourly
    </div>
  </div>
</div>

<!-- HOW IT WORKS -->
<div class="r-section">
  <div class="r-section-label">How It Works</div>
  <p>Three stages, fully automated, running continuously.</p>

  <!-- Interactive Pipeline SVG -->
  <div class="r-pipeline-graphic">
    <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg" class="r-pipeline-svg">
      <!-- Stage 1: Ingest -->
      <g class="r-pipe-stage r-pipe-stage-1">
        <rect x="10" y="40" width="200" height="120" rx="12" class="r-pipe-box"/>
        <text x="110" y="75" class="r-pipe-title">Ingest</text>
        <text x="110" y="98" class="r-pipe-sub">151 sources · hourly</text>
        <!-- Mini feed icons -->
        <g class="r-pipe-icons">
          <rect x="40" y="112" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f1"/>
          <rect x="72" y="112" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f2"/>
          <rect x="104" y="112" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f3"/>
          <rect x="136" y="112" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f4"/>
          <rect x="40" y="122" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f5"/>
          <rect x="72" y="122" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f6"/>
          <rect x="104" y="122" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f1"/>
          <rect x="136" y="122" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f3"/>
          <rect x="40" y="132" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f4"/>
          <rect x="72" y="132" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f2"/>
          <rect x="104" y="132" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f5"/>
          <rect x="136" y="132" width="28" height="4" rx="2" class="r-pipe-feed r-feed-anim r-f6"/>
        </g>
      </g>

      <!-- Arrow 1 -->
      <g class="r-pipe-arrow">
        <line x1="218" y1="100" x2="250" y2="100" class="r-arrow-line"/>
        <polygon points="250,94 262,100 250,106" class="r-arrow-head r-arrow-pulse-1"/>
      </g>

      <!-- Stage 2: Detect -->
      <g class="r-pipe-stage r-pipe-stage-2">
        <rect x="270" y="40" width="200" height="120" rx="12" class="r-pipe-box"/>
        <text x="370" y="75" class="r-pipe-title">Detect</text>
        <text x="370" y="98" class="r-pipe-sub">Frontier-gap · weak-signal</text>
        <!-- Signal dots -->
        <circle cx="320" cy="125" r="4" class="r-signal-dot r-sig-1"/>
        <circle cx="345" cy="130" r="3" class="r-signal-dot r-sig-2"/>
        <circle cx="370" cy="120" r="5" class="r-signal-dot r-sig-3"/>
        <circle cx="395" cy="132" r="3.5" class="r-signal-dot r-sig-4"/>
        <circle cx="420" cy="122" r="4" class="r-signal-dot r-sig-5"/>
        <!-- Connecting lines between dots -->
        <polyline points="320,125 345,130 370,120 395,132 420,122" class="r-signal-line"/>
      </g>

      <!-- Arrow 2 -->
      <g class="r-pipe-arrow">
        <line x1="478" y1="100" x2="510" y2="100" class="r-arrow-line"/>
        <polygon points="510,94 522,100 510,106" class="r-arrow-head r-arrow-pulse-2"/>
      </g>

      <!-- Stage 3: Report -->
      <g class="r-pipe-stage r-pipe-stage-3">
        <rect x="530" y="40" width="180" height="120" rx="12" class="r-pipe-box"/>
        <text x="620" y="75" class="r-pipe-title">Report</text>
        <text x="620" y="98" class="r-pipe-sub">Finding-first · cited</text>
        <!-- Document icon -->
        <g class="r-pipe-doc">
          <rect x="590" y="110" width="24" height="30" rx="3" class="r-doc-page"/>
          <line x1="596" y1="118" x2="608" y2="118" class="r-doc-line"/>
          <line x1="596" y1="124" x2="606" y2="124" class="r-doc-line"/>
          <line x1="596" y1="130" x2="608" y2="130" class="r-doc-line"/>
          <rect x="618" y="112" width="24" height="30" rx="3" class="r-doc-page r-doc-page-2"/>
          <line x1="624" y1="120" x2="636" y2="120" class="r-doc-line"/>
          <line x1="624" y1="126" x2="634" y2="126" class="r-doc-line"/>
          <line x1="624" y1="132" x2="636" y2="132" class="r-doc-line"/>
        </g>
      </g>

      <!-- Self-tuning loop arrow (curved, underneath) -->
      <path d="M 620 168 C 620 195, 110 195, 110 168" class="r-loop-path" fill="none"/>
      <text class="r-loop-label">
        <textPath href="#loopPath" startOffset="50%" text-anchor="middle">autoresearch · self-tuning loop</textPath>
      </text>
      <defs>
        <path id="loopPath" d="M 620 178 C 620 210, 110 210, 110 178"/>
      </defs>
      <polygon points="114,170 106,178 118,178" class="r-loop-arrow-head"/>
    </svg>
  </div>

  <!-- Step details — concise -->
  <div class="r-steps-compact">
    <div class="r-step-compact" tabindex="0">
      <div class="r-step-header">
        <span class="r-step-num">01</span>
        <span class="r-step-title">Ingest</span>
        <span class="r-step-expand">+</span>
      </div>
      <div class="r-step-detail">
        Pulls from 118 RSS feeds and 33 YouTube channels across eight languages every hour. Full-text extraction, transcript processing, and vector embedding — every source tagged by tier, culture, and format.
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
  <p>The pipeline tunes itself. A separate autoresearch loop evaluates and optimizes each stage — changes only apply when they beat the current baseline.</p>

  <!-- Interactive: Self-tuning loop SVG -->
  <div class="r-tuning-graphic">
    <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" class="r-tuning-svg">
      <!-- Central circle -->
      <circle cx="200" cy="130" r="45" class="r-tune-center"/>
      <text x="200" y="125" class="r-tune-center-text">Auto</text>
      <text x="200" y="143" class="r-tune-center-text">Research</text>

      <!-- Orbiting nodes -->
      <g class="r-tune-orbit">
        <!-- Ingest Policy -->
        <g class="r-tune-node r-tune-node-1">
          <circle cx="200" cy="30" r="28" class="r-tune-node-bg"/>
          <text x="200" y="27" class="r-tune-node-label">Ingest</text>
          <text x="200" y="40" class="r-tune-node-sub">Policy</text>
        </g>
        <!-- Detect Policy -->
        <g class="r-tune-node r-tune-node-2">
          <circle cx="348" cy="195" r="28" class="r-tune-node-bg"/>
          <text x="348" y="192" class="r-tune-node-label">Detect</text>
          <text x="348" y="205" class="r-tune-node-sub">Policy</text>
        </g>
        <!-- Report Policy -->
        <g class="r-tune-node r-tune-node-3">
          <circle cx="52" cy="195" r="28" class="r-tune-node-bg"/>
          <text x="52" y="192" class="r-tune-node-label">Report</text>
          <text x="52" y="205" class="r-tune-node-sub">Policy</text>
        </g>
      </g>

      <!-- Connecting arcs with animated dashes -->
      <path d="M 200 75 A 100 100 0 0 1 320 170" class="r-tune-arc r-tune-arc-1" fill="none"/>
      <path d="M 320 215 A 100 100 0 0 1 80 215" class="r-tune-arc r-tune-arc-2" fill="none"/>
      <path d="M 80 170 A 100 100 0 0 1 200 75" class="r-tune-arc r-tune-arc-3" fill="none"/>

      <!-- Bottom label -->
      <text x="200" y="252" class="r-tune-bottom-label">Evaluates → applies only when improved</text>
    </svg>
  </div>
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
        <div class="r-offering-desc">See what the pipeline is tracking before it becomes a full report — before English press picks it up.</div>
      </div>
    </div>

    <div class="r-offering" tabindex="0">
      <div class="r-offering-icon">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="14" class="r-icon-stroke" fill="none" stroke-width="1.5"/>
          <text x="20" y="17" class="r-icon-lang-text" font-size="5" text-anchor="middle">EN DE FR</text>
          <text x="20" y="25" class="r-icon-lang-text" font-size="5" text-anchor="middle">ES PT IT</text>
          <text x="20" y="33" class="r-icon-lang-text" font-size="5" text-anchor="middle">NL AR</text>
        </svg>
      </div>
      <div class="r-offering-text">
        <div class="r-offering-title">Cross-Language Coverage</div>
        <div class="r-offering-desc">Eight languages, every major European league — you get the patterns that emerge from that volume.</div>
      </div>
    </div>
  </div>
</div>

<!-- SOURCES -->
<div class="r-section">
  <div class="r-section-label">Sources</div>

  <!-- Interactive: Source Network Visualization -->
  <div class="r-source-network">
    <div class="r-source-hub">
      <svg viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg" class="r-source-svg">
        <!-- Central node -->
        <circle cx="250" cy="150" r="30" class="r-hub-center"/>
        <text x="250" y="147" class="r-hub-text">151</text>
        <text x="250" y="161" class="r-hub-sub">sources</text>

        <!-- RSS cluster -->
        <g class="r-source-cluster r-cluster-rss">
          <circle cx="100" cy="70" r="22" class="r-cluster-node"/>
          <text x="100" y="67" class="r-cluster-label">118</text>
          <text x="100" y="80" class="r-cluster-sub">RSS</text>
          <line x1="122" y1="82" x2="222" y2="138" class="r-cluster-line"/>
        </g>

        <!-- YouTube cluster -->
        <g class="r-source-cluster r-cluster-yt">
          <circle cx="400" cy="70" r="22" class="r-cluster-node"/>
          <text x="400" y="67" class="r-cluster-label">33</text>
          <text x="400" y="80" class="r-cluster-sub">YouTube</text>
          <line x1="378" y1="82" x2="278" y2="138" class="r-cluster-line"/>
        </g>

        <!-- Language nodes scattered around -->
        <g class="r-lang-nodes">
          <circle cx="60" cy="180" r="14" class="r-lang-node"><title>English</title></circle>
          <text x="60" y="184" class="r-lang-label">EN</text>
          <line x1="74" y1="176" x2="222" y2="152" class="r-lang-line"/>

          <circle cx="130" cy="240" r="14" class="r-lang-node"><title>Spanish</title></circle>
          <text x="130" y="244" class="r-lang-label">ES</text>
          <line x1="140" y1="228" x2="238" y2="168" class="r-lang-line"/>

          <circle cx="220" cy="270" r="14" class="r-lang-node"><title>French</title></circle>
          <text x="220" y="274" class="r-lang-label">FR</text>
          <line x1="228" y1="256" x2="245" y2="178" class="r-lang-line"/>

          <circle cx="310" cy="270" r="14" class="r-lang-node"><title>German</title></circle>
          <text x="310" y="274" class="r-lang-label">DE</text>
          <line x1="302" y1="256" x2="260" y2="178" class="r-lang-line"/>

          <circle cx="400" cy="240" r="14" class="r-lang-node"><title>Portuguese</title></circle>
          <text x="400" y="244" class="r-lang-label">PT</text>
          <line x1="388" y1="228" x2="268" y2="168" class="r-lang-line"/>

          <circle cx="450" cy="180" r="14" class="r-lang-node"><title>Italian</title></circle>
          <text x="450" y="184" class="r-lang-label">IT</text>
          <line x1="436" y1="176" x2="278" y2="152" class="r-lang-line"/>

          <circle cx="160" cy="150" r="10" class="r-lang-node r-lang-sm"><title>Dutch</title></circle>
          <text x="160" y="154" class="r-lang-label r-lang-label-sm">NL</text>
          <line x1="170" y1="150" x2="220" y2="150" class="r-lang-line"/>

          <circle cx="340" cy="150" r="10" class="r-lang-node r-lang-sm"><title>Arabic</title></circle>
          <text x="340" y="154" class="r-lang-label r-lang-label-sm">AR</text>
          <line x1="330" y1="150" x2="280" y2="150" class="r-lang-line"/>
        </g>

        <!-- Animated data pulses along lines -->
        <circle r="3" class="r-data-pulse r-dp-1">
          <animateMotion dur="2.5s" repeatCount="indefinite" path="M 122 82 L 222 138"/>
        </circle>
        <circle r="3" class="r-data-pulse r-dp-2">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M 378 82 L 278 138"/>
        </circle>
        <circle r="2.5" class="r-data-pulse r-dp-3">
          <animateMotion dur="3s" repeatCount="indefinite" path="M 74 176 L 222 152"/>
        </circle>
        <circle r="2.5" class="r-data-pulse r-dp-4">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M 388 228 L 268 168"/>
        </circle>
      </svg>
    </div>
  </div>

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
      <div class="r-oss-body">Curated sources, tuned detection, daily reports — already running. Costs less than running it yourself.</div>
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
      <div class="r-pricing-explain">Subscription cost depends on waitlist interest. More signups means higher-quality models — and a lower per-person cost.</div>
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

document.querySelectorAll('.r-pipeline-graphic, .r-tuning-graphic, .r-source-network, .r-graphic-overload, .r-offerings, .r-oss-compare, .r-pricing-graphic').forEach(el => {
  observer.observe(el);
});
</script>
