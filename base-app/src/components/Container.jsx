import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App23Container from './App23Container';
import HelloReact from './HelloReact';

function Container(props) {
  return (
    <div id="app">
      <Switch>

        <Route
          exact
          path='/'
          render={p => <HelloReact {...p} />}
        />

        <Route
          exact
          path='/ex2'
          render={p => <App23Container {...p}/>}
        />

      </Switch>
    </div>
  );
};

export default Container;
