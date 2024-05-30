import React from 'react';
import '../components/styles/Banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import sneakerImage from './images/sneaker.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

function Banner() {
  return (
    <section className="banner container-fluid py-5 d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1>Collectible Sneakers</h1>
            <p>Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.</p>
            <div className="d-flex gap-3">
              <button className="btn btn-outline-primary">Sign up now</button>
              <button className="btn btn-link text-decoration-none d-flex align-items-center gap-2">
                <FontAwesomeIcon icon={faPlayCircle} />
                Watch Demo
              </button>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <div className="position-relative">
              <img src={sneakerImage} alt="Collectible Sneaker" className="img-fluid position-absolute top-50 start-50 translate-middle" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
