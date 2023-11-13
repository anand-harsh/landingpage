import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";  
import logo from './logoo.jpg';  
import './Styles.css';
    
const Header = () => {
    const [auth, setAuth] = useAuth();
    const handleLogout = () => {
      setAuth({
        ...auth,
        user: null,
        token: "",
      });
      localStorage.removeItem("auth");
      toast.success("Logout Successfully");
    };  
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
                {!auth.user ? (
                <>
                    <li className="logsign">
                        <NavLink to="/Register" className="btn btn-outline-light">Register</NavLink>
                    </li>
                    <li className="logsign">
                        <NavLink to="/login" className="btn btn-outline-light mx-3">Login</NavLink>
                    </li>
                </>
                ) : (
                <>
                    <li className="logsign">
                        <NavLink onClick={handleLogout}to="/login" className="btn btn-outline-light"> Logout </NavLink>
                    </li>
                </>
                )};
            </nav> 
        </>
    );
} 
export default Header;