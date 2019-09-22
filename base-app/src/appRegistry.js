export default [
  {
    active: window.location.pathname.startsWith('/app1'),
    appName: 'app1',
    js: 'http://0.0.0.0:9001/app1.js',
    route: '/app1',
  },
  {
    active: localStorage.getItem('/app2') === true,
    appName: 'app2',
    js: 'app2.js',
    route: '/app2',
  },
];
