import React from 'react';

import './App.css';

import NavBar from './components/NavBar';
import Container from './components/Container';

function App(props) {
  return (
    <div className="App">
      <NavBar {...props} />
      <Container />
    </div>
  );
}

export default App;
