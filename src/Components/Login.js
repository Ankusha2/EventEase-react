import React from 'react';
import './All.css';

export default function Login() {
  return (
    <div id='contact'>
        <form>
      <h2>Login</h2> <br />
    <input type="text" className="form-control" placeholder="Enter the Email" required /><br/>
    <input type="password" className="form-control" placeholder="Enter the Password" required /><br/>
  <br/>
  <button type="submit" className="btn">Submit</button>
</form>
    </div>
  );
}
