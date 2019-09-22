import React, { useState } from 'react'

const SideBar = p => {
  console.log(p)
  const [activeItem, setActive] = useState('home');

  const clickHandler = n => {
    setActive(n);
    p.history.push(`/${n}`);
  };

  const navItem = (label, name) => {
    let cName = 'nav-item';
    if (activeItem === name) { cName += ' active'; }

    return (
      <li className={cName} onClick={() => clickHandler(name)} >
        <a className="nav-link">{label}</a>
      </li>
    );
  };

  console.log(activeItem)
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">Micro FE Demo</a>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto">
            {navItem('Home', 'home', '/')}
            {navItem('App1', 'app1')}
            {navItem('App2', 'app2')}
            <li>{activeItem}</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

// class SideBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeItem: 'home',
//     };
//   }

//   clickHandler(n) {
//     this.setState({ activeItem: n });
//     this.props.history.push(`/${n}`);
//   }

//   navItem(label, name) {
//     let cName = 'nav-item';
//     if (this.state.activeItem === name) { cName += ' active'; }

//     return (
//       <li className={cName} onClick={() => this.clickHandler(name)} >
//         <a className="nav-link">{label}</a>
//       </li>
//     );
//   }

//   render() {
//     console.log(this.props)
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//           <a className="navbar-brand">Micro FE Demo</a>
//           <div className="collapse navbar-collapse" id="navbarColor02">
//             <ul className="navbar-nav mr-auto">
//               {this.navItem('Home', 'home', '/')}
//               {this.navItem('App1', 'app1')}
//               {this.navItem('App2', 'app2')}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

export default SideBar;
