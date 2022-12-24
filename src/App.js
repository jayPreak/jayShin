import React from 'react';
// import './styles.css';
import './style.css'
import Comingsoon from './components/Comingsoon';
import Logo from './Logo';
import rocket from './assets/rocket1.png'
import Navbar from './components/Navbar';

function App() {
  return (
    
    <div>
      <Navbar />
    </div>
    // <div className="container">
    //   <Logo />
    //   <Comingsoon />
    //   <img src={rocket} className="rocket" alt="Rocket" id="rocket" />
    // </div>
  );
}

export default App;
