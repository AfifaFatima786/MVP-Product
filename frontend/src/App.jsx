import React from "react";

import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hr from "../pages/Hr"
import User from "../pages/User"



function App() {
  

  

  return (
    
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/provider" element={<Hr />} />
        <Route path="/seeker" element={<User />} />
      </Routes>
      
      
      
    
  );
}

export default App;
