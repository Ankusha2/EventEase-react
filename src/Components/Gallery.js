import React from 'react';
import './All.css';
export default function Gallery() {
  return (
    <div className='container'>
      <h2>Gallery</h2>
    <div id='gallery' className='row'>
      <div id='g1' className="col-12 col-md-6 col-lg-4"><img src={require("./../Images/7decor.png")} alt="no img" /></div>
      <div id='g1' className="col-12 col-md-6 col-lg-4"><img src={require("./../Images/slide11.jpg")} alt="no img" /></div>
      <div id='g1' className="col-12 col-md-6 col-lg-4"><img src={require("./../Images/im66.jpg")} alt="no img" /></div>
      <div id='g1' className="col-12 col-md-6 col-lg-4"><img src={require("./../Images/venue-3.jpg")} alt="no img" /></div>
      <div id='g1' className="col-12 col-md-6 col-lg-4"><img src={require("./../Images/im55.jpg")} alt="no img" /></div>
      <div id='g1' className="col-12 col-md-6 col-lg-4"><img src={require("./../Images/im33.jpg")} alt="no img" /></div>
    </div>
    </div>
  );
}

