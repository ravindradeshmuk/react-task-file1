
import React from 'react';

import "./App.css";
import Home from './Pages/Home';
import About from './Pages/About';
import Privacy from './Pages/Privacy';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Componants/Navbar';
import "./App.css"

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login/>} />


      </Routes>
    </BrowserRouter>
    
  );
};

export default App; 