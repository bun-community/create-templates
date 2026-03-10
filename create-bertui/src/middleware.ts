import type { MiddlewareContext } from 'bertui';

// src/middleware.ts — runs before EVERY request
// Delete this file if you don't need middleware

export async function onRequest(ctx: MiddlewareContext) {
  // Example: protect /dashboard routes
  if (ctx.pathname.startsWith('/dashboard')) {
    const token = ctx.headers.get('cookie');
    if (!token) {
      return ctx.redirect('/login');
    }
  }

  // Example: attach data to locals (available in your pages)
  // ctx.locals.user = await getUserFromCookie(ctx.headers.get('cookie'));

  // Example: block maintenance mode
  // if (process.env.MAINTENANCE === 'true') {
  //   return ctx.respond(new Response('Down for maintenance', { status: 503 }));
  // }
}

export async function onError(ctx: MiddlewareContext, error: Error) {
  console.error(`[${ctx.method}] ${ctx.pathname} →`, error.message);
}
