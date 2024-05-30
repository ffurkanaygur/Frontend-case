import '../components/styles/Products.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import product1 from './images/product1.jpg';
import product2 from './images/product2.jpg';
import product3 from './images/product3.jpg';

function Products() {
  return (
    <section className="products container-fluid py-5">
      <div className="text-center mb-5">
        <h2>The best of the best</h2>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="card product-card mb-4 shadow-lg">
            <img src={product1} className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              <a href="#" className="btn btn-outline-light d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card product-card mb-4 shadow-lg">
            <img src={product2} className="card-img-top" alt="Product 2" />
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              <a href="#" className="btn btn-outline-light d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                Buy Now
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card product-card mb-4 shadow-lg">
            <img src={product3} className="card-img-top" alt="Product 3" />
            <div className="card-body">
              <h5 className="card-title">Title</h5>
              <p className="card-text">Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.</p>
              <a href="#" className="btn btn-outline-light d-flex align-items-center justify-content-center">
                <FontAwesomeIcon icon={faShoppingCart} className="me-2" />
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button className="btn btn-outline-light">Sign up now</button>
      </div>
    </section>
  );
}

export default Products;
