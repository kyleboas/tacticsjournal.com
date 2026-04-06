#!/usr/bin/env python3
"""Send email to opinion subscribers via Buttondown API about research waitlist."""
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

headers = {
    'Authorization': f'Token {api_key}',
    'Content-Type': 'application/json'
}

# Create and send a broadcast email to the "opinion" tag segment
email_data = {
    "subject": "I built something new for football tactics. Want early access?",
    "body": """Hey,

I've been building something I think you'll find valuable.

**Tactics Journal Research** is an autonomous system that monitors 200+ international football sources — blogs, press conferences, podcasts, coaching interviews — across leagues, languages, and cultures. Every hour, it pulls in new content, classifies it, and writes daily deep research reports on frontier tactical ideas before they hit mainstream coverage.

It finds ideas in German tactical blogs, Portuguese analysis, and press conferences where managers drop phrases weeks before anyone writes about the concept behind them.

One report per week is free. Every daily report is $15/month — cheaper than running it yourself.

I'm opening early access soon. **Join the waitlist to get first access:**

**[https://tacticsjournal.com/research](https://tacticsjournal.com/research)**

— Kyle""",
    "tags": ["opinion"],
    "publish_date": "right_now",
}

print("Sending email to opinion subscribers...")
resp = requests.post(
    'https://api.buttondown.com/v1/emails',
    headers=headers,
    json=email_data
)

print(f"Status: {resp.status_code}")
print(f"Response: {json.dumps(resp.json(), indent=2)}")

if resp.status_code in (200, 201):
    print("\n✅ Email sent successfully to opinion subscribers!")
else:
    print(f"\n❌ Error sending email: {resp.text}")
