import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/shopping.jpg"
            alt="Card"
            height={500}
            style={{ objectFit: "cover", maxHeight: "500px" }}
          />
          <div className="card-img-overlay d-flex align-items-center" style={{ background: "rgba(0,0,0,0.4)" }}>
            <div className="container text-center">
              <h1 className="display-3 fw-bold text-uppercase mb-4">Summer Vibes Sale</h1>
              <h4 className="fw-light mb-3">🌞 Garmi ka time aa gaya hai – Stay Cool, Look Hot!</h4>
              <h5 className="mb-4">Get Flat 50% OFF on Summer Collection ☀️</h5>
              <p className="fs-5 d-none d-sm-block">
                T-shirts, Shorts, Sunglasses, and More! Grab the coolest styles of the season now.
              </p>
              <a href="/products" className="btn btn-danger btn-lg mt-3 px-4 py-2 fw-semibold shadow-sm rounded-pill">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
