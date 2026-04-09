export async function onRequest(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // Serve images from R2
  // Path is /images/...
  const key = decodeURIComponent(path.slice(8));
  const object = await env.IMAGES.get(key);

  if (object) {
    const headers = new Headers();
    headers.set('Content-Type', object.httpMetadata?.contentType || 'application/octet-stream');
    headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    headers.set('ETag', object.etag);
    return new Response(object.body, { headers });
  }

  return new Response('Not found', { status: 404 });
}
