# Membership 1.0 Handoff Notes

Branch: `feat/membership-1.0-audit-and-fixes`
PR: https://github.com/kyleboas/tacticsjournal.com/pull/76

## Implemented

- Account magic-link auth flow (start/finish/session/signout)
- Session cookie + DB-backed session lifecycle
- Account preferences and email preferences APIs
- Trial state fields and migration (`access_level`, trial timestamps)
- Paid post excerpt/paywall split marker compatibility
- Research pricing CTA routing (Free -> account trial, Pro -> Gumroad monthly/yearly)
- Gumroad webhook ingestion endpoint + event logging
- Internal trial-expiry and reconciliation scaffolding endpoints
- Buttondown sync trigger wiring and state-based tagging
- Privacy and README updates for auth/billing/data handling

## Still required before production deploy

1. Secrets/config in Cloudflare Pages
   - `RESEND_API_KEY`
   - `GUMROAD_SELLER_ID` (optional but recommended)
   - `BUTTONDOWN_API_KEY`
   - `INTERNAL_JOB_KEY`

2. Verify real Gumroad product URLs and webhook payload field mapping.
3. Set up scheduled calls for:
   - `POST /api/internal/trial-expiry`
   - `POST /api/internal/reconcile-gumroad`
4. Run full manual E2E checks in deployed preview.

## Deployment cautions

- Do not deploy production without secret configuration and webhook signature verification test.
- Keep this as one PR branch for final review.
