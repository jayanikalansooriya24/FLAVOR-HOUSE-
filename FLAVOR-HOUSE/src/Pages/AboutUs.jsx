import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import logo from "../assets/logo.png";
// import restaurantImage from "../assets/restaurant.jpg"; // Add your restaurant image

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutus-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Flavor House" onClick={() => navigate('/home')} />
        </div>
        <div className="nav-links">
          <button className="nav-btn" onClick={() => navigate('/home')}>Home</button>
          <button className="nav-btn active">AboutUs</button>
          <button className="nav-btn" onClick={() => navigate('/menu')}>Menu</button>
          <button className="nav-btn" onClick={() => navigate('/contact')}>ContactUs</button>
        </div>
        <div className="nav-icons">
          <span className="icon">🛍️</span>
          <span className="icon">👤</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="about-content">
        <h1 className="page-title">About FLAVOR HOUSE</h1>

        {/* Our Story Section */}
        <section className="story-section">
          <h2 className="section-title">Our Story</h2>
          <div className="story-card">
            <p className="story-text">
              Founded in the heart of Negombo, <strong>FLAVOR HOUSE</strong> began as a 
              small passion project — a place where family recipes, local produce, 
              and a love for honest food come together. Today, we serve crisp salads, 
              hearty mains, and comforting desserts that celebrate the best of Sri 
              Lankan and international flavors. Every dish is prepared with care, 
              using the freshest ingredients sourced from nearby farms and fishermen. 
              We believe food should bring people closer — whether it's a quick lunch 
              with friends, a family dinner, or a cozy date night.
            </p>
          </div>
        </section>

        {/* What We Stand For Section */}
        <section className="values-section">
          <h2 className="section-title">What We Stand For</h2>
          <div className="values-card">
            <div className="value-item">
              <h3 className="value-title">Fresh & Local</h3>
              <p className="value-description">
                Ingredients from Negombo's markets and nearby farms whenever possible.
              </p>
            </div>

            <div className="value-item">
              <h3 className="value-title">Vegetarian Friendly</h3>
              <p className="value-description">
                Over 70% of our menu is vegetarian — because great flavor doesn't need meat.
              </p>
            </div>

            <div className="value-item">
              <h3 className="value-title">Warm Hospitality</h3>
              <p className="value-description">
                With a smile — you're not just a customer, you're our guest.
              </p>
            </div>
          </div>
        </section>

        {/* Restaurant Image */}
        <section className="image-section">
          <div className="restaurant-image">
            {/* Replace with actual image */}
            <div className="img-placeholder">Restaurant Ambiance</div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="about-footer">
        <div className="footer-left">
          <p>📍 Negombo, Western Province, Sri Lanka</p>
          <p>📞 +94 77 123 4567</p>
          <p>✉️ hello@flavorhouse.lk</p>
          <p>🕒 Open Daily: 10:00 AM – 11:00 PM</p>
        </div>
        <div className="footer-center">
          <h2>FLAVOR HOUSE</h2>
          <p>Crisp, fresh & full of flavor</p>
          <small>© 2026 FLAVOR HOUSE</small>
        </div>
        <div className="footer-right">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <span className="social-icon facebook">f</span>
            <span className="social-icon instagram">📷</span>
            <span className="social-icon tiktok">♪</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutUs;