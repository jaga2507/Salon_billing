import './App.css';
import React, { useEffect } from 'react';
import Menus from './components/pages/menu';
import Routers from './components/router/Routers';
import {   useNavigate } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';



  
function App(){

  let url = window.location.href.split("/").pop()
  const history = useNavigate();

  // useEffect(() => {
  //   // const unlisten = history.listen((location) => {
  //   //   const pathSegments = location.pathname.split('/');
  //   //   const lastSegment = pathSegments.pop(); 
  //   //   window.location.href = lastSegment;
  //   // });

  //   // return () => {
  //   //   unlisten(); // Clean up the listener when the component unmounts
  //   // };
  // }, [history]);

  // console.log("unlisten" , lastSegment)


  return(
    <div>
      <div className="App">
        <div className='home' >
          <div className='home_menu' >
            <Menus/>
          </div>
          
          <div className={url == "login" ? "withoutApp" : "app"   }>
            <Routers/>
          </div>
        </div>

      </div>
    </div>
    );
}

export default App;
          

