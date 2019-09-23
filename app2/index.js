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
      Hello App2 World
    </div>
  )
};

// ReactDOM.render(<AppRoot />, document.getElementById('container2'));

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
  const APP_NAME = 'app2';
  const MOUNT_DIV = 'container2';
  const APPS_CONTAINER_DIV = 'container23';
  const EX2_CONTAINER_DIV = 'ex2-container';

  let app = document.getElementById('app');
  if (!app) {
    app = document.createElement('div');
    app.id = 'app';
    document.body.appendChild(app);
  }

  let ex2ContainerDiv = document.getElementById(EX2_CONTAINER_DIV);
  if (!ex2ContainerDiv) {
    ex2ContainerDiv = document.createElement('div');
    ex2ContainerDiv.id = EX2_CONTAINER_DIV;
    app.appendChild(ex2ContainerDiv);
  }

  let appsContainerDiv = document.getElementById(APPS_CONTAINER_DIV);
  if (!appsContainerDiv) {
    appsContainerDiv = document.createElement('div');
    appsContainerDiv.id = APPS_CONTAINER_DIV;
    ex2ContainerDiv.appendChild(appsContainerDiv);
  }

  let mountDiv = document.getElementById(MOUNT_DIV);
  if (!mountDiv) {
    mountDiv = document.createElement('div');
    mountDiv.id = MOUNT_DIV;
    appsContainerDiv.appendChild(mountDiv);
  }

  let el = document.getElementById(APP_NAME);
  if (!el) {
    el = document.createElement('div');
    el.id = APP_NAME;
  }

  mountDiv.appendChild(el);

  return el;
}
