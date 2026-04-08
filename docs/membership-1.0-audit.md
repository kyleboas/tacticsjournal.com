# Membership 1.0 Audit (2026-04-08)

Branch: `feat/membership-1.0-audit-and-fixes`

## Summary

Task 1.0 is NOT complete. Multiple checklist items are marked done but are currently partial or broken in code.

## Audit by checklist area

### 1.4 Cloudflare Pages scaffolding
Status: partial

- `wrangler.toml` includes D1 binding and basic Pages config.
- Local dev docs exist in `README.md`, but command examples are incomplete/outdated (missing practical run flow and env setup guidance).

### 1.5 Data layer + server helpers
Status: partial

- Migrations exist for:
  - `users`, `sessions`, `magic_links`, `email_preferences`, `account_preferences`, `gumroad_events`.
- Gaps:
  - `users` table does not include a durable access model (`free/trial/pro`) required by paywall/webhook logic.
  - Session helper (`functions/utils/session.js`) hardcodes JWT secret and uses JWT verification incorrectly.
  - `env` validation includes required vars, but route code does not consistently use those vars safely.

### 1.6 Account + trial auth flow
Status: partial

- Implemented:
  - `/account/` page exists.
  - `POST /api/account/start`, `GET /account/finish`, `GET /api/account/session`, `POST /api/account/signout` files exist.
  - Header account entry exists in `_includes/header.html`.
- Gaps / defects:
  - Session verification currently unreliable due to broken JWT helper usage.
  - `/account/` JS calls `/api/account/email-preferences`, but no endpoint exists.
  - Trial state is not modeled robustly in DB/API responses.

### 1.7 Paywall rendering + access control
Status: partial

- `_layouts/post.html` has excerpt split and paywall UI.
- Gaps / defects:
  - Uses `<!--more-->` but task/spec references `<!---more--->` compatibility.
  - Current paid access check depends on `data.user.pro_status`, which is never returned by session API.
  - No reliable server-side enforcement of paid content access yet.

### 1.8 Integrations
Status: partial

#### 1.8.1 Buttondown sync
Status: mostly implemented, needs verification polish

- Sync utilities and trigger endpoint files exist.
- Tests currently fail (`npm test` fails).
- Duplicate subtask entries in task list history indicate incomplete verification hygiene.

#### 1.8.2 Gumroad webhook + reconciliation
Status: partial/broken

- `functions/api/gumroad-webhook.js` exists but has runtime issues:
  - Uses `context.db` instead of `context.env.DB`.
  - Uses Node `require('crypto')` in Worker code path.
  - Updates `users.access_level`, but that column does not exist.
  - Signature verification/event parsing likely mismatched for Cloudflare Worker runtime.

#### 1.8.3 Pricing/account UI routing
Status: not complete

- `research/about.md` still routes CTAs to waitlist anchors.
- Free/Pro routing behavior requested by task is not fully wired.

### 1.9 Policies/docs + verification
Status: not complete

- `privacy.md` still says no cookies and only Buttondown collection; no mention of auth/session cookies, Resend, Gumroad, D1 processing updates.
- No full verification evidence bundle yet for build/tests/manual auth-paywall flow.

### 1.10 Review handoff
Status: not complete

- No final implementation summary + deploy checklist + PR handoff package in repo yet.

## Immediate implementation order (one at a time)

1. Stabilize auth/session/access model:
   - Fix session helpers and session API.
   - Add missing email preferences endpoint.
   - Add user access/trial columns migration.
2. Fix paid content enforcement:
   - Ensure paid marker compatibility and worker-side gating.
3. Fix Gumroad webhook ingestion + access updates + reconciliation scaffolding.
4. Wire pricing/account CTA routing (Free -> account start trial, Pro -> Gumroad monthly/yearly).
5. Update docs/policies and run verification (tests/build/manual flow log).
6. Prepare review handoff notes.

## Baseline verification

- `npm test` currently fails (3 failing test files in custom test runner).