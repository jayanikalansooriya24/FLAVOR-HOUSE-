import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactUs.css';
import logo from "../assets/logo.png";

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us! We will get back to you soon.');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contactus-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="Flavor House" onClick={() => navigate('/home')} />
        </div>
         <div className="nav-links">
                    <button className="nav-btn active" onClick={() => navigate('/home')}>Home</button>
                    <button className="nav-btn active" onClick={() => navigate('/AboutUs')}>About Us</button>
                    <button className="nav-btn">Menu</button>
                    <button className="nav-btn active" onClick={() => navigate('/ContactUs')}>Contact Us</button>
                </div>
        <div className="nav-icons">
          <span className="icon">🛍️</span>
          <span className="icon">👤</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="contact-content">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We'd love to hear from you! Get in touch with us.</p>

        <div className="contact-wrapper">
          {/* Contact Information */}
          <section className="contact-info-section">
            <h2 className="section-title">Get In Touch</h2>

            <div className="info-cards">
              <div className="contact-info-card">
                <div className="info-icon">📍</div>
                <h3>Visit Us</h3>
                <p>Negombo</p>
                <p>Western Province, Sri Lanka</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">📞</div>
                <h3>Call Us</h3>
                <p>+94 77 123 4567</p>
                <p>Mon - Sun: 10:00 AM – 11:00 PM</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">✉️</div>
                <h3>Email Us</h3>
                <p>hello@flavorhouse.lk</p>
                <p>We'll respond within 24 hours</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">🕒</div>
                <h3>Opening Hours</h3>
                <p>Monday - Sunday</p>
                <p className="highlight">10:00 AM – 11:00 PM</p>
              </div>
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <h2 className="section-title">Send Us A Message</h2>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+94 77 123 4567"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Reservation, Inquiry, etc."
                    required
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          </section>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <h2 className="section-title">Find Us On The Map</h2>
          <div className="map-container">
            {/* Replace with actual Google Maps embed or map component */}
            <div className="map-placeholder">
              <div className="map-icon">🗺️</div>
              <p>Map Location</p>
              <span>Negombo, Western Province, Sri Lanka</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="contact-footer">
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
            <span className="social-icon">Facebook</span>
            <span className="social-icon">Insta</span>
            <span className="social-icon">TikTok</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUs;