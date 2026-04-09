# Tactics Journal

This repository contains the source for tacticsjournal.com (Jekyll) plus Cloudflare Pages Functions for account auth, paywall access, and billing integrations.

## Local development

### 1) Jekyll site

```bash
bundle install
bundle exec jekyll serve
```

### 2) Cloudflare Pages Functions + D1

```bash
npm install
wrangler pages dev . --d1 DB=tacticsjournal_db
```

## Required environment variables

Set these in Cloudflare Pages project settings (and locally when testing functions):

- `RESEND_API_KEY`
- `GUMROAD_SELLER_ID` (optional but recommended; rejects webhooks from unexpected seller)
- `BUTTONDOWN_API_KEY`
- `INTERNAL_JOB_KEY` (for internal scheduled endpoints)

## Database migrations

```bash
# local
scripts/apply-d1-migrations.sh DB --local

# remote (production)
scripts/apply-d1-migrations.sh DB --remote
```

Migrations are in `migrations/`.

## Key function routes

- `POST /api/account/start`
- `GET /account/finish`
- `GET /api/account/session`
- `POST /api/account/signout`
- `POST /api/account/preferences`
- `POST /api/account/email-preferences`
- `POST /api/gumroad-webhook`
- `POST /api/internal/trial-expiry` (requires `Authorization: Bearer <INTERNAL_JOB_KEY>`)
- `POST /api/internal/reconcile-gumroad` (requires `Authorization: Bearer <INTERNAL_JOB_KEY>`)
- `POST /api/sync/trigger`

## Deployment path

- Build with Jekyll
- Deploy via Cloudflare Pages
- Set real `database_id` for `DB` in `wrangler.toml` (placeholder is committed intentionally)
- Configure secrets listed above
- Ensure GitHub Actions secret `INTERNAL_JOB_KEY` is set for `.github/workflows/membership-maintenance.yml`
