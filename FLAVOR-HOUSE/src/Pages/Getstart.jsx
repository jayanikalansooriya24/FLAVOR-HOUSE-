import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Getstart.css';
import logo from "../assets/logo.png";


function Getstart() { 
  const navigate = useNavigate(); 

  return (
    <div className="landing-page">
      <main className="brand-container">
        <div className="logo-placeholder">
          <img src={logo} alt="Flavor House Logo" className="logo-image" />
        </div>
        
      </main>

      <footer className="footer">
        <button className="get-start-btn" onClick={() => navigate('/signin?*')}>
          Get Start
        </button>
      </footer>
    </div>
  );
}

export default Getstart;