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

  app.use(
    '/app2',
    proxy({
      target: 'http://localhost:9002',
      pathRewrite: {
        '^/app2': '',
      },
    }),
  );

  app.use(
    '/app3',
    proxy({
      target: 'http://localhost:9003',
      pathRewrite: {
        '^/app3': '',
      },
    }),
  );
};
