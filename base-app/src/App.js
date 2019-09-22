import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import NavBar from './components/NavBar';
import HelloReact from './components/HelloReact';

function App(props) {
  console.log(props)
  return (
    <div className="App">
      <NavBar {...props}/>
        <Switch>
          <Route
            exact
            path='/'
            render={p => <HelloReact { ...p } />}
          />
        </Switch>

      {/* <HelloReact /> */}
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <div className="App">
//         <NavBar {...this.props}/>
//           <Switch>
//             <Route
//               exact
//               path='/'
//               render={p => <HelloReact { ...p } />}
//             />
//           </Switch>
  
//         {/* <HelloReact /> */}
//       </div>
//     );
//   }
// }

export default App;
