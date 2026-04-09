import { access } from 'node:fs/promises';

const requiredFiles = [
  'functions/api/account/start.js',
  'functions/account/finish.js',
  'functions/api/account/session.js',
  'functions/api/account/signout.js',
  'functions/api/account/preferences.js',
  'functions/api/account/email-preferences.js',
  'functions/api/gumroad-webhook.js',
  'functions/api/internal/trial-expiry.js',
  'functions/api/internal/reconcile-gumroad.js',
  'functions/research/[[path]].js',
  'migrations/0007_add_membership_access_fields.sql',
  'docs/membership-1.0-audit.md',
];

for (const file of requiredFiles) {
  try {
    await access(file);
  } catch {
    console.error(`Missing required file: ${file}`);
    process.exit(1);
  }
}

console.log(`Smoke verification passed (${requiredFiles.length} files present).`);
