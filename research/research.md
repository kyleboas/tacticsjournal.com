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
    Tactical ideas spread across languages and leagues faster than anyone can follow. By the time a trend is widely discussed, it has already been adopted.
  </p>

  <!-- Interactive Source Network Graphic -->
  <div class="r-section-graphic r-source-network">
    <svg viewBox="0 0 720 200" xmlns="http://www.w3.org/2000/svg">
      <!-- Center hub -->
      <circle cx="360" cy="100" r="28" fill="none" stroke="var(--text-muted)" stroke-width="1" opacity="0.3"/>
      <circle cx="360" cy="100" r="16" fill="none" stroke="var(--text-muted)" stroke-width="1" opacity="0.5"/>
      <circle cx="360" cy="100" r="5" fill="var(--text-muted)" opacity="0.6"/>

      <!-- Language nodes with labels -->
      <g class="r-lang-node r-ln1">
        <circle cx="80" cy="50" r="4" fill="#E5534B"/>
        <text x="80" y="72" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-weight="500">EN</text>
        <line x1="84" y1="50" x2="332" y2="100" stroke="#E5534B" stroke-width="0.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="2.5" fill="#E5534B" opacity="0.8">
          <animateMotion dur="3s" repeatCount="indefinite" path="M84,50 L332,100" begin="0s"/>
        </circle>
      </g>
      <g class="r-lang-node r-ln2">
        <circle cx="140" cy="160" r="4" fill="#F0883E"/>
        <text x="140" y="182" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-weight="500">ES</text>
        <line x1="144" y1="160" x2="344" y2="100" stroke="#F0883E" stroke-width="0.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="2.5" fill="#F0883E" opacity="0.8">
          <animateMotion dur="3.4s" repeatCount="indefinite" path="M144,160 L344,100" begin="0.5s"/>
        </circle>
      </g>
      <g class="r-lang-node r-ln3">
        <circle cx="200" cy="30" r="4" fill="#539BF5"/>
        <text x="200" y="52" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-weight="500">FR</text>
        <line x1="204" y1="30" x2="344" y2="100" stroke="#539BF5" stroke-width="0.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="2.5" fill="#539BF5" opacity="0.8">
          <animateMotion dur="2.8s" repeatCount="indefinite" path="M204,30 L344,100" begin="1s"/>
        </circle>
      </g>
      <g class="r-lang-node r-ln4">
        <circle cx="260" cy="170" r="4" fill="#57AB5A"/>
        <text x="260" y="192" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-weight="500">DE</text>
        <line x1="264" y1="170" x2="350" y2="105" stroke="#57AB5A" stroke-width="0.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="2.5" fill="#57AB5A" opacity="0.8">
          <animateMotion dur="2.6s" repeatCount="indefinite" path="M264,170 L350,105" begin="0.3s"/>
        </circle>
      </g>
      <g class="r-lang-node r-ln5">
        <circle cx="460" cy="170" r="4" fill="#347D39"/>
        <text x="460" y="192" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-weight="500">PT</text>
        <line x1="456" y1="170" x2="370" y2="105" stroke="#347D39" stroke-width="0.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="2.5" fill="#347D39" opacity="0.8">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M456,170 L370,105" begin="0.8s"/>
        </circle>
      </g>
      <g class="r-lang-node r-ln6">
        <circle cx="520" cy="30" r="4" fill="#F0883E"/>
        <text x="520" y="52" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-weight="500">IT</text>
        <line x1="516" y1="30" x2="376" y2="95" stroke="#F0883E" stroke-width="0.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="2.5" fill="#F0883E" opacity="0.8">
          <animateMotion dur="2.9s" repeatCount="indefinite" path="M516,30 L376,95" begin="1.2s"/>
        </circle>
      </g>
      <g class="r-lang-node r-ln7">
        <circle cx="580" cy="150" r="4" fill="#A371F7"/>
        <text x="580" y="172" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-weight="500">NL</text>
        <line x1="576" y1="150" x2="376" y2="100" stroke="#A371F7" stroke-width="0.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="2.5" fill="#A371F7" opacity="0.8">
          <animateMotion dur="3.6s" repeatCount="indefinite" path="M576,150 L376,100" begin="0.6s"/>
        </circle>
      </g>
      <g class="r-lang-node r-ln8">
        <circle cx="640" cy="60" r="4" fill="#539BF5"/>
        <text x="640" y="82" text-anchor="middle" fill="var(--text-muted)" font-size="9" font-weight="500">AR</text>
        <line x1="636" y1="60" x2="388" y2="100" stroke="#539BF5" stroke-width="0.5" opacity="0.2"/>
        <circle cx="0" cy="0" r="2.5" fill="#539BF5" opacity="0.8">
          <animateMotion dur="3.1s" repeatCount="indefinite" path="M636,60 L388,100" begin="1.5s"/>
        </circle>
      </g>

      <!-- Hub pulse -->
      <circle cx="360" cy="100" r="5" fill="none" stroke="var(--text-muted)" opacity="0.3">
        <animate attributeName="r" values="5;20;5" dur="3s" repeatCount="indefinite"/>
        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite"/>
      </circle>
    </svg>
    <div class="r-graphic-caption">151 sources · 8 languages · monitored hourly</div>
  </div>
