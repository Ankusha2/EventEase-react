import React from 'react';
import "./All.css";

export default function Signup() {
  return (
    <div id='contact'>
        <form>
      <h2>SignUp</h2> <br />
      <input type="text" className="form-control" placeholder="Enter the Name"/><br/>
    <input type="text" className="form-control" placeholder="Enter the Email"/><br/>
    <input type="password" className="form-control" placeholder="Enter the Password"/><br/>
  <br/>
  <button type="submit" className="btn">Submit</button>
</form>
    </div>
  );
}
