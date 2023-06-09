import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div> <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">Magic Notes</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/About">About</Link>
          </li>
         
        </ul>
        <form className="d-flex" role="search">
        <Link className="btn btn-primary mx-1" to="/Signup"  role="button">Sign Up</Link>
        <Link className="btn btn-primary mx-1" to="/Login"  role="button">Login In</Link>
        </form>
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar