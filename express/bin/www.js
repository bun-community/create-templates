#!/usr/bin/env node

/**
 * Module dependencies.
 */
import app from '../app';
import Bun from 'bun';

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = Bun.serve({
  fetch: (req) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response
    // https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect_static
    return Response.redirect(req.url);
  },
  // Optional port number - the default value is 3000
  port
});
/**
 * Listen on provided port, on all network interfaces.
 */
app.set('server', server);
app.listen(port);

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
