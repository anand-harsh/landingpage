import React from 'react';
import {Router, Route, Routes, Link, ReactDom } from 'react-router-dom';
import './App.css';
import Suggestions from './pages/Suggestions';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Home from './pages/Home';
import Dashboard from './pages/user/Dashboard';

function App() {
  return(
      <>
        <Routes>
          <Route path="/Suggestions" element={<Suggestions />} />
          <Route path="/ContactUs" element={<Contact />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </>
  );
}
export default App;