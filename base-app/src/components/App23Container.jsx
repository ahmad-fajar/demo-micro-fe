import React from 'react';
import { registerApplication, start } from 'single-spa';
import { connect } from 'react-redux';

import store from '../store';

let hasRegister = false;

const App23Container = p => {
  const apps = [
    {
      name: 'app2',
      js: '/app2/app2.js',
      props: {
        store,
      },
    },
    {
      name: 'app3',
      js: '/app3/app3.js',
      props: {
        store,
      },
    },
  ];

  async function startApp() {
    await apps.forEach(a => {
      registerApplication(
        a.name,

        async () => await window.SystemJS.import(a.js),

        location => location.pathname.startsWith('/ex2'),

        { ...a.props },
      );
    });

    start();
    return;
  }

  if(!hasRegister) {
    startApp();
    hasRegister = true;
  }

  return (
    <div id="ex2-container">
      <div id="example2-header">
        <p>2 Apps, one page</p>
        <p>Message from app2: <span>{p.app2Txt}</span></p>
        <p>Message from app3: <span>{p.app3Txt}</span></p>
      </div>

      <div id="container23">
        <div id="container2">&nbsp;</div>
        <div id="container3">&nbsp;</div>
      </div>
    </div>
  );
};

const mapState = s => {
  const { appManager: a } = s;
  return {
    app2Txt: a.app2Txt,
    app3Txt: a.app3Txt,
  };
}

export default connect(mapState)(App23Container);
