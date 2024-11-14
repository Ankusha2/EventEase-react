import React from "react";
import "./All.css";

export default function Blog() {
  return (
    <div id="blog">
      <h2>Blog</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div class="card h-100" id="b1">
            <div id="im1"></div>
            <div className="card-body">
              <h4 className="card-title">
                Important things to keep in mind before booking Mehandi Artist
              </h4>
              <p className="card-text">
                Before booking mehendi artist- Confirm they use high-quality
                mehndi to avoid skin irritation and inquire about their
                experience for a smoother, faster application. Clarify pricing
                details and the availability on the required date.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <input type="button" value="Learn more" id="btn-ser" />
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card h-100" id="b1">
            <div id="im2"></div><div className="card-body">
              <h4 className="card-title">
                Mistakes to Avoid When Planning an Event
              </h4>
              <p className="card-text">
                When planning an event, avoid these common mistakes: failing to
                set a clear budget, overlooking backup plans for weather or
                technical issues. Poor communication with team members or
                vendors can lead to misunderstandings
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <input type="button" value="Learn more" id="btn-ser" />
              </small>
            </div>
          </div>
        </div>
        <div className="col">
          <div class="card h-100" id="b1">
            <div id="im3"></div> <div className="card-body">
              <h4 className="card-title">
                How to Choose the Perfect Venue for Your Event?
              </h4>
              <p className="card-text">
                To choose the perfect venue for your event, first define your
                budget and capacity requirements. Consider the location for
                accessibility and convenience. Check the available amenities,
                such as seating arrangements, and catering options.
              </p>
            </div>
            <div className="card-footer">
              <small className="text-body-secondary">
                <input type="button" value="Learn more" id="btn-ser" />
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
