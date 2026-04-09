export async function onRequest(context) {
  const { request, next } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // 1. Research redirect
  if (path === '/research' || path === '/research/') {
    return Response.redirect(`${url.origin}/research/about/`, 301);
  }

  // 2. Opinion post regex redirect: /YYYY/MM/DD/slug/ -> /opinion/YYYY/MM/DD/slug/
  const postPattern = /^\/(\d{4})\/(\d{2})\/(\d{2})\/([^\/]+)\/?$/;
  const match = path.match(postPattern);

  if (match) {
    const year = match[1];
    const month = match[2];
    const day = match[3];
    const slug = match[4];
    const newUrl = `${url.origin}/opinion/${year}/${month}/${day}/${slug}/`;
    return Response.redirect(newUrl, 301);
  }

  return next();
}