</div>

<!-- HOW IT WORKS -->
<div class="r-section">
  <div class="r-section-label">How It Works</div>
  <p>
    Three automated stages run continuously — ingest, detect, report.
  </p>

  <!-- Interactive Pipeline Graphic -->
  <div class="r-section-graphic r-pipeline-graphic">
    <svg viewBox="0 0 720 160" xmlns="http://www.w3.org/2000/svg">
      <!-- Stage 1: Ingest -->
      <g class="r-pipeline-stage">
        <rect x="20" y="30" width="180" height="100" rx="12" fill="none" stroke="var(--border)" stroke-width="1"/>
        <text x="110" y="58" text-anchor="middle" fill="var(--text)" font-size="14" font-weight="600">Ingest</text>
        <!-- Animated feed bars -->
        <rect x="45" y="72" width="50" height="4" rx="2" fill="#E5534B" class="r-feed-fill r-f1"/>
        <rect x="45" y="82" width="40" height="4" rx="2" fill="#539BF5" class="r-feed-fill r-f2"/>
        <rect x="45" y="92" width="55" height="4" rx="2" fill="#57AB5A" class="r-feed-fill r-f3"/>
        <rect x="45" y="102" width="35" height="4" rx="2" fill="#F0883E" class="r-feed-fill r-f4"/>
        <!-- Feed icons -->
        <text x="115" y="80" text-anchor="start" fill="var(--text-muted)" font-size="9" font-family="'Geist Mono', monospace">118 RSS</text>
        <text x="115" y="95" text-anchor="start" fill="var(--text-muted)" font-size="9" font-family="'Geist Mono', monospace">33 YouTube</text>
        <text x="115" y="110" text-anchor="start" fill="var(--text-muted)" font-size="9" font-family="'Geist Mono', monospace">8 languages</text>
      </g>

      <!-- Arrow 1 -->
      <g class="r-pipeline-arrow">
        <line x1="210" y1="80" x2="260" y2="80" stroke="var(--text-muted)" stroke-width="1" opacity="0.3"/>
        <circle cx="0" cy="0" r="3" fill="var(--text-muted)" opacity="0.6">
          <animateMotion dur="1.5s" repeatCount="indefinite" path="M210,80 L260,80" begin="0s"/>
        </circle>
      </g>

      <!-- Stage 2: Detect -->
      <g class="r-pipeline-stage">
        <rect x="270" y="30" width="180" height="100" rx="12" fill="none" stroke="var(--border)" stroke-width="1"/>
        <text x="360" y="58" text-anchor="middle" fill="var(--text)" font-size="14" font-weight="600">Detect</text>
        <!-- Signal dots cluster -->
        <circle cx="310" cy="82" r="3" fill="#E5534B" class="r-pulse-dot-slow" style="animation-delay:0s"/>
        <circle cx="325" cy="76" r="2.5" fill="#539BF5" class="r-pulse-dot-slow" style="animation-delay:0.4s"/>
        <circle cx="340" cy="90" r="3.5" fill="#57AB5A" class="r-pulse-dot-slow" style="animation-delay:0.8s"/>
        <circle cx="330" cy="100" r="2" fill="#F0883E" class="r-pulse-dot-slow" style="animation-delay:1.2s"/>
        <circle cx="315" cy="95" r="2.5" fill="#A371F7" class="r-pulse-dot-slow" style="animation-delay:0.6s"/>
        <!-- Labels -->
        <text x="365" y="80" text-anchor="start" fill="var(--text-muted)" font-size="9" font-family="'Geist Mono', monospace">frontier gap</text>
        <text x="365" y="95" text-anchor="start" fill="var(--text-muted)" font-size="9" font-family="'Geist Mono', monospace">weak signal</text>
        <text x="365" y="110" text-anchor="start" fill="var(--text-muted)" font-size="9" font-family="'Geist Mono', monospace">novelty score</text>
      </g>

      <!-- Arrow 2 -->
      <g class="r-pipeline-arrow">
        <line x1="460" y1="80" x2="510" y2="80" stroke="var(--text-muted)" stroke-width="1" opacity="0.3"/>
        <circle cx="0" cy="0" r="3" fill="var(--text-muted)" opacity="0.6">
          <animateMotion dur="1.5s" repeatCount="indefinite" path="M460,80 L510,80" begin="0.5s"/>
        </circle>
      </g>

      <!-- Stage 3: Report -->
      <g class="r-pipeline-stage">
        <rect x="520" y="30" width="180" height="100" rx="12" fill="none" stroke="var(--border)" stroke-width="1"/>
        <text x="610" y="58" text-anchor="middle" fill="var(--text)" font-size="14" font-weight="600">Report</text>
        <!-- Document lines animation -->
        <rect x="545" y="72" width="65" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.3" class="r-report-line r-rl1"/>
        <rect x="545" y="81" width="50" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.3" class="r-report-line r-rl2"/>
        <rect x="545" y="90" width="60" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.3" class="r-report-line r-rl3"/>
        <rect x="545" y="99" width="40" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.3" class="r-report-line r-rl4"/>
        <!-- Labels -->
        <text x="625" y="80" text-anchor="start" fill="var(--text-muted)" font-size="9" font-family="'Geist Mono', monospace">multi-agent</text>
        <text x="625" y="95" text-anchor="start" fill="var(--text-muted)" font-size="9" font-family="'Geist Mono', monospace">cited</text>
        <text x="625" y="110" text-anchor="start" fill="var(--text-muted)" font-size="9" font-family="'Geist Mono', monospace">quality gate</text>
      </g>

      <!-- Feedback loop arrow (bottom) -->
      <path d="M610,135 L610,148 L110,148 L110,135" fill="none" stroke="var(--text-muted)" stroke-width="0.8" opacity="0.2" stroke-dasharray="4 4"/>
      <text x="360" y="156" text-anchor="middle" fill="var(--text-muted)" font-size="8" font-family="'Geist Mono', monospace" opacity="0.5">autoresearch loop — self-tuning</text>
    </svg>
  </div>
