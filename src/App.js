import './App.css';
// import Home from './components/home'
import React, { useEffect } from 'react';
import Menus from './components/pages/menu';
// import ReactDOM from "react-dom/client";
import Routers from './components/router/Routers';
import {  Routes, Route } from "react-router-dom";
import Login from "./components/login/LoginTab";
import Register from "./components/login/Register";



  
function App(){

  let url = window.location.href.split("/").pop()


  return(
    <div>
      <div className="App">
        <div className='home' >
          <div className='home_menu' >
            <Menus/>
          </div>
          
          <div className={url == "login" ? "app" : "app"   }>
            <Routers/>
          </div>
        </div>

      </div>
    </div>
    );
}

export default App;
          

