import React from 'react';
import './All.css';

export default function Contact() {
  return (
    <div id='contact'>
          <form>
            <h2><center>Contact Us</center></h2> <br />
            <input type="text" className="form-control" placeholder="Enter the Name" required /><br/>
            <input type="text" className="form-control" placeholder="Enter the Email" required /><br/>
            <input type="text" className="form-control" placeholder="Enter the PhoneNo." required /><br/>
            <textarea rows="3"  className="input-box" placeholder="Enter the Message"></textarea><br/><br/>
            <button type="submit" className="btn">Submit</button>
           </form>
    </div>
    );
}
