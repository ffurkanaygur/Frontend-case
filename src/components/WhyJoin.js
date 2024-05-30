import '../components/styles/WhyJoin.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import videoThumbnail from './images/video-thumbnail.jpg';

function WhyJoin() {
  return (
    <section className="why-join d-flex align-items-center">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h2>Why join us</h2>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                <span>Est et in pharetra magna adipiscing ornare aliquam.</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                <span>Tellus arcu sed consequat ac velit ut eu blandit.</span>
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                <span>Ullamcorper ornare in et egestas dolor orci.</span>
              </li>
            </ul>
            <button className="btn btn-outline-warning">Sign up now</button>
          </div>
          <div className="col-md-6 text-center">
            <div className="video-thumbnail position-relative">
              <img src={videoThumbnail} alt="Video Thumbnail" className="img-fluid shadow-lg rounded" />
              <div className="video-play-button position-absolute top-50 start-50 translate-middle">
                <FontAwesomeIcon icon="fa-solid fa-play" size="2x" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyJoin;


