// eslint-disable-next-line linebreak-style
// eslint-disable-next-line no-undef
import HTTPServer from 'http-server';

const httpServer = new HTTPServer({
  root: './public',
});

httpServer.start();