</div>

<!-- WHAT YOU GET -->
<div class="r-section">
  <div class="r-section-label">What You Get</div>
  <p>
    One new report every day. One per week is free. Full access for subscribers.
  </p>

  <div class="r-offering-grid">
    <!-- Daily Reports -->
    <div class="r-offering-card">
      <div class="r-offering-visual">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <!-- Calendar/report stack -->
          <rect x="50" y="20" width="100" height="80" rx="6" fill="none" stroke="var(--border)" stroke-width="1"/>
          <rect x="60" y="35" width="60" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.4"/>
          <rect x="60" y="44" width="45" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.3"/>
          <rect x="60" y="53" width="55" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.3"/>
          <rect x="60" y="62" width="40" height="3" rx="1.5" fill="var(--text-muted)" opacity="0.2"/>
          <!-- Citation dot -->
          <circle cx="135" cy="37" r="3" fill="#E5534B" opacity="0.6"/>
          <circle cx="135" cy="46" r="3" fill="#539BF5" opacity="0.6"/>
          <!-- Daily indicator -->
          <rect x="60" y="75" width="20" height="12" rx="3" fill="#E5534B" opacity="0.15"/>
          <text x="70" y="83.5" text-anchor="middle" fill="#E5534B" font-size="7" font-weight="600">1/d</text>
        </svg>
      </div>
      <div class="r-offering-num">01</div>
      <div class="r-offering-title">Daily Trend Reports</div>
      <div class="r-offering-desc">Citation-checked analysis of an emerging tactical pattern, traced to its origin sources.</div>
    </div>

    <!-- Early Signals -->
    <div class="r-offering-card">
      <div class="r-offering-visual">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <!-- Radar/signal visualization -->
          <circle cx="100" cy="60" r="40" fill="none" stroke="var(--border)" stroke-width="0.5"/>
          <circle cx="100" cy="60" r="25" fill="none" stroke="var(--border)" stroke-width="0.5"/>
          <circle cx="100" cy="60" r="10" fill="none" stroke="var(--border)" stroke-width="0.5"/>
          <!-- Sweep line -->
          <line x1="100" y1="60" x2="140" y2="60" stroke="var(--text-muted)" stroke-width="0.8" opacity="0.4">
            <animateTransform attributeName="transform" type="rotate" from="0 100 60" to="360 100 60" dur="4s" repeatCount="indefinite"/>
          </line>
          <!-- Signal dots -->
          <circle cx="118" cy="45" r="3" fill="#57AB5A" class="r-pulse-dot-slow" style="animation-delay:0s"/>
          <circle cx="85" cy="42" r="2.5" fill="#F0883E" class="r-pulse-dot-slow" style="animation-delay:0.6s"/>
          <circle cx="125" cy="70" r="2" fill="#539BF5" class="r-pulse-dot-slow" style="animation-delay:1.2s"/>
        </svg>
      </div>
      <div class="r-offering-num">02</div>
      <div class="r-offering-title">Early Signals</div>
      <div class="r-offering-desc">See what the pipeline is tracking before the English-language press picks it up.</div>
    </div>

    <!-- Cross-Language -->
    <div class="r-offering-card">
      <div class="r-offering-visual">
        <svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg">
          <!-- Language bars -->
          <rect x="30" y="25" width="80" height="8" rx="4" fill="#E5534B" opacity="0.2"/>
          <rect x="30" y="25" width="65" height="8" rx="4" fill="#E5534B" opacity="0.5" class="r-lang-bar r-lb1"/>
          <text x="118" y="32" fill="var(--text-muted)" font-size="8" font-family="'Geist Mono', monospace">EN</text>

          <rect x="30" y="39" width="80" height="8" rx="4" fill="#F0883E" opacity="0.2"/>
          <rect x="30" y="39" width="55" height="8" rx="4" fill="#F0883E" opacity="0.5" class="r-lang-bar r-lb2"/>
          <text x="118" y="46" fill="var(--text-muted)" font-size="8" font-family="'Geist Mono', monospace">ES</text>

          <rect x="30" y="53" width="80" height="8" rx="4" fill="#539BF5" opacity="0.2"/>
          <rect x="30" y="53" width="48" height="8" rx="4" fill="#539BF5" opacity="0.5" class="r-lang-bar r-lb3"/>
          <text x="118" y="60" fill="var(--text-muted)" font-size="8" font-family="'Geist Mono', monospace">FR</text>

          <rect x="30" y="67" width="80" height="8" rx="4" fill="#57AB5A" opacity="0.2"/>
          <rect x="30" y="67" width="52" height="8" rx="4" fill="#57AB5A" opacity="0.5" class="r-lang-bar r-lb4"/>
          <text x="118" y="74" fill="var(--text-muted)" font-size="8" font-family="'Geist Mono', monospace">DE</text>

          <rect x="30" y="81" width="80" height="8" rx="4" fill="#347D39" opacity="0.2"/>
          <rect x="30" y="81" width="42" height="8" rx="4" fill="#347D39" opacity="0.5" class="r-lang-bar r-lb5"/>
          <text x="118" y="88" fill="var(--text-muted)" font-size="8" font-family="'Geist Mono', monospace">PT +4</text>

          <!-- Connection lines -->
          <path d="M140,32 Q160,50 140,60" fill="none" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.3"/>
          <path d="M140,46 Q155,55 140,74" fill="none" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.3"/>
          <!-- Cross indicator -->
          <circle cx="160" cy="55" r="10" fill="none" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.3"/>
          <text x="160" y="58" text-anchor="middle" fill="var(--text-muted)" font-size="7" opacity="0.5">×</text>
        </svg>
      </div>
      <div class="r-offering-num">03</div>
      <div class="r-offering-title">Cross-Language Coverage</div>
      <div class="r-offering-desc">Eight languages. Patterns that emerge from volume no individual could process.</div>
    </div>
  </div>
