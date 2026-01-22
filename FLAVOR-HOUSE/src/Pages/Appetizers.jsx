import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Appetizers.css';
import logo from "../assets/logo.png";

// Images
import caesarImg from "../assets/Caesar Salad.jpg";
import mozzarellaImg from "../assets/Mozzarella Sticks.jpg";
import wingsImg from "../assets/Buffalo wings.jpg";
import springRollsImg from "../assets/Spring Rolls.jpg";
import garlicBreadImg from "../assets/Garlic Bread.jpg";
import stuffedMushroomsImg from "../assets/Stuffed Mushrooms.jpg";

const Appetizers = () => {
  const navigate = useNavigate();

  const appetizers = [
    {
      id: 1,
      name: "Caesar Salad",
      price: "Rs 350.00",
      image: caesarImg,
      type: "Vegetarian",
      route: "/twofood",
    },
    {
      id: 2,
      name: "Mozzarella Sticks",
      price: "Rs 650.00",
      image: mozzarellaImg,
      type: "Vegetarian",
      route: "/threefood",
    },
    {
      id: 3,
      name: "Buffalo Wings",
      price: "Rs 800.00",
      image: wingsImg,
      type: "Non-Veg",
      route: "/onefood",
    },
    {
      id: 4,
      name: "Spring Rolls",
      price: "Rs 450.00",
      image: springRollsImg,
      type: "Vegetarian",
      route: "/fourfood",
    },
    {
      id: 5,
      name: "Garlic Bread",
      price: "Rs 350.00",
      image: garlicBreadImg,
      type: "Vegetarian",
      route: "/fivefood",
    },
    {
      id: 6,
      name: "Stuffed Mushrooms",
      price: "Rs 700.00",
      image: stuffedMushroomsImg,
      type: "Vegetarian",
      route: "/sixfood",
    },
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
          <button className="nav-btn" onClick={() => navigate('/AboutUs')}>About Us</button>
          <button className="nav-btn active" onClick={() => navigate('/home')}>Menu</button>
          <button className="nav-btn" onClick={() => navigate('/ContactUs')}>Contact Us</button>
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
          <h1>Appetizers</h1>
          <div className="sort-dropdown">
            <button>Sort by : Popular <span>▼</span></button>
          </div>
        </header>

        

        {/* Filters (UI only) */}
        <section className="filter-section">
          <p className="item-count">Showing {appetizers.length} items</p>
        </section>

        {/* Product Grid */}
        <div className="product-grid">
          {appetizers.map((item) => (
            <div
              key={item.id}
              className="product-card"
              onClick={() => navigate(item.route)}
              style={{ cursor: 'pointer' }}
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

                <div className="tag">
                  {item.type === "Vegetarian" ? "🟢" : "🔴"} {item.type}
                </div>

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
    </div>
  );
};

export default Appetizers;
