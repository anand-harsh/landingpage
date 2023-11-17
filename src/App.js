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
import ForgotPasssword from './pages/Auth/ForgotPassword';
import PrivateRoute from './Components/Routes/Private';
import AdminRoute from './Components/Routes/AdminRoute';
import AdminDashboard from './pages/Admin/AdminDashboard';

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
          <Route path="/dashboard" element={<PrivateRoute />} />
            <Route path="user" element={<Dashboard />} />
          <Route path="forgot-password" element={<ForgotPasssword />} />
          <Route path="/dashboard" element={<AdminRoute />} />
            <Route path="admin" element={<AdminDashboard />} />
        </Routes> 
      </>
  );
}
export default App;