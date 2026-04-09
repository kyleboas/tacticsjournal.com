export function validateEnv(env, options = {}) {
  const {
    requireDb = true,
    requireAssets = false,
    requireJwtSecret = false,
    requireResend = false,
    requireButtondown = false,
  } = options;

  if (requireDb && !env.DB) {
    throw new Error('DB binding not found. Ensure [[d1_databases]] is set in wrangler.toml.');
  }

  if (requireAssets && !env.ASSETS) {
    throw new Error('ASSETS binding not found. This is provided by Cloudflare Pages runtime.');
  }

  if (requireJwtSecret && !env.JWT_SECRET) {
    throw new Error('JWT_SECRET environment variable is not set.');
  }

  if (requireResend && !env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY environment variable is not set.');
  }

  if (requireButtondown && !env.BUTTONDOWN_API_KEY) {
    throw new Error('BUTTONDOWN_API_KEY environment variable is not set.');
  }
}
