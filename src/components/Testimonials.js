import React from 'react';
import '../components/styles/Testimonials.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from './images/collection1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faHeart, faLaptop, faMapMarkerAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import { faCompass } from '@fortawesome/free-regular-svg-icons';

function Testimonials() {
  return (
    <section className="testimonials py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Grow your collection</h2>
          <p>Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.</p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faCompass} className="me-2" />
                <span>Bibendum tellus</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faShieldAlt} className="me-2" />
                <span>Cras eget</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faHeart} className="me-2" />
                <span>Dolor pharetra</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faLaptop} className="me-2" />
                <span>Amet, fringilla</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="me-2" />
                <span>Amet nibh</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faSlidersH} className="me-2" />
                <span>Sed velit</span>
              </li>
            </ul>
          </div>
          <div className="col-md-8">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-4">
                <img src={image1} alt="Collection 1" className="img-fluid shadow-lg rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

