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

# Try different endpoints
endpoints = [
    ('GET', 'https://api.buttondown.com/v1/emails', None),
    ('GET', 'https://api.buttondown.com/v1/tags', None),
    ('GET', 'https://api.buttondown.com/v1/subscribers', None),
]

for method, url, body in endpoints:
    print(f"\n=== {method} {url} ===")
    if method == 'GET':
        resp = requests.get(url, headers=headers)
    print(f"Status: {resp.status_code}")
    try:
        data = resp.json()
        if isinstance(data, dict):
            if 'results' in data:
                print(f"Count: {len(data['results'])}")
                if data['results']:
                    print(f"First: {json.dumps(data['results'][0], indent=2)[:300]}")
            else:
                print(json.dumps(data, indent=2)[:500])
    except:
        print(resp.text[:500])

# Try to create an email (draft first)
print("\n\n=== Attempting to create draft email ===")
email_data = {
    "subject": "I built something new for football tactics. Want early access?",
    "body": """Hey,

I've been building something I think you'll find valuable.

**Tactics Journal Research** is an autonomous system that monitors 200+ international football sources — blogs, press conferences, podcasts, coaching interviews — across leagues, languages, and cultures. Every hour, it pulls in new content, classifies it, and writes daily deep research reports on frontier tactical ideas before they hit mainstream coverage.

It finds ideas in German tactical blogs, Portuguese analysis, and press conferences where managers drop phrases weeks before anyone writes about the concept behind them.

One report per week is free. Every daily report is $15/month.

I'm opening early access soon. Join the waitlist to get first access:

https://tacticsjournal.com/research

— Kyle""",
    "tags": ["opinion"],
    "status": "draft",
}
resp = requests.post('https://api.buttondown.com/v1/emails', headers=headers, json=email_data)
print(f"Status: {resp.status_code}")
print(f"Response: {resp.text[:500]}")
