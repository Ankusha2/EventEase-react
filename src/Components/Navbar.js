import React from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar bg-dark navbar-expand-lg " data-bs-theme="dark">
    <div className="container-fluid">
    <h1 id="one">EventEase</h1>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav  mb-2 mb-lg-0 ml-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link active "><i className="fa-solid fa-house-user"></i> Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link active" ><i className="fa-solid fa-circle-user"></i> AboutUs</Link>
          </li>
          <li className="nav-item">
            <Link to="/booking" className="nav-link active" ><i className="fa-solid fa-address-book"></i> Booking</Link>
          </li>
          <li className="nav-item">
            <Link to="/price" className="nav-link active"><i className="fa-solid fa-money-bill-wave"></i> Price</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link active" ><i className="fa-solid fa-briefcase"></i> Services</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link active" ><i className="fa-solid fa-blogger-b"></i> Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/gallery" className="nav-link active" ><i className="fa-solid fa-image"></i> Gallery</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link active" ><i className="fa-solid fa-user"></i> Contact Us</Link>
          </li>
          </ul>
          <ul className="navbar-nav ml-auto">{/* <!-- Right aligned items --> */}
          <li className="nav-item">
            <Link to="/login" className="nav-link active" >Login</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="nav-link active" >SignUp</Link>
          </li>
         </ul>
      </div>
    </div>
  </nav>
  );
}
