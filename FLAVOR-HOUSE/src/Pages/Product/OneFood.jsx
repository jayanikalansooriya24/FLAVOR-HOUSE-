import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OneFood.css';
import logo from "../../assets/logo.png";
// import foodImage from "../assets/buffalo-wings.jpg"; // Add your food image

const OneFood = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('regular');
  const [addOns, setAddOns] = useState({
    extraCheese: false,
    extraDressing: false
  });

  const basePrice = 800.00;
  const sizePrice = selectedSize === 'large' ? 5.00 : 0;
  const addOnsPrice = (addOns.extraCheese ? 2.00 : 0) + (addOns.extraDressing ? 1.50 : 0);
  const totalPrice = (basePrice + sizePrice + addOnsPrice) * quantity;

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleAddOnToggle = (addOn) => {
    setAddOns(prev => ({
      ...prev,
      [addOn]: !prev[addOn]
    }));
  };

  const handleAddToCart = () => {
    // Add to cart logic here
    console.log('Added to cart:', {
      size: selectedSize,
      quantity,
      addOns,
      totalPrice
    });
    alert('Added to cart successfully!');
  };

  return (
    <div className="onefood-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Flavor House" onClick={() => navigate('/home')} />
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

      {/* Modal Overlay */}
      <div className="modal-overlay">
        <div className="food-modal">
          {/* Close Button */}
          <button className="close-btn" onClick={() => navigate(-1)}>✕</button>

          <div className="modal-content">
            {/* Left Side - Image */}
            <div className="food-image-section">
              <div className="food-image">
                {/* Replace with actual image */}
                <div className="img-placeholder">
                  <span className="food-emoji">🍗</span>
                </div>
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="food-details-section">
              <div className="food-header">
                <h1>Buffalo Wings</h1>
                <span className="food-price">Rs{basePrice.toFixed(2)}</span>
              </div>

              <p className="food-description">
                Fresh mixed greens with perfectly grilled chicken breast, cherry tomatoes, 
                cucumber, red onion, and house-made vinaigrette. Topped with shaved parmesan 
                cheese and crispy croutons. A healthy and delicious option packed with protein 
                and essential nutrients.
              </p>

              {/* Size Selection */}
              <div className="option-group">
                <label className="option-label">Size</label>
                <div className="size-options">
                  <button 
                    className={`size-btn ${selectedSize === 'regular' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('regular')}
                  >
                    <span className="size-name">Regular</span>
                    <span className="size-desc">Standard portion</span>
                  </button>
                  <button 
                    className={`size-btn ${selectedSize === 'large' ? 'active' : ''}`}
                    onClick={() => setSelectedSize('large')}
                  >
                    <span className="size-name">Large</span>
                    <span className="size-desc">+ $5.00</span>
                  </button>
                </div>
              </div>

              {/* Add-ons */}
              <div className="option-group">
                <label className="option-label">Add-ons (Optional)</label>
                <div className="addons-options">
                  <button 
                    className={`addon-btn ${addOns.extraCheese ? 'active' : ''}`}
                    onClick={() => handleAddOnToggle('extraCheese')}
                  >
                    <span className="addon-name">Extra Cheese</span>
                    <span className="addon-price">+$2.00</span>
                  </button>
                  <button 
                    className={`addon-btn ${addOns.extraDressing ? 'active' : ''}`}
                    onClick={() => handleAddOnToggle('extraDressing')}
                  >
                    <span className="addon-name">Extra Dressing</span>
                    <span className="addon-price">+$1.50</span>
                  </button>
                </div>
              </div>

              {/* Quantity */}
              <div className="quantity-section">
                <label className="option-label">Quantity</label>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange('decrement')}
                    disabled={quantity === 1}
                  >
                    −
                  </button>
                  <input 
                    type="text" 
                    className="quantity-input" 
                    value={quantity} 
                    readOnly 
                  />
                  <button 
                    className="quantity-btn"
                    onClick={() => handleQuantityChange('increment')}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="food-footer">
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
            <span className="social-icon">f</span>
            <span className="social-icon">📷</span>
            <span className="social-icon">♪</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OneFood;