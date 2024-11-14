import React from 'react';
import './All.css';

export default function Footer() {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>EventEase</h1>
          <p>Choose you favourite event.</p>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">Github</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Status</a>
          <a href="/">Contact us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of conditions</a>
          <a href="/">Privacy pilicy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
}
