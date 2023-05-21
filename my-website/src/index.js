import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import Catalogue from "./catalogue";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from "./client-components/Singup";
import Login from "./client-components/Login";
import Chat from "./chat"

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/home" element={<App />} />
//         <Route path="/Catalogue" element={<Catalogue />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const user = localStorage.getItem("token");
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/" element= {<App />} />
        <Route path="/Catalogue" element={<Catalogue />} />
        {user && <Route path="/" exact element={<Catalogue />} />}
        {user && <Route path="/login" exact element={<Catalogue />} />}
        {user && <Route path="/signup" exact element={<Catalogue />} />}
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);