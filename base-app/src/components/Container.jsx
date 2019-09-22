import React from 'react';
import { Route, Switch } from 'react-router-dom';

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
      </Switch>
    </div>
  );
};

export default Container;
