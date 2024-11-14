import React from 'react';
import './All.css';

export default function Contact() {
  return (
    <div id='contact'>
        <form>
      <h2>Contact Us</h2> <br />
    <input type="text" className="form-control" placeholder="Enter the Name"/><br/>
     <input type="text" className="form-control" placeholder="Enter the Email"/><br/>
    <input type="text" className="form-control" placeholder="Enter the PhoneNo."/><br/>
    <textarea rows="3"  className="input-box" placeholder="Enter the Message"></textarea><br/><br/>
  <button type="submit" className="btn">Submit</button>
</form>
    </div>
  );
}
