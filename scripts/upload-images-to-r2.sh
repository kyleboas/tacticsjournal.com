#!/bin/bash
# Upload all GitHub images to Cloudflare R2
# This can take 30-60 minutes for ~917 images
# Can be interrupted and resumed safely

set -e

BUCKET="tacticsjournal-images"
IMAGES_REPO="/tmp/tj-images"
LOG_FILE="/tmp/r2-upload.log"

echo "Starting R2 image upload..."
echo "Bucket: $BUCKET"
echo "Logging to: $LOG_FILE"

cd "$IMAGES_REPO"

# Find all images
all_files=$(find . -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" -o -name "*.gif" \) | sort)
total=$(echo "$all_files" | wc -l)
count=0
success=0
skip=0

for file in $all_files; do
  count=$((count + 1))
  key="${file#./}"
  ext="${file##*.}"
  
  case "$ext" in
    png) ct="image/png" ;;
    jpg|jpeg) ct="image/jpeg" ;;
    gif) ct="image/gif" ;;
    *) ct="application/octet-stream" ;;
  esac
  
  # Show progress every 25 files
  if (( count % 25 == 0 )); then
    pct=$(( count * 100 / total ))
    echo "[$pct%] $count/$total - Success: $success, Skipped: $skip"
  fi
  
  # Try to upload
  if wrangler r2 object put "$BUCKET/$key" --file="$file" --content-type="$ct" --remote >/dev/null 2>&1; then
    success=$((success + 1))
    echo "$key" >> "$LOG_FILE"
  else
    skip=$((skip + 1))
  fi
done

echo ""
echo "=== COMPLETE ==="
echo "Total files: $total"
echo "Success: $success"
echo "Skipped/Failed: $skip"
echo "Log saved to: $LOG_FILE"