</div>

<!-- SOURCES -->
<div class="r-section">
  <div class="r-section-label">Sources</div>

  <div class="r-stat-grid">
    <div class="r-stat-card">
      <div class="r-stat-num">151</div>
      <div class="r-stat-label">Sources</div>
      <div class="r-stat-sub">118 RSS · 33 YouTube</div>
    </div>
    <div class="r-stat-card">
      <div class="r-stat-num">3</div>
      <div class="r-stat-label">Dimensions</div>
      <div class="r-stat-sub">Tier · culture · format</div>
    </div>
    <div class="r-stat-card">
      <div class="r-stat-num">8</div>
      <div class="r-stat-label">Languages</div>
    </div>
  </div>

  <!-- Interactive Source Grid -->
  <div class="r-section-graphic r-source-grid-graphic">
    <div class="r-source-type-row">
      <div class="r-source-type-card" data-hover="Written analysis, stats, tactical breakdowns">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="6" width="24" height="28" rx="3" fill="none" stroke="var(--text-muted)" stroke-width="1" opacity="0.5"/>
          <rect x="12" y="12" width="16" height="2" rx="1" fill="var(--text-muted)" opacity="0.4"/>
          <rect x="12" y="17" width="12" height="2" rx="1" fill="var(--text-muted)" opacity="0.3"/>
          <rect x="12" y="22" width="14" height="2" rx="1" fill="var(--text-muted)" opacity="0.3"/>
          <rect x="12" y="27" width="10" height="2" rx="1" fill="var(--text-muted)" opacity="0.2"/>
        </svg>
        <span class="r-source-type-label">Written Analysis</span>
        <span class="r-source-type-count">118 feeds</span>
      </div>
      <div class="r-source-type-card" data-hover="Video breakdowns, press conferences, interviews">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="9" width="28" height="22" rx="3" fill="none" stroke="var(--text-muted)" stroke-width="1" opacity="0.5"/>
          <polygon points="17,15 17,26 26,20.5" fill="var(--text-muted)" opacity="0.4"/>
        </svg>
        <span class="r-source-type-label">Video Sources</span>
        <span class="r-source-type-count">33 channels</span>
      </div>
      <div class="r-source-type-card" data-hover="Press conferences, post-match, tactical breakdowns in 8 languages">
        <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="13" fill="none" stroke="var(--text-muted)" stroke-width="1" opacity="0.5"/>
          <ellipse cx="20" cy="20" rx="6" ry="13" fill="none" stroke="var(--text-muted)" stroke-width="0.7" opacity="0.3"/>
          <line x1="7" y1="20" x2="33" y2="20" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.3"/>
          <line x1="9" y1="14" x2="31" y2="14" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.2"/>
          <line x1="9" y1="26" x2="31" y2="26" stroke="var(--text-muted)" stroke-width="0.5" opacity="0.2"/>
        </svg>
        <span class="r-source-type-label">8 Languages</span>
        <span class="r-source-type-count">EN ES FR DE PT IT NL AR</span>
      </div>
    </div>
  </div>

  <p class="r-audience">
    For analysts, coaches, and clubs who want to see what's happening before it's obvious.
  </p>
