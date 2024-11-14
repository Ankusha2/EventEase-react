import React from "react";
import "./All.css";
import About from "./About";
import Booking from "./Booking";
import Price from "./Price";
import Services from "./Services";
import Gallery from "./Gallery";
import Blog from "./Blog";
import Footer from "./Footer";
// import Contact from "./Contact";

export default function Home() {
  return (
    <div>
      <div className="home">
        <div className="content">
          <h5 className="text">WELCOME TO THE EVENT WORLD</h5>
          <h1 className="h1">
            <span className="changecontent"></span>
          </h1>
          <br />
          <a href="#" className="btn-book">
            Book Now
          </a>
        </div>
      </div>
      <About />
      <Services />
      <Blog />
      <Gallery />
      <Price />
      <Booking />
      {/* <Contact/> */}
      <Footer />
    </div>
  );
}
