import React from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Booking from "./Components/Booking";
import Price from "./Components/Price";
import Services from "./Components/Services";
import Gallery from './Components/Gallery';
import Blog from "./Components/Blog";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

export default function App() {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/booking" element={<Booking />}></Route>
        <Route path="/price" element={<Price />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/gallery" element={<Gallery/>}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
     </div>
  );
}
