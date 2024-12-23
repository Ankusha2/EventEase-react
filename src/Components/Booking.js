import React from "react";
import "./All.css";

export default function Booking() {
  return (
    <div>
      <div className="card mb-3" id="div22">
        <h2>Book Now</h2>
        <div className="row g-0" id="div33">
          <div className="col-md-4" id="div44">
            {" "}
          </div>
          <div className="card-body" id="div66">
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Event Name" required
              />
              <br />
              <input
                type="text"
                className="form-control"
                placeholder="Event Location" required
              />
              <br />
              <input
                type="date"
                className="form-control"
                placeholder="Event Start Date" required 
              />
              <br />
              <input
                type="date"
                className="form-control"
                placeholder="Event End Date" required
              />
              <br />
              <textarea
                rows="3"
                className="input-box"
                placeholder="Enter the Message"
              ></textarea>
              <br />
              <br />
              <button type="submit" className="btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
