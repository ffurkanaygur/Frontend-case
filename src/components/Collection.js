import React from 'react';
import '../components/styles/Collection.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import shoeImage from './images/shoe.png';

function Collection() {
  return (
    <section className="collection container-fluid py-5">
      <div className="text-center text-white">
        <h1>11,658,467</h1>
        <h2>Shoes Collected</h2>
      </div>
      <div className="world-map position-relative">
        <div className="info-box position-absolute">
          <img src={shoeImage} alt="Shoes" className="img-fluid" />
          <div className="info-text">
            Emma Simpson collected one pair of Cool Shoes.
          </div>
        </div>
        <div className="dot" style={{ top: '30%', left: '45%' }}></div>
        <div className="dot" style={{ top: '50%', left: '70%' }}></div>
        <div className="dot" style={{ top: '70%', left: '30%' }}></div>
      </div>
    </section>
  );
}

export default Collection;

