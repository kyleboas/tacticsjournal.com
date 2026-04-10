#!/usr/bin/env bash
set -euo pipefail

DOMAIN="pro.tacticsjournal.com"
PATHS=("/" "/l/avkyur")
TS="$(date -u +"%Y-%m-%dT%H:%M:%SZ")"
FAIL=0

for p in "${PATHS[@]}"; do
  url="https://${DOMAIN}${p}"
  code="$(curl -sS -L -o /dev/null -w '%{http_code}' --max-time 15 "$url" || echo 000)"
  echo "${TS} ${url} ${code}"
  if [[ "$code" != "200" ]]; then
    FAIL=1
  fi
done

if [[ $FAIL -ne 0 ]]; then
  echo "FAIL: Gumroad domain health regression detected"
  exit 1
fi

echo "OK: Gumroad domain healthy"
