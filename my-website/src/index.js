import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import "./index.css";
import Catalogue from "./catalogue";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// ReactDOM.render(<Catalogue />, document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<App />} />
        <Route path="/Catalogue" element={<Catalogue />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);