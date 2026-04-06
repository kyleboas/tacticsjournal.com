#!/usr/bin/env python3
"""Check Buttondown API capabilities and subscriber details."""
import requests
import json

api_key = None
with open('/root/.hermes/.env') as f:
    for line in f:
        if line.startswith('BUTTONDOWN_API_KEY='):
            api_key = line.strip().split('=', 1)[1]
            break

headers = {
    'Authorization': f'Token {api_key}',
    'Content-Type': 'application/json'
}

# Check account info
print("=== Account Info ===")
resp = requests.get('https://api.buttondown.com/v1/user', headers=headers)
print(f"Status: {resp.status_code}")
print(json.dumps(resp.json(), indent=2))

# Check existing emails/newsletters
print("\n=== Existing Emails ===")
resp = requests.get('https://api.buttondown.com/v1/emails', headers=headers)
print(f"Status: {resp.status_code}")
data = resp.json()
if isinstance(data, dict) and 'results' in data:
    print(f"Count: {len(data['results'])}")
    for e in data['results'][:3]:
        print(f"  - {e.get('subject', '?')} ({e.get('publish_date', '?')})")
elif isinstance(data, list):
    print(f"Count: {len(data)}")
    for e in data[:3]:
        print(f"  - {e.get('subject', '?')} ({e.get('publish_date', '?')})")
else:
    print(json.dumps(data, indent=2)[:500])

# Check tags
print("\n=== Tags ===")
resp = requests.get('https://api.buttondown.com/v1/tags', headers=headers)
print(f"Status: {resp.status_code}")
data = resp.json()
if isinstance(data, dict) and 'results' in data:
    for t in data['results'][:10]:
        print(f"  - {t}")
elif isinstance(data, list):
    for t in data[:10]:
        print(f"  - {t}")
else:
    print(json.dumps(data, indent=2)[:500])
