import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OneFood.css';
import logo from "../../assets/logo.png";
import wingsImg from "../../assets/Ice Cream.jpg"; 

const IceCream = () => {
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState('regular');
    const [addOns, setAddOns] = useState({
        extraCheese: false,
        extraDressing: false
    });

    // Prices in Rs
    const basePrice = 800.00;
    const sizePrice = selectedSize === 'large' ? 200.00 : 0; 
    const addOnsPrice = (addOns.extraCheese ? 150.00 : 0) + (addOns.extraDressing ? 100.00 : 0);
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
        alert('Added to cart successfully!');
    };

    return (
        <div className="onefood-container">
            <nav className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="Flavor House" onClick={() => navigate('/home')} style={{ cursor: 'pointer' }} />
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

            <div className="modal-overlay">
                <div className="food-modal">
                    <button className="close-btn" onClick={() => navigate(-1)}>✕</button>

                    <div className="modal-content">
                        <div className="food-image-section">
                            <div className="food-image">
                                <img
                                    src={wingsImg}
                                    alt="Ice Cream"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '12px' }}
                                />
                            </div>
                        </div>

                        <div className="food-details-section">
                            <div className="food-header">
                                <h1>Ice Cream</h1>
                                <span className="food-price">Rs {(basePrice + sizePrice + addOnsPrice).toFixed(2)}</span>
                            </div>

                            <p className="food-description">
                                Crispy, juicy chicken wings tossed in our signature spicy buffalo sauce. 
                                Served with fresh celery sticks and creamy dressing.
                            </p>

                            <div className="option-group">
                                <label className="option-label">Size</label>
                                <div className="size-options">
                                    <button
                                        className={`size-btn ${selectedSize === 'regular' ? 'active' : ''}`}
                                        onClick={() => setSelectedSize('regular')}
                                    >
                                        <span className="size-name">Regular</span>
                                        <span className="size-desc">Standard</span>
                                    </button>
                                    <button
                                        className={`size-btn ${selectedSize === 'large' ? 'active' : ''}`}
                                        onClick={() => setSelectedSize('large')}
                                    >
                                        <span className="size-name">Large</span>
                                        <span className="size-desc">+ Rs 200.00</span>
                                    </button>
                                </div>
                            </div>

                            <div className="option-group">
                                <label className="option-label">Add-ons (Optional)</label>
                                <div className="addons-options">
                                    <button
                                        className={`addon-btn ${addOns.extraCheese ? 'active' : ''}`}
                                        onClick={() => handleAddOnToggle('extraCheese')}
                                    >
                                        <span className="addon-name">Extra Cheese</span>
                                        <span className="addon-price">+Rs 150</span>
                                    </button>
                                    <button
                                        className={`addon-btn ${addOns.extraDressing ? 'active' : ''}`}
                                        onClick={() => handleAddOnToggle('extraDressing')}
                                    >
                                        <span className="addon-name">Extra Dressing</span>
                                        <span className="addon-price">+Rs 100</span>
                                    </button>
                                </div>
                            </div>

                            <div className="quantity-section">
                                <label className="option-label">Quantity</label>
                                <div className="quantity-controls">
                                    <button className="quantity-btn" onClick={() => handleQuantityChange('decrement')} disabled={quantity === 1}>−</button>
                                    <input type="text" className="quantity-input" value={quantity} readOnly />
                                    <button className="quantity-btn" onClick={() => handleQuantityChange('increment')}>+</button>
                                </div>
                            </div>

                            <button className="add-to-cart-btn" onClick={handleAddToCart}>
                                ADD TO CART - Rs {totalPrice.toFixed(2)}
                            </button>
                        </div> 
                    </div> 
                </div> 
            </div>
            
            {/* Footer omitted for brevity, keep your original footer here */}
        </div>
    );
};

export default IceCream;