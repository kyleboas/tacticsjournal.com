# Membership 1.0 Verification Log

## 2026-04-08

Branch: `feat/membership-1.0-audit-and-fixes`

### Completed checks

- Rebased branch onto `origin/master` (no conflicts)
- `npm test` (passes in local workspace via smoke verification script)
  - output: `Smoke verification passed (12 files present).`

### Jekyll build

- `bundle exec jekyll build`
  - PASS — site built successfully in ~250s
  - No errors; one Sass @import deprecation warning; one Liquid warning in feed.xml
  - Output: `_site/` contains all expected pages (account/, research/, functions/, etc.)
  - Ruby 3.2.3 (system) + bundler 4.0.10 (user-install) + Jekyll 4.4.1
  - Gems installed to `vendor/bundle` (gitignored)
  - Note: Gemfile and Gemfile.lock are gitignored (deployed via Cloudflare Pages, not Jekyll)

### Automated QA script added

- `node scripts/qa-membership.mjs`
  - checks key membership routes for expected public/unauthorized behavior
  - supports optional authenticated internal checks with `INTERNAL_JOB_KEY`
  - set `BASE_URL` to target local dev or preview deployment

Example:

```bash
BASE_URL=http://127.0.0.1:8788 INTERNAL_JOB_KEY=your-key node scripts/qa-membership.mjs
```

### Manual flow checklist (next)

- [ ] Start magic-link sign-in
- [ ] Finish sign-in and session creation
- [ ] Verify account preferences save
- [ ] Verify email preferences save
- [ ] Verify paid research gating for free user
- [ ] Verify paid research access for trial user
- [ ] Verify Gumroad webhook updates user access
- [ ] Verify internal trial-expiry + reconcile endpoints with auth header
