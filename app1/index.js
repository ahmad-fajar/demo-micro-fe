import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import './index.css';

const AppRoot = p => {
  console.log('props: ', p)
  const s = {
    color: 'blue',
    fontSize: '48px',
    fontWeight: 'bold',
  };
  return(
    <div style={s}>
      Hello App1 World
    </div>
  )
};

// ReactDOM.render(<AppRoot />, document.getElementById('app'));

const reactLifeCycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: AppRoot,
});

export const bootstrap = [reactLifeCycles.bootstrap];
export const mount = [reactLifeCycles.mount];
export const unmount = [reactLifeCycles.unmount];

function domElementGetter() {
  const APP_NAME = 'app1';
  const MOUNT_DIV = 'app';

  let el = document.getElementById(APP_NAME);

  if (!el) {
    el = document.createElement('div');
    el.id = APP_NAME;
    document.body.appendChild(el);
  }

  let app = document.getElementById(MOUNT_DIV);
  if (!app) {
    app = app.createElement('div');
    app.id = MOUNT_DIV;
    document.body.appendChild(app);
  }

  app.appendChild(el);

  return el;
}
