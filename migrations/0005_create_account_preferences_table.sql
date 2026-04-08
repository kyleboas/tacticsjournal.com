CREATE TABLE IF NOT EXISTS account_preferences (
    user_id TEXT PRIMARY KEY,
    theme TEXT DEFAULT 'system',
    font_size TEXT DEFAULT 'medium',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);