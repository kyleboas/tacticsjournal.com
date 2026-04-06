/**
 * Cloudflare Worker: tj-redirects
 * Handles 301 redirects for the Tactics Journal URL restructure.
 * 
 * Routes (configured in Cloudflare dashboard/API):
 *   - tacticsjournal.com/20* (old opinion post URLs)
 *   - tacticsjournal.com/research* (research page)
 */
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Rule 1: Old opinion post URLs /YYYY/MM/DD/slug/ -> /opinion/YYYY/MM/DD/slug/
    const opinionMatch = path.match(/^\/(\d{4})\/(\d{2})\/(\d{2})\/([^/]+)\/?$/);
    if (opinionMatch) {
      const [, year, month, day, slug] = opinionMatch;
      const target = `${url.origin}/opinion/${year}/${month}/${day}/${slug}/`;
      return Response.redirect(target, 301);
    }

    // Rule 2: /research/ or /research -> /research/about/
    if (path === '/research/' || path === '/research') {
      return Response.redirect(`${url.origin}/research/about/`, 301);
    }

    // Rule 3: /research/index.html -> /research/about/
    if (path === '/research/index.html') {
      return Response.redirect(`${url.origin}/research/about/`, 301);
    }

    // Pass through to origin for any other paths caught by routes
    return fetch(request);
  }
}
