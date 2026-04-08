CREATE TABLE IF NOT EXISTS email_preferences (
    user_id TEXT PRIMARY KEY,
    newsletter_enabled BOOLEAN DEFAULT TRUE,
    research_updates_enabled BOOLEAN DEFAULT TRUE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);