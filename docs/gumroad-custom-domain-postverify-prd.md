# PRD: Gumroad Custom Domain Post-Verification QA

## Objective
Ensure `pro.tacticsjournal.com` is production-ready for paid subscriptions, pricing integrity, analytics, and operational reliability.

## Context
- Custom domain is verified in Gumroad.
- `https://pro.tacticsjournal.com/l/avkyur` returns `200`.
- Cloudflare DNS is currently correct for Gumroad custom domains:
  - `pro.tacticsjournal.com CNAME domains.gumroad.com`
  - Proxy disabled (`DNS only`).

## Problem to Solve
We need a complete validation sweep of product flow, pricing alignment, subscriber continuity, tracking, device behavior, and DNS/SSL stability.

## Scope
In scope:
1. Product link routing (monthly/yearly)
2. Price/link consistency with `/research/about/`
3. Purchase flow checks
4. Existing subscriber continuity checks
5. UTM + analytics checks
6. Cross-device/browser checks
7. DNS/SSL/ops checks

Out of scope:
- Redesigning pricing UI
- Gumroad catalog restructuring beyond what is needed for monthly/yearly parity

## Acceptance Criteria
- Monthly CTA lands on monthly product and charges monthly price.
- Yearly CTA lands on yearly product and charges yearly price (`$144/year`, displayed as `$12/mo billed annually`).
- No CTA on production points to `#waitlist` for paid plan.
- Purchase flow completes successfully end-to-end.
- Existing subscribers can still access/manage subscriptions without breakage.
- UTM params and conversion events are captured.
- Core flows pass on target browsers/devices.
- DNS/SSL remain stable for 24h+ with `200` responses.

## Current Findings (as of now)
- `pro.tacticsjournal.com` HTTPS is healthy (`200`).
- Local repo config has both monthly and yearly URLs set to the same Gumroad URL in `_config.yml`.
- Production `/research/about/` now routes paid CTA to Gumroad custom domain (no longer `#waitlist`).
- QA run log started: `docs/gumroad-custom-domain-qa-log.md`.

---

## Task Checklist

### A) Product URLs and pricing alignment
- [ ] Confirm Gumroad has two distinct products/checkout links: monthly and yearly.
- [ ] Record final canonical URLs:
  - [ ] Monthly URL: `https://pro.tacticsjournal.com/l/<MONTHLY_ID>`
  - [ ] Yearly URL: `https://pro.tacticsjournal.com/l/<YEARLY_ID>`
- [ ] Update `_config.yml`:
  - [ ] `gumroad_pro_monthly_url` = monthly URL
  - [ ] `gumroad_pro_yearly_url` = yearly URL
- [ ] Verify `/research/about/` pricing copy matches products:
  - [ ] Monthly displayed `$15/mo`
  - [ ] Yearly displayed `$12/mo billed annually ($144/year)`
- [ ] Verify pricing toggle routes to correct URL (monthly vs yearly).

### B) Production deployment/link integrity
- [x] Deploy latest site changes to production.
- [x] Verify live `/research/about/` CTA hrefs are not `#waitlist` for paid tier.
- [x] Verify hero “Subscribe to Pro” CTA points to monthly product URL.
- [x] Verify all paid CTAs open valid Gumroad pages (HTTP `200`).

### C) End-to-end purchase flow
- [ ] Run monthly checkout smoke test (test card or controlled real purchase).
- [ ] Run yearly checkout smoke test.
- [ ] Verify post-checkout success page behavior.
- [ ] Verify receipt email delivery for each purchase.
- [ ] Verify content access/delivery behavior matches product setup.

### D) Existing subscriber continuity
- [ ] Test existing subscriber renewal path is unaffected.
- [ ] Test subscriber management links (cancel/manage/update payment) still work.
- [ ] Confirm no broken links in old emails/posts pointing to prior checkout URLs.

### E) Tracking and attribution
- [ ] Define UTM standard for paid CTAs (source/medium/campaign).
- [ ] Ensure CTA links include/preserve UTM params.
- [ ] Verify analytics event fires on CTA click.
- [ ] Verify conversion event attribution after successful checkout.
- [ ] Validate in analytics dashboard with a test conversion.

### F) Device/browser QA
- [ ] Desktop Chrome: pricing toggle + checkout pass.
- [ ] Desktop Safari/Firefox: pricing toggle + checkout pass.
- [ ] Mobile Safari (iOS): pricing toggle + checkout pass.
- [ ] Mobile Chrome (Android): pricing toggle + checkout pass.
- [ ] Incognito/private mode pass.

### G) DNS/SSL/ops safety checks
- [x] Confirm Cloudflare record remains DNS-only (`proxied=false`).
- [x] Confirm CNAME remains `domains.gumroad.com`.
- [ ] Run HTTPS health checks every few hours for 24h (`/` + product URL).
- [x] Capture and archive status results.
- [x] Add alerting/check script for regression (e.g., 525/503 detection).

---

## Risks
- Yearly pricing mismatch if same Gumroad URL is used for both billing modes.
- Production may be serving stale template/code (paid CTA `#waitlist`).
- Analytics blind spots if UTM/events are not validated post-checkout.

## Dependencies
- Gumroad admin access (to confirm/create yearly product URL and pricing).
- Site deploy access.
- Analytics access.

## Definition of Done
All checklist items A–G are complete, and monthly/yearly paid flows are verified on production with documented evidence (URLs, screenshots, status logs, and test transaction records).
