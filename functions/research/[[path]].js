import { isAuthenticated } from '../utils/auth.js';

function isHtmlResponse(response) {
  const contentType = response.headers.get('content-type') || '';
  return contentType.includes('text/html');
}

function redactPaidContent(html) {
  // Replace everything between the full-content opening and closing tag
  // with a comment placeholder. Uses a balanced approach: find the opening
  // tag, then count nested divs to find the true closing tag.
  const marker = '<div id="full-content"';
  const start = html.indexOf(marker);
  if (start === -1) return html;

  // Find the end of the opening tag
  const openEnd = html.indexOf('>', start);
  if (openEnd === -1) return html;

  // Count nested divs to find the correct closing tag
  let depth = 1;
  let pos = openEnd + 1;
  while (pos < html.length && depth > 0) {
    const nextOpen = html.indexOf('<div', pos);
    const nextClose = html.indexOf('</div', pos);

    if (nextClose === -1) break;

    if (nextOpen !== -1 && nextOpen < nextClose) {
      depth++;
      pos = nextOpen + 4;
    } else {
      depth--;
      pos = nextClose + 6;
    }
  }

  const before = html.slice(0, openEnd + 1);
  const after = html.slice(pos - 6); // Keep the </div>
  return before + '<!-- paid content removed -->' + after;
}

export async function onRequest(context) {
  const response = await context.next();

  if (!isHtmlResponse(response)) {
    return response;
  }

  const url = new URL(context.request.url);
  if (url.pathname === '/research/about/' || url.pathname === '/research/about') {
    return response;
  }

  let html = await response.text();

  // Only paid posts include this container.
  if (!html.includes('id="full-content"')) {
    const passthroughHeaders = new Headers(response.headers);
    passthroughHeaders.delete('content-length');
    return new Response(html, {
      status: response.status,
      statusText: response.statusText,
      headers: passthroughHeaders,
    });
  }

  const auth = await isAuthenticated(context.request, context.env);
  const hasPaidAccess = Boolean(auth?.hasPaidAccess);

  if (!hasPaidAccess) {
    html = redactPaidContent(html);
    // Unhide paywall CTA if it exists
    html = html.replace(/id=["']paywall-cta["']\s+style=["']display:\s*none;?["']/, 'id="paywall-cta"');
  }

  const headers = new Headers(response.headers);
  headers.delete('content-length');
  headers.set('Cache-Control', 'private, no-store');
  headers.set('Vary', 'Cookie');

  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
