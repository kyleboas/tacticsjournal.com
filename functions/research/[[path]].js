import { isAuthenticated } from '../utils/auth.js';

function isHtmlResponse(response) {
  const contentType = response.headers.get('content-type') || '';
  return contentType.includes('text/html');
}

function redactPaidContent(html) {
  return html.replace(/(<div id="full-content"[^>]*>)([\s\S]*?)(<\/div>)/, '$1$3');
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
  }

  const headers = new Headers(response.headers);
  headers.delete('content-length');

  return new Response(html, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
