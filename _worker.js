export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const path = url.pathname;

    // 1. Research redirect
    if (path === "/research/") {
      return Response.redirect(`https://${url.hostname}/research/about/`, 301);
    }

    // 2. Opinion post regex redirect: /YYYY/MM/DD/slug/ -> /opinion/YYYY/MM/DD/slug/
    const postPattern = /^\/(\d{4})\/(\d{2})\/(\d{2})\/([^\/]+)\/?$/;
    const match = path.match(postPattern);
    
    if (match) {
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const slug = match[4];
      
      const newUrl = `https://${url.hostname}/opinion/${year}/${month}/${day}/${slug}/`;
      return Response.redirect(newUrl, 301);
    }

    // Fallthrough: don't intercept, let Pages handle it
    return env.ASSETS.fetch(request);
  }
}
