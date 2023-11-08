import React, { Components } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import logo from './logoo.jpg';
import './App.css';
import Suggestions from './Components/Suggestions';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return(
      <>
        <Router>
          <nav className="navbar navbar-expand-lg bg-body-tertiary flex justify-content-between ">
          <div className="navbar navbar-light bg-light" id="navbarNavDropdown">
                <a className="navbar-brand" href="/">
                <img src={logo} alt="React" width="80" height="60"  />
                </a>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Products</a>
                    </li>
                  </ul>
                </div>
                <div className='search-input'>
                <form className="d-flex" role="search">
                  <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Enter</button>
                </form>
                </div>
                <div className="logsign">
                  <button type="button" class="btn btn-outline-light mx-2">Login</button>
                  <button type="button" class="btn btn-outline-light">Sign Up</button>
                </div> 
            </nav> 
            <Routes>
              <Route path="/Suggestions" element={<SuggestionsPage />} />
              <Route path="/ContactUs" element={<ContactPage />} />
              <Route path="/AboutUs" element={<AboutPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
            <footer className="bg-tertiary">
              <div className="container p-4">
                <div className="col">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="text">Home</Link>
                    </li>
                    <li>
                      <Link to="/AboutUs" className="text">About Us</Link>
                    </li>
                    <li>
                      <Link to="/ContactUs" className="text">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/Suggestions" className="text">Suggestions</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
        </Router>
        <Login/>
        <Signup/>
      </>
    
  );
}
function HomePage() {
  return <h1>Home page</h1>;
}
function SuggestionsPage() {
  return <Suggestions />;
}
function AboutPage() {
  return <About />;
}
function ContactPage() {
  return <Contact />;
}

export default App;