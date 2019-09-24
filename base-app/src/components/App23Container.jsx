import React, { useState } from 'react';
import { registerApplication, start, triggerAppChange } from 'single-spa';
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

        () => true,
        // (location) => location.pathname.startsWith('/ex2'),

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

  console.log(p)
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

// export default App23Container;

const mapState = s => {
  const { appManager: a } = s;
  return {
    texts: a,
  };
}

export default connect(mapState)(App23Container);
