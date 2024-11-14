import React from "react";
import "./All.css";
export default function Price() {
  return (
    <div id="p1">
      <h1 id="a2">Pricing</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4" id="p2">
        <div className="col">
          <div className="card h-100 ">
            <div id="image-p1"></div>
            <div className="card-body">
              <h5 className="card-title">Destination Wedding</h5>
              <p className="card-text">
                Picture Yourselves in a warm, luxurious atmosphere with happy
                friends and family from travel time. <br />
              </p>
            </div>
            <div className="icons">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <br />
              Price: <strong>₹100000/-to ₹500000/-</strong>
              <br />
              <button type="submit" className="btn-price">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div id="image-p2"></div>
            <div className="card-body">
              <h5 className="card-title">Wedding</h5>
              <p className="card-text">
                Wedding is the most important time of the life for you, it
                brings a lot of responsibilites and strees as well. <br />
              </p>
            </div>
            <div className="icons">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star  checked"></i>
              <i className="fa-solid fa-star "></i>
              <br />
              Price: <strong>₹100000/-to ₹400000/-</strong><br/>
              <button type="submit" className="btn-price">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div id="image-p3"></div>
            <div className="card-body">
              <h5 className="card-title">Pre Wedding Rituals</h5>
              <p className="card-text">
                An indian wedding is a sweet conection of traditions values and
                rituals that are not just beautiful but memorable also. <br />
              </p>
            </div>
            <div className="icons">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i> <br />
              Price: <strong>₹50000/-to ₹100000/-</strong><br/>
              <button type="submit" className="btn-price">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4" id="p2">
        <div className="col">
          <div className="card h-100">
            <div id="image-p4"></div>
            <div className="card-body">
              <h5 className="card-title">Corporate party</h5>
              <p className="card-text">
                A corporate event is an event sponsored by a company and focus
                on either its employee or clients.It’s a celebration of what all
                of us have achieved together. <br />
              </p>
            </div>
            <div className="icons">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star "></i> <br />
              Price: <strong>₹70000/-to ₹150000/-</strong><br/>
              <button type="submit" className="btn-price">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div id="image-p5"></div>
            <div className="card-body">
              <h5 className="card-title">Seminar</h5>
              <p className="card-text">
                A Seminar is a form of academic instruction, either at an
                academic institution or offered by a professional organization.
                <br />
              </p>
            </div>
            <div className="icons">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i> <br />
              Price: <strong>₹9000/-to 15000/-</strong><br/>
              <button type="submit" className="btn-price">
                Book Now
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <div id="image-p6"></div>
            <div className="card-body">
              <h5 className="card-title">Birthday party</h5>
              <p className="card-text">
                A birthday party is a celebration held to mark the anniversary
                of a person's birth. It involves elements,depending on personal
                preferences. <br />
              </p>
            </div>
            <div className="icons">
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star checked"></i>
              <i className="fa-solid fa-star "></i> <br />
              Price: <strong>₹8000/-to ₹10000/-</strong><br/>
              <button type="submit" className="btn-price">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
