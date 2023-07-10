import ReactDOM from "react-dom/client";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from '../home.js';
import Customers from '../pages/Customer.js'
import Products from '../pages/Products.js'
import Employe from '../pages/Employe.js'
import Services from '../pages/Services.js'
import Login from "../login/login.js";
import Register from "../login/Register.js";
import Billdetails from "../pages/Bill_details.js"
import Profile from "../pages/Profile.js"

function Routers(props) {

    return (
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/customer" element={<Customers/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/employe" element={<Employe/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/bill" element={<Billdetails/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Register/>}/>
          {/* <Route path="login" element={<Bills/>}/> */}
        </Routes>
    );
  }

  
  export default Routers;

// import React from "react";
// import {
//   BrowserRouter ,
//   Router,
//   Route,
//   Link,
//   Routes,
//   Navigate,
//   useLocation
// } from "react-router-dom";

// export default function NoMatchExample() {
//   return (
//     <div>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/old-match/*">Old Match, to be redirected</Link>
//           </li>
//           <li>
//             <Link to="/will-match">Will Match</Link>
//           </li>
//           <li>
//             <Link to="/will-not-match">Will Not Match</Link>
//           </li>
//           <li>
//             <Link to="/also/will/not/match">Also Will Not Match</Link>
//           </li>
//         </ul>

//         <Routes>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route path="/old-match">
//             <Navigate to="/will-match" />
//           </Route>
//           <Route path="/will-match">
//             <WillMatch />
//           </Route>
//           <Route path="*">
//             <NoMatch />
//           </Route>
//         </Routes>
//       </div>
//     </div>
//   );
// }

// function Home() {
//   return <h3>Home</h3>;
// }

// function WillMatch() {
//   return <h3>Matched!</h3>;
// }

// function NoMatch() {
//   let location = useLocation();

//   return (
//     <div>
//       <h3>
//         No match for <code>{location.pathname}</code>
//       </h3>
//     </div>
//   );
// }
