# Membership 1.0 Verification Log

## 2026-04-08

Branch: `feat/membership-1.0-audit-and-fixes`

### Completed checks

- Rebased branch onto `origin/master` (no conflicts)
- `npm test` (passes in local workspace via smoke verification script)
  - output: `Smoke verification passed (12 files present).`

### In-progress / blocked checks

- `bundle exec jekyll build`
  - blocked in this environment: `bundle: command not found`

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
