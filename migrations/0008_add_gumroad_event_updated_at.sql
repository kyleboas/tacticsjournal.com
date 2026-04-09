ALTER TABLE gumroad_events ADD COLUMN updated_at DATETIME;
UPDATE gumroad_events
SET updated_at = created_at
WHERE updated_at IS NULL;
