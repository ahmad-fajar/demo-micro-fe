const proxy = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/app1',
    proxy({
      target: 'http://localhost:9001',
      pathRewrite: {
        '^/app1': '',
      },
    }),
  );
};
