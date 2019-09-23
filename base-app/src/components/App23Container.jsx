import React from 'react';
import { registerApplication, start } from 'single-spa';

const apps = [
  {
    name: 'app2',
    js: '/app2/app2.js',
  },
  {
    name: 'app3',
    js: '/app3/app3.js',
  },
];

async function startApp() {
  await apps.forEach(a => {
    registerApplication(
      a.name,

      async () => await window.SystemJS.import(a.js),

      () => window.location.pathname.startsWith('/ex2'),

      { moreProps: 'another props' },
    );
  });

  start();
}
startApp();

const App23Container = p => {
  return (
    <div id="ex2-container">
      <div>2 Apps, one page</div>

      <div id="container23">
        <div id="container2">&nbsp;</div>
        <div id="container3">&nbsp;</div>
      </div>
    </div>
  );
};

export default App23Container;
