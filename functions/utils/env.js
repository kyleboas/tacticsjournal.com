export function validateEnv(env) {
  if (!env.DB) {
    throw new Error("DB binding not found. Ensure you have [[d1_databases]] in wrangler.toml.");
  }
  if (!env.ASSETS) {
    throw new Error("ASSETS binding not found. This should be automatically provided by Cloudflare Pages.");
  }
  // Add other required environment variables here
  if (!env.JWT_SECRET) {
    throw new Error("JWT_SECRET environment variable is not set.");
  }
  if (!env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY environment variable is not set.");
  }
  if (!env.GUMROAD_WEBHOOK_SECRET) {
    throw new Error("GUMROAD_WEBHOOK_SECRET environment variable is not set.");
  }
}
