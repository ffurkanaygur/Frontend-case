import React from 'react';
import '../components/styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import appleImage from './images/appstore.png';
import androidImage from './images/playstore.png';

function Footer() {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>Product</h5>
            <ul className="list-unstyled">
              <li><a href="#pricing" className="text-white">Pricing</a></li>
              <li><a href="#overview" className="text-white">Overview</a></li>
              <li><a href="#browse" className="text-white">Browse</a></li>
              <li><a href="#accessibility" className="text-white">Accessibility</a></li>
              <li><a href="#five" className="text-white">Five</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Solutions</h5>
            <ul className="list-unstyled">
              <li><a href="#brainstorming" className="text-white">Brainstorming</a></li>
              <li><a href="#ideation" className="text-white">Ideation</a></li>
              <li><a href="#wireframing" className="text-white">Wireframing</a></li>
              <li><a href="#research" className="text-white">Research</a></li>
              <li><a href="#design" className="text-white">Design</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Support</h5>
            <ul className="list-unstyled">
              <li><a href="#contact" className="text-white">Contact Us</a></li>
              <li><a href="#developers" className="text-white">Developers</a></li>
              <li><a href="#documentation" className="text-white">Documentation</a></li>
              <li><a href="#integrations" className="text-white">Integrations</a></li>
              <li><a href="#reports" className="text-white">Reports</a></li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Get the App</h5>
            <a href="#appstore" className="d-block mb-2">
              <img src={appleImage} alt="App Store" className="img-fluid" />
            </a>
            <a href="#playstore" className="d-block mb-4">
              <img src={androidImage} alt="Google Play" className="img-fluid" />
            </a>
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://www.youtube.com" className="text-white mx-2">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="https://www.facebook.com" className="text-white mx-2">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.twitter.com" className="text-white mx-2">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.instagram.com" className="text-white mx-2">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.linkedin.com" className="text-white mx-2">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mt-3">
          <small>&copy; 2023 Collers. All rights reserved.</small>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <a href="#terms" className="text-white mx-2">Terms</a>
          <a href="#privacy" className="text-white mx-2">Privacy</a>
          <a href="#contact" className="text-white mx-2">Contact</a>
          <a href="#en" className="text-white mx-2">EN</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


