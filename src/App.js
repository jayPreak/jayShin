import React from 'react';
import './styles.css';
import Comingsoon from './components/Comingsoon';
import Logo from './Logo';
import rocket from './assets/rocket1.png'

function App() {
  return (
    <div className="container">
      <Logo />
      {/* <h1>Coming Soon</h1> */}
      <Comingsoon />
      <img src={rocket} className="rocket" alt="Rocket" id="rocket" />
    </div>
  );
}

export default App;
