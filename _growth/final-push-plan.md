# Final Push Plan: 28 More Waitlist Signups

**Date:** 2026-03-30
**Goal:** g2 at 86.0% — 28 waitlist signups to reach 100%

## Current State

- **Total Buttondown subscribers:** 172
- **Subscribers with "waitlist" tag:** 24 (page 1 only; all waitlist-tagged subs are on page 1)
- **Waitlist launch post:** 2026-03-24 (6 days ago)
- **Signup velocity last 3 days (Mar 25-27):** ~8-10/day
- **Key growth driver:** Blog post + /research landing page
- **At current rate:** 28 signups in ~3 days organically

## Analysis: Highest-Leverage Actions

### 1. 📧 Email the Existing "Opinion" List (HIGHEST LEVERAGE)
**Why:** 148 existing subscribers on the "opinion" tag don't have the "waitlist" tag. These are warm leads who already trust the brand.
**Expected conversion:** 15-20% = 22-30 signups → closes the gap in one email.
**Action:** Send a Buttondown email to the "opinion" segment pitching the research waitlist.

### 2. 🐦 Social Push on Bluesky/Threads (MEDIUM LEVERAGE)
**Why:** The blog post from Jan 2025 says "why the tactics journal is no longer posting on X" — so the primary social channels are Bluesky and Threads.
**Expected conversion:** 5-10 signups per post if timed right.
**Action:** Draft and share a thread/post about the research product.

### 3. 🔧 Signup Flow Optimization (LOW-MEDIUM LEVERAGE)
**Why:** The blog post and /research page both have waitlist forms. The blog post has forms both before and after the content (good). The research page has one at the hero and one at the bottom.
**Potential improvement:** Add urgency language, social proof ("Join 24+ others on the waitlist"), or a countdown.

## Recommended Execution Order

1. **Today:** Email the opinion list (closes 80%+ of the gap)
2. **Today:** Post on Bluesky/Threads
3. **Tomorrow:** Follow-up social post with social proof ("Over 30 on the waitlist")
4. **Ongoing:** Monitor signup velocity via Buttondown API

---

## Draft: Email to Opinion Subscribers

**Subject:** I built something new for football tactics. Want early access?

Hey,

I've been building something I think you'll find valuable.

Tactics Journal Research is an autonomous system that monitors 200+ international football sources — blogs, press conferences, podcasts, coaching interviews — across leagues, languages, and cultures. Every hour, it pulls in new content, classifies it, and writes daily deep research reports on frontier tactical ideas before they hit mainstream coverage.

It finds ideas in German tactical blogs, Portuguese analysis, and press conferences where managers drop phrases weeks before anyone writes about the concept behind them.

One report per week is free. Every daily report is $15/month — cheaper than running it yourself.

I'm opening early access soon. Join the waitlist to get first access:

👉 https://tacticsjournal.com/research

— Kyle

---

## Draft: Bluesky/Thread Post

**Post 1:**
I built an autonomous agent that reads 200+ football tactics sources across languages, leagues, and cultures — every hour — and writes daily deep research reports on frontier tactical ideas.

German tactical blogs. Portuguese analysis. Press conferences where managers hint at new structures weeks before anyone covers them.

It finds what you'd miss.

Early access is opening soon. Join the waitlist: tacticsjournal.com/research

**Post 2 (follow-up with social proof):**
The response to Tactics Journal Research has been incredible. Football analysts, coaches, and writers from around the world are joining the waitlist.

If you want to see tactical trends before they cross over into mainstream coverage — in your language, no matter where the idea originated — this is for you.

Join the waitlist: tacticsjournal.com/research

---

## Signup Flow Optimization Suggestions

1. **Add social proof counter** to /research page: "Join [X] others on the waitlist"
2. **Add urgency text**: "Early access opening soon — waitlist gets first access"
3. **Consider a referral incentive**: "Share with a fellow analyst — both get priority access"

## Files to Modify (when ready to deploy)

- `/root/tacticsjournal.com/research/research.md` — Add social proof + urgency text near waitlist form
- `/root/tacticsjournal.com/_posts/2026/03/2026-03-24-tactics-journal-research-get-ahead-of-the-game.md` — Update with social proof
