import React from "react";
import './All.css';

export default function Services() {
  return (
    <div className="container">
      <h2>Services</h2>
      <div id="services" className="row">
        <div id="g1" className="col-12 col-md-6 col-lg-4">
          {" "}
          <i className="fas fa-hotel fa-4x"></i>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
          <h1>Affordable Resorts</h1>
          <input type="button" value="Learn more" id="btn-ser" />
        </div>
        <div id="g1" className="col-12 col-md-6 col-lg-4">
          <i className="fas fa-star fa-4x"></i>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
          <h1>All Decoration Available</h1>
          <input type="button" value="Learn more" id="btn-ser" />
        </div>
        <div id="g1" className="col-12 col-md-6 col-lg-4">
          <i className="fas fa-utensils fa-4x"></i>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
          <h1>All Dishes Available</h1>
          <input type="button" value="Learn more" id="btn-ser" />
        </div>

        <div id="g1" className="col-12 col-md-6 col-lg-4">
          {" "}
          <i className="fas fa-automobile fa-4x"></i>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
          <h1>Royale Cars Services </h1>
          <input type="button" value="Learn more" id="btn-ser" />
        </div>
        <div id="g1" className="col-12 col-md-6 col-lg-4">
          {" "}
          <i className="fa fa-plane fa-4x"></i>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
          <h1>Aeroplane Services </h1>
          <input type="button" value="Learn more" id="btn-ser" />
        </div>
        <div id="g1" className="col-12 col-md-6 col-lg-4">
          {" "}
          <i className="fas fa-wine-glass fa-4x"></i>
          <p style={{ color: "white" }}>
            Lorem ipsum dolor sit amet consectetur{" "}
          </p>
          <h1>Food & Beverages </h1>
          <input type="button" value="Learn more" id="btn-ser" />
        </div>
      </div>
    </div>
  );
}
