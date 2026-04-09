#!/bin/bash
# Fast image upload to Cloudflare R2 using rclone
# Run this on your Mac, a cloud VM, anywhere with good bandwidth
# 
# Usage:
#   1. Set your R2 credentials below
#   2. Run: bash upload-images-rclone.sh
#
# Prerequisites: just rclone (brew install rclone or https://rclone.org/install)

set -e

# ──── R2 Credentials (get from Cloudflare Dashboard → R2 → Manage R2 API Tokens) ────
R2_ACCOUNT_ID="2d3ea24699352951b9856db8ea1ceb49"
R2_ACCESS_KEY_ID="YOUR_ACCESS_KEY_ID"
R2_SECRET_ACCESS_KEY="YOUR_SECRET_ACCESS_KEY"
BUCKET="tacticsjournal-images"

# ──── Config ────
REMOTE_NAME="tj-r2"
LOCAL_DIR="/tmp/tj-images"
PARALLEL_TRANSFERS=20

# ──── Step 1: Install rclone if needed ────
if ! command -v rclone &> /dev/null; then
  echo "Installing rclone..."
  curl https://rclone.org/install.sh | sudo bash
fi

# ──── Step 2: Configure rclone remote ────
rclone config create "$REMOTE_NAME" s3 provider "Cloudflare" access_key_id "$R2_ACCESS_KEY_ID" secret_access_key "$R2_SECRET_ACCESS_KEY" endpoint "https://${R2_ACCOUNT_ID}.r2.cloudflarestorage.com" 2>/dev/null || true

# ──── Step 3: Clone images repo (if not already cloned) ────
if [ ! -d "$LOCAL_DIR" ]; then
  echo "Cloning images repo..."
  git clone --depth 1 https://github.com/kyleboas/images.git "$LOCAL_DIR"
fi

# ──── Step 4: Sync to R2 ────
echo ""
echo "Uploading to R2 ($PARALLEL_TRANSFERS parallel transfers)..."
echo "This should take ~5-10 minutes for 917 files (~450MB)"
echo ""

rclone sync "$LOCAL_DIR/" "${REMOTE_NAME}:${BUCKET}/" \
  --transfers "$PARALLEL_TRANSFERS" \
  --checkers 10 \
  --multi-thread-streams 4 \
  --progress \
  --s3-no-check-bucket

echo ""
echo "✅ Done! All images uploaded to R2 bucket: $BUCKET"
