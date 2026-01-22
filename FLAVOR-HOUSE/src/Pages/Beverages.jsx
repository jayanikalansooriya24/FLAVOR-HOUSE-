import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Appetizers.css';
import logo from "../assets/logo.png";

// Drink images
import caesarImg from "../assets/Fresh Lime Juice.jpg";
import mozzarellaImg from "../assets/Milk Tea.jpg";
import wingsImg from "../assets/Iced Coffee.jpg";
import springRollsImg from "../assets/Fresh Orange Juice.jpg";
import garlicBreadImg from "../assets/Chocolate Milkshake.jpg";
import stuffedMushroomsImg from "../assets/Herbal Tea.jpg";

const Beverages = () => {
  const navigate = useNavigate();

  const appetizers = [
    { id: 1, name: "Fresh Lime Juice", price: "Rs 350.00", image: caesarImg, type: "Vegetarian" },
    { id: 2, name: "Milk Tea", price: "Rs 650.00", image: mozzarellaImg, type: "Vegetarian" },
    { id: 3, name: "Iced Coffee", price: "Rs 800.00", image: wingsImg, type: "Vegetarian" },
    { id: 4, name: "Fresh Orange Juice", price: "Rs 450.00", image: springRollsImg, type: "Vegetarian" },
    { id: 5, name: "Chocolate Milkshake", price: "Rs 350.00", image: garlicBreadImg, type: "Vegetarian" },
    { id: 6, name: "Herbal Tea", price: "Rs 700.00", image: stuffedMushroomsImg, type: "Vegetarian" },
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
          <button className="nav-btn active" onClick={() => navigate('/home')}>Home</button>
          <button className="nav-btn active" onClick={() => navigate('/AboutUs')}>About Us</button>
          <button className="nav-btn active" onClick={() => navigate('/home')}>Menu</button>
          <button className="nav-btn active" onClick={() => navigate('/ContactUs')}>Contact Us</button>
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
            <div
              key={item.id}
              className="product-card"
              onClick={() => {
                if (item.name === "Fresh Lime Juice") navigate("/onefood");
                else if (item.name === "Milk Tea") navigate("/Milktea");
                else if (item.name === "Iced Coffee") navigate("/threefood");
                else if (item.name === "Fresh Orange Juice") navigate("/fourfood");
                else if (item.name === "Chocolate Milkshake") navigate("/ChocolateMilkshake");
                else if (item.name === "Herbal Tea") navigate("/HerbalTea");
              }}
              style={{ cursor: "pointer" }}
            >
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

                <button
                  className="add-to-cart"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert(`${item.name} added to cart!`);
                  }}
                >
                  ADD TO CART
                </button>
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
            <span>Facebook</span>
            <span>Insta</span>
            <span>TikTok</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Beverages;
