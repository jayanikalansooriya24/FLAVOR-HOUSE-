import React from 'react';
import './Home.css';
import logo from "../assets/logo.png"; // Ensure this path is correct

const Home = () => {
  const foodItems = [
    { id: 1, name: "Buffalo Wings", price: "Rs 800.00", image: "wings.jpg", type: "Vegetarian" },
    { id: 2, name: "Chicken Biriyani", price: "Rs 1000.00", image: "biriyani.jpg", type: "Vegetarian" },
    { id: 3, name: "Vegetable Kottu", price: "Rs 650.00", image: "kottu.jpg", type: "Vegetarian" },
    { id: 4, name: "Chocolate Brownie", price: "Rs 550.00", image: "brownie.jpg", type: "Vegetarian" },
    { id: 5, name: "Custard Pudding", price: "Rs 350.00", image: "pudding.jpg", type: "Vegetarian" },
    { id: 6, name: "Iced Coffee", price: "Rs 250.00", image: "coffee.jpg", type: "Vegetarian" },
  ];

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Flavor House" />
        </div>
        <div className="nav-links">
          <button className="nav-btn active">Home</button>
          <button className="nav-btn">AboutUs</button>
          <button className="nav-btn">Menu</button>
          <button className="nav-btn">ContactUs</button>
        </div>
        <div className="nav-icons">
          <span className="icon">🛍️</span>
          <span className="icon">👤</span>
        </div>
      </nav>

      {/* Search Bar */}
      <div className="search-section">
        <div className="search-bar">
          <input type="text" placeholder="Search for dishes" />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      {/* Categories */}
      <div className="categories">
        <button className="cat-btn active">All Items</button>
        <button className="cat-btn">Appetizers</button>
        <button className="cat-btn">Main Course</button>
        <button className="cat-btn">Desserts</button>
        <button className="cat-btn">Beverages</button>
      </div>

      {/* Product Grid */}
      <div className="product-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="product-card">
            <div className="product-image">
              {/* Replace with actual <img> tags when images are ready */}
              <div className="img-placeholder">Image</div>
            </div>
            <div className="product-info">
              <div className="info-top">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p className="description">Crisp romaine lettuce with Parmesan cheese, croutons, and classic Caesar...</p>
              <div className="tag">🟢 {item.type}</div>
              <button className="add-to-cart">ADD TO CART</button>
            </div>
          </div>
        ))}
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

export default Home;