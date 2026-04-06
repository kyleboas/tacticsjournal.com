#!/usr/bin/env python3
import requests
import json

# Read the full key from .env
api_key = None
with open('/root/.hermes/.env') as f:
    for line in f:
        if line.startswith('BUTTONDOWN_API_KEY='):
            api_key = line.strip().split('=', 1)[1]
            break

if not api_key:
    print("ERROR: BUTTONDOWN_API_KEY not found")
    exit(1)

# Paginate through all subscribers
url = 'https://api.buttondown.com/v1/subscribers'
headers = {'Authorization': f'Token {api_key}'}
all_subs = []
page = 1
while True:
    resp = requests.get(url, headers=headers, params={'page': page, 'page_size': 100})
    if resp.status_code != 200:
        print(f'Error: {resp.status_code} {resp.text}')
        break
    data = resp.json()
    results = data.get('results', [])
    all_subs.extend(results)
    if not data.get('next'):
        break
    page += 1

print(f'Total subscribers: {len(all_subs)}')
print()
print("Last 10 subscribers:")
for s in all_subs[-10:]:
    print(f'  {s.get("creation_date", "?")} - {s.get("email", "?")} - metadata: {s.get("metadata", {})}')

# Count by tag
from collections import Counter
tag_counts = Counter()
for s in all_subs:
    for tag in s.get('tags', []):
        tag_counts[tag] += 1
if tag_counts:
    print()
    print("Subscriber tags:")
    for tag, count in tag_counts.most_common():
        print(f'  {tag}: {count}')
