import logo from './logoo.jpg';
import './App.css';

function App() {
  return(
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
          <img src={logo} alt="React Image" width="80" height="60" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Products</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  More
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">About Us</a></li>
                  <li><a className="dropdown-item" href="/">Contact Us</a></li>
                  <li><a className="dropdown-item" href="/">Suggestion</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <div>
            <button type="button" className="btn btn-outline-info mx-3">Log In</button>
            <button type="button" className="btn btn-outline-info">Sign Up</button>
          </div>
        </div>
      </nav> 
    </>
  );
}

export default App;
