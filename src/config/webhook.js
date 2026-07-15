// Single source of truth for where checkout submissions go.
// Set PUBLIC_WEBHOOK_URL in a .env file (see .env.example) or in your
// Netlify environment variables to point this at a real endpoint.
export const WEBHOOK_URL =
  import.meta.env.PUBLIC_WEBHOOK_URL || 'https://example.com/webhook';
