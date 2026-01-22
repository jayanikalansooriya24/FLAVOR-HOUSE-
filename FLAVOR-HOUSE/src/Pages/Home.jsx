import React from 'react';
import './Home.css';
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

// Import all images
import wingsImg from "../assets/Buffalo wings.jpg";
import biriyaniImg from "../assets/Chicken Biriyani.jpg";
import kottuImg from "../assets/Vegetable Kottu.jpg";
import brownieImg from "../assets/Chocolate Brownie.jpg";
import puddingImg from "../assets/Custard Pudding.jpg";
import coffeeImg from "../assets/Iced Coffee.jpg";
import springRollsImg from "../assets/Spring Rolls.jpg";
import garlicBreadImg from "../assets/Garlic Bread.jpg";
import stuffedMushroomsImg from "../assets/Stuffed Mushrooms.jpg";
import mozzarellaImg from "../assets/Mozzarella Sticks.jpg";

const Home = () => {
    const navigate = useNavigate();

    const foodItems = [
        { id: 1, name: "Buffalo Wings", price: "Rs 800.00", image: wingsImg, type: "Non-Veg" },
        { id: 2, name: "Chicken Biriyani", price: "Rs 1000.00", image: biriyaniImg, type: "Non-Veg" },
        { id: 3, name: "Vegetable Kottu", price: "Rs 650.00", image: kottuImg, type: "Vegetarian" },
        { id: 4, name: "Chocolate Brownie", price: "Rs 550.00", image: brownieImg, type: "Vegetarian" },
        { id: 5, name: "Custard Pudding", price: "Rs 350.00", image: puddingImg, type: "Vegetarian" },
        { id: 6, name: "Iced Coffee", price: "Rs 250.00", image: coffeeImg, type: "Vegetarian" },
        { id: 7, name: "Spring Rolls", price: "Rs 450.00", image: springRollsImg, type: "Vegetarian" },
        { id: 8, name: "Garlic Bread", price: "Rs 350.00", image: garlicBreadImg, type: "Vegetarian" },
        { id: 9, name: "Mozzarella Sticks", price: "Rs 650.00", image: mozzarellaImg, type: "Vegetarian" },
    ];

    // Map each food to its detail page route
    const getFoodRoute = (name) => {
        switch(name) {
            case "Buffalo Wings": return "/onefood";
            case "Chicken Biriyani": return "/ChickenBiriyani";
            case "Vegetable Kottu": return "/VegetableKottu";
            case "Chocolate Brownie": return "/ChocolateBrownie";
            case "Custard Pudding": return "/CustardPudding";
            case "Iced Coffee": return "/threefood";
            case "Spring Rolls": return "/fourfood";
            case "Garlic Bread": return "/fivefood";
            case "Mozzarella Sticks": return "/threefood";
            default: return "/home";
        }
    }

    return (
        <div className="home-container">
            {/* Navbar */}
            <nav className="navbar">
                <div className="nav-logo">
                    <img src={logo} alt="Flavor House" style={{ cursor: 'pointer' }} onClick={() => navigate('/home')} />
                </div>
                <div className="nav-links">
                    <button className="nav-btn active" onClick={() => navigate('/home')}>Home</button>
                    <button className="nav-btn active" onClick={() => navigate('/AboutUs')}>About Us</button>
                    <button className="nav-btn active" onClick={() => navigate('/Menu')}>Menu</button>
                    <button className="nav-btn active" onClick={() => navigate('/ContactUs')}>Contact Us</button>
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
                <button className="cat-btn" onClick={() => navigate("/Appetizers")}>Appetizers</button>
                <button className="cat-btn" onClick={() => navigate("/MainCourse")}>Main Course</button>
                <button className="cat-btn" onClick={() => navigate("/Desserts")}>Desserts</button>
                <button className="cat-btn" onClick={() => navigate("/Beverages")}>Beverages</button>
            </div>

            {/* Product Grid */}
            <div className="product-grid">
                {foodItems.map((item) => (
                    <div
                        key={item.id}
                        className="product-card"
                        onClick={() => navigate(getFoodRoute(item.name))}
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
                            <div className="tag">{item.type === "Vegetarian" ? "🟢" : "🔴"} {item.type}</div>
                            <button
                                className="add-to-cart"
                                onClick={(e) => {
                                    e.stopPropagation(); // prevent navigation
                                    alert(`${item.name} added to cart!`);
                                }}
                            >
                                ADD TO CART
                            </button>
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
