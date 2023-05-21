import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Catalogue from "./catalogue";

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
    <Catalogue />
  </React.StrictMode>,
  document.getElementById('root')
);