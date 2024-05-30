import React from 'react';
import '../components/styles/Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <header className="header bg-light py-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <h1 className="logo">Collers</h1>
        <nav className="nav">
          <a className="nav-link" href="#products">Products</a>
          <a className="nav-link" href="#solutions">Solutions</a>
          <a className="nav-link" href="#pricing">Pricing</a>
          <a className="nav-link" href="#resources">Resources</a>
          <a className="nav-link" href="#login">Log In</a>
          <a className="btn btn-outline-primary" href="#signup">Sign up now</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
