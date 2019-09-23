import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { registerApplication, start } from 'single-spa';

// import appRegistry from './appRegistry';

// import SystemJS
import './helper/system';

import { BrowserRouter, Route } from 'react-router-dom';

async function startApp() {
  // appRegistry.forEach(a => {
  //   registerApplication(
  //     a.appName,
  //     () => import(a.js),
  //     () => a.active,
  //     {
  //       sampleProp: 'just some random string',
  //     },
  //   );
  // });
  
  await registerApplication(
    'app1',
  
    async () => await window.SystemJS.import('/app1/app1.js'),
  
    () => window.location.pathname.startsWith('/app1'),
  
    { sampleProp: 'just some random string' },
  );
  
  start();
}
startApp();

ReactDOM.render(
  (
    <BrowserRouter>
      <Route component={App}/>
    </BrowserRouter>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
// startApp();
