import './App.css';
// import Home from './components/home'
import React from 'react';
import Menus from './components/pages/menu';
// import ReactDOM from "react-dom/client";
import Routers from './components/router/Routers';

  
function App(){
  return(
    <div>
      <div className="App">
        <div className='home' >
          <div className='home_menu' >
            <Menus/>
          </div>
          <div className='app'>
            <Routers/>
          </div>
        </div>
      </div>
    </div>
    );
}

export default App;
          