</div>

<!-- OPEN SOURCE -->
<div class="r-section">
  <div class="r-section-label">Open Source</div>
  <p>
    The entire pipeline is open source. Inspect it, run it, or adapt it.
  </p>

  <!-- Terminal Graphic -->
  <div class="r-section-graphic r-terminal-graphic">
    <div class="r-terminal">
      <div class="r-terminal-bar">
        <span class="r-terminal-dot" style="background:#E5534B"></span>
        <span class="r-terminal-dot" style="background:#F0883E"></span>
        <span class="r-terminal-dot" style="background:#57AB5A"></span>
        <span class="r-terminal-title">terminal</span>
      </div>
      <div class="r-terminal-body">
        <div class="r-terminal-line">
          <span class="r-terminal-prompt">$</span>
          <span class="r-terminal-cmd">git clone https://github.com/kyleboas/research</span>
        </div>
        <div class="r-terminal-line r-terminal-output">Cloning into 'research'...</div>
        <div class="r-terminal-line">
          <span class="r-terminal-prompt">$</span>
          <span class="r-terminal-cmd">cd research && make run</span>
        </div>
        <div class="r-terminal-line r-terminal-output">▸ Ingest: 151 sources configured</div>
        <div class="r-terminal-line r-terminal-output">▸ Detect: frontier-gap + weak-signal active</div>
        <div class="r-terminal-line r-terminal-output r-terminal-success">▸ Pipeline running</div>
        <div class="r-terminal-line">
          <span class="r-terminal-prompt">$</span>
          <span class="r-terminal-cursor">█</span>
        </div>
      </div>
    </div>
  </div>
  <p style="margin-top: 12px;">
    <a href="https://github.com/kyleboas/research" target="_blank" class="r-github-link">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
      View on GitHub
    </a>
  </p>
  <p>
    The code is free. The intelligence — curated sources, tuned detection, daily reports — is the product.
  </p>
</div>

<!-- WAITLIST -->
<div class="r-section" id="waitlist">
  <div class="r-section-label">Early Access</div>
  <p>
    The pipeline is running. Early access opens to the waitlist first.
  </p>
  {% include research-waitlist-form.html %}
</div>

</div>
