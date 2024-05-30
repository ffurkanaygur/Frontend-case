import React from 'react';
import '../components/styles/Features.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faLeaf, faTv } from '@fortawesome/free-solid-svg-icons';

function Features() {
  return (
    <section className="features container-fluid py-5">
      <div className="row text-center">
        <div className="col-md-4 mb-4">
          <div className="feature-icon mb-3">
            <FontAwesomeIcon icon={faTrophy} size="3x" />
          </div>
          <h2 className="h5">Nibh viverra</h2>
          <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-icon mb-3">
            <FontAwesomeIcon icon={faLeaf} size="3x" />
          </div>
          <h2 className="h5">Cursus amet</h2>
          <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
        </div>
        <div className="col-md-4 mb-4">
          <div className="feature-icon mb-3">
            <FontAwesomeIcon icon={faTv} size="3x" />
          </div>
          <h2 className="h5">Ipsum fermentum</h2>
          <p>Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.</p>
        </div>
      </div>
    </section>
  );
}

export default Features;
