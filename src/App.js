import React, { Components } from 'react';
import {Router, Route, Routes, Link, ReactDom } from 'react-router-dom';
import logo from './logoo.jpg';
import './App.css';
import Suggestions from './Components/Suggestions';
import Contact from './Components/Contact';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import { Helmet } from "react-helmet";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return(
      <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary flex justify-content-between navbar-shadow">
          <div className="navbar navbar-light bg-light" id="navbarNavDropdown">
                <a className="navbar-brand mx-2" href="/">
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
                  <input className="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
                  <button className="btn btn-outline-success" type="submit">Enter</button>
                </form>
                </div>
                <div className="logsign">
                  <button type="button" className="btn btn-outline-light mx-2">Login</button>
                  <button type="button" className="btn btn-outline-light">Sign Up</button>
                </div> 
            </nav> 
            <Routes>
              <Route path="/Suggestions" element={<SuggestionsPage />} />
              <Route path="/ContactUs" element={<ContactPage />} />
              <Route path="/AboutUs" element={<AboutPage />} />
              <Route path="/" element={<HomePage />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
            <footer className="bg-tertiary">
              <div className="container p-4">
                <div className="col">
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/" className="text">Home</Link>
                    </li>
                    <p id="sline">|</p>
                    <li>
                      <Link to="/AboutUs" className="text">About Us</Link>
                    </li>
                    <p id="sline">|</p>
                    <li>
                      <Link to="/ContactUs" className="text">Contact Us</Link>
                    </li>
                    <p id="sline">|</p>
                    <li>
                      <Link to="/Suggestions" className="text">Suggestions</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="rights my-9">
                  <p>© 2023 BidHUB. All Rights Reserved</p>
                </div>
            </footer>
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


export const Layout=({children, title,description,keywords,author})=>{
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="author" content={author}/>
        <title>{title}</title>
      </Helmet>
      <ToastContainer />
    </>
  );
}

Layout.defaultProps={
  title:"BidHUB - Bid now!",
  description: "mern stack project",
  keywords: "bid,auction,bidding",
  author:"Vishal",
};

export default App;