# Gumroad Custom Domain QA Log

## 2026-04-10 01:40 UTC

### DNS / SSL
- `pro.tacticsjournal.com` CNAME -> `domains.gumroad.com` (confirmed via Cloudflare API)
- Cloudflare proxy status -> `proxied=false` (DNS only)
- `https://pro.tacticsjournal.com/` -> `200`
- `https://pro.tacticsjournal.com/l/avkyur` -> `200`
- Automated check script added: `scripts/gumroad-health-check.sh`
- Script run output:
  - `2026-04-10T03:06:04Z https://pro.tacticsjournal.com/ 200`
  - `2026-04-10T03:06:04Z https://pro.tacticsjournal.com/l/avkyur 200`

### Live page behavior
- URL checked: `https://tacticsjournal.com/research/about/`
- Initial check: paid CTA rendered `href="#waitlist"` on production.
- Fix applied and deployed.
- Final check (post-propagation):
  - Paid CTA now points to `https://pro.tacticsjournal.com/l/avkyur`
  - Free CTA points to `/account/?intent=trial`
  - No `#waitlist` paid CTA remains

### Pricing/product alignment
- Local `_config.yml` currently sets both monthly and yearly to same URL:
  - `gumroad_pro_monthly_url: https://pro.tacticsjournal.com/l/avkyur`
  - `gumroad_pro_yearly_url: https://pro.tacticsjournal.com/l/avkyur`
- Gumroad page `.../l/avkyur` visibly shows `$15` plan; yearly checkout URL not yet confirmed.

### Deploy notes
- `master` branch commits pushed:
  - `a14dd3ed` route research pricing CTAs to account trial and gumroad checkout
  - `76137066` fix research about layout and pricing cards rendering
  - `90d4aaab` point Gumroad links to pro custom domain

### Blockers
- Need Gumroad yearly checkout URL (or confirm if single URL supports both cadences).
- Need analytics access for attribution verification.
