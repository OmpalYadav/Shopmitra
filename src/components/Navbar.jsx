import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top shadow-sm">
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand fw-bold fs-4 d-flex align-items-center" to="/">
          <img
            src="/assets/shopmitra-logo.png"
            alt="ShopMitra Logo"
            height="45"
            width="45"
            className="me-2 shadow-sm"
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <span className="text-primary">Shop</span>
          <span className="text-danger">Mitra</span>
        </NavLink>

        {/* Toggler button */}
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            {["Home", "Products", "About", "Contact"].map((item, index) => (
              <li className="nav-item px-3" key={index}>
                <NavLink
                  className="nav-link fs-5 fw-semibold text-uppercase position-relative nav-animated"
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Action buttons */}
          <div className="buttons text-center">
            <NavLink to="/login" className="btn btn-outline-dark m-2">
              <i className="fa fa-sign-in-alt me-1"></i> Login
            </NavLink>
            <NavLink to="/register" className="btn btn-outline-dark m-2">
              <i className="fa fa-user-plus me-1"></i> Register
            </NavLink>
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping me-1"></i> Cart ({state.length})
            </NavLink>
          </div>
        </div>
      </div>

      {/* Custom styles for nav animation */}
      <style>{`
        .nav-animated::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0%;
          height: 2px;
          background-color: #0d6efd;
          transition: width 0.3s ease-in-out;
        }

        .nav-animated:hover::after {
          width: 100%;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
