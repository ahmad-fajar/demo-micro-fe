import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { registerApplication, start } from 'single-spa';

import { Provider } from 'react-redux';
import store from './store';

// import SystemJS
import './helper/system';

import { BrowserRouter, Route } from 'react-router-dom';


function startApp() {
  registerApplication(
    'app1',

    async () => await window.SystemJS.import('/app1/app1.js'),

    (location) => location.pathname.startsWith('/ex1'),

    { sampleProp: 'just some random string' },
  );

  start();
}
startApp();

ReactDOM.render(
  (
    <BrowserRouter>
      <Provider store={store}>
        <Route component={App}/>
      </Provider>
    </BrowserRouter>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
