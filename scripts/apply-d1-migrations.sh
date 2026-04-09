#!/usr/bin/env bash
set -euo pipefail

DB_REF="${1:-DB}"
MODE="${2:---local}"

if [[ -z "$DB_REF" ]]; then
  echo "Usage: scripts/apply-d1-migrations.sh [d1_binding_or_name] [--local|--remote]"
  exit 1
fi

if [[ "$MODE" != "--local" && "$MODE" != "--remote" ]]; then
  echo "Invalid mode: $MODE (expected --local or --remote)"
  exit 1
fi

echo "Applying migrations to '$DB_REF' ($MODE)..."
wrangler d1 migrations apply "$DB_REF" "$MODE" --config wrangler.toml
echo "Done."
