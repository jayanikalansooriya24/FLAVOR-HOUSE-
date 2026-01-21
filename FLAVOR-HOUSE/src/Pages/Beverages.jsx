import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Appetizers.css';
import logo from "../assets/logo.png";

// Import all appetizer images
import caesarImg from "../assets/Caesar Salad.jpg";
import mozzarellaImg from "../assets/Mozzarella Sticks.jpg";
import wingsImg from "../assets/Buffalo wings.jpg";
import springRollsImg from "../assets/Spring Rolls.jpg";
import garlicBreadImg from "../assets/Garlic Bread.jpg";
import stuffedMushroomsImg from "../assets/Stuffed Mushrooms.jpg";

const Beverages = () => {
  const navigate = useNavigate();

  // Updated appetizers array with images
  const appetizers = [
    { id: 1, name: "Caesar Salad", price: "Rs 350.00", image: caesarImg, type: "Vegetarian" },
    { id: 2, name: "Mozzarella Sticks", price: "Rs 650.00", image: mozzarellaImg, type: "Vegetarian" },
    { id: 3, name: "Buffalo Wings", price: "Rs 800.00", image: wingsImg, type: "Vegetarian" },
    { id: 4, name: "Spring Rolls", price: "Rs 450.00", image: springRollsImg, type: "Vegetarian" },
    { id: 5, name: "Garlic Bread", price: "Rs 350.00", image: garlicBreadImg, type: "Vegetarian" },
    { id: 6, name: "Stuffed Mushrooms", price: "Rs 700.00", image: stuffedMushroomsImg, type: "Vegetarian" },
  ];

  return (
    <div className="appetizers-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img
            src={logo}
            alt="Flavor House"
            onClick={() => navigate('/home')}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div className="nav-links">
          <button className="nav-btn" onClick={() => navigate('/home')}>Home</button>
          <button className="nav-btn">AboutUs</button>
          <button className="nav-btn active">Menu</button>
          <button className="nav-btn">ContactUs</button>
        </div>
        <div className="nav-icons">
          <span className="icon">🛍️</span>
          <span className="icon">👤</span>
        </div>
      </nav>

      <div className="content-wrapper">
        <button className="back-link" onClick={() => navigate('/home')}>
          ← Back to All Menu
        </button>

        <header className="page-header">
          <h1>Beverages</h1>
          <div className="sort-dropdown">
            <button>Sort by : Popular <span>▼</span></button>
          </div>
        </header>

        {/* Filter Section */}
        <section className="filter-section">
          <div className="filter-group">
            <label>Price Range</label>
            <div className="price-slider-container">
              <input type="range" className="price-slider" />
              <div className="price-labels"><span>Rs 100</span><span>Rs 1000</span></div>
            </div>
          </div>

          <div className="filter-group">
            <label>Dietary Preferences</label>
            <div className="dietary-chips">
              <button className="chip">🌱 Vegan</button>
              <button className="chip active">🥗 Vegetarian</button>
              <button className="chip">🌾 Gluten Free</button>
              <button className="chip">🥛 Dairy Free</button>
              <button className="chip">🥑 Keto</button>
            </div>
          </div>
          <p className="item-count">Showing {appetizers.length} items</p>
        </section>

        {/* Products Grid */}
        <div className="product-grid">
          {appetizers.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-image">
                <img src={item.image} alt={item.name} className="food-img" />
              </div>
              <div className="product-info">
                <div className="info-top">
                  <h3>{item.name}</h3>
                  <span className="price">{item.price}</span>
                </div>
                <p className="description">
                  Delicious, freshly prepared {item.name}.
                </p>
                <div className="tag">🟢 {item.type}</div>
                <button className="add-to-cart">ADD TO CART</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="home-footer">
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
            <span>Facebook</span> <span>Insta</span> <span>TikTok</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Beverages;
