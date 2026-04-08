# Tactics Journal

This repository contains the source code for tacticsjournal.com.

## Local Development

### Jekyll
To build the static site locally:

```bash
bundle install
bundle exec jekyll serve
```

This will serve the site at `http://localhost:4000` (or similar).

### Cloudflare Pages Functions & D1
To run the Cloudflare Pages Functions and D1 locally, you will need to use `wrangler`.

First, install `wrangler`:

```bash
npm install -g wrangler
```

Then, to run the local development server for Pages Functions and D1:

```bash
wrangler pages dev --compatibility-date=2023-01-01 --binding DB:tacticsjournal_db --D1 tacticsjournal_db
```

Note: The `--D1 tacticsjournal_db` flag tells wrangler to bind a local D1 database named `tacticsjournal_db`. You might need to create this database first using `wrangler d1 create tacticsjournal_db`.

