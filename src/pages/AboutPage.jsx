import React from 'react';
import { Footer, Navbar } from "../components";

const AboutPage = () => {
  return (
    <>
      <Navbar />

      {/* Hero Banner */}
      <div
        className="text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          color: "black",
          textShadow: "1px 1px 2px white"
        }}
      >
        <div>
          <h1 className="display-4 fw-bold">Who We Are</h1>
          <p className="lead">Discover fashion, elegance, and tech all in one place</p>
        </div>
      </div>

      <div className="container my-3 py-3">
        <h1 className="text-center">About Us</h1>
        <hr />
        <p className="lead text-center">
          Welcome to our store! We are passionate about delivering high-quality products that add value to your lifestyle. 
          Whether you're looking for the latest trends in fashion, elegant jewelry, or cutting-edge electronics, 
          we are here to help you find exactly what you need. 
          <br /><br />
          Our journey started with a simple goal — to bring convenience, style, and trust to online shopping. 
          Every product in our collection is carefully curated with customer satisfaction in mind. 
          We believe shopping should be more than just a transaction; it should be an experience.
        </p>

        <h2 className="text-center py-4">Our Products</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Mens's Clothing" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Men's Clothing</h5>
                <p className="text-center small">Trendy, comfortable, and affordable outfits designed to match your vibe.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Women's Clothing" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Women's Clothing</h5>
                <p className="text-center small">From casual to chic — explore styles that empower and inspire.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Jewelery" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Jewelry</h5>
                <p className="text-center small">Shine bright with our elegant and timeless jewelry collections.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Electronics" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Electronics</h5>
                <p className="text-center small">Stay ahead of the curve with our smart, innovative tech gadgets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
