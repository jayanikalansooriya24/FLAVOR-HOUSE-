import React from "react";
import "./Signin.css";
// If you have FontAwesome or similar for icons, import them here
// Otherwise, we will use placeholder text or emojis for social icons

function Signin() {
  return (
    <div className="signin-page">
      <header className="signin-header">
        <h1>Welcome back!</h1>
        <p>Sign in to continue and enjoy your favorite meals.</p>
      </header>

      <div className="signin-card">
        <h2>Sign In</h2>

        <form className="signin-form">
          <div className="input-group">
            <label>Email Address</label>
            <input type="email" defaultValue="" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" defaultValue="" />
          </div>

          <div className="form-options">
            <label className="remember-me">
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className="forgot-password">Forgot Password?</a>
          </div>

          <div className="button-group">
            <button type="submit" className="login-btn">Login</button>
            <button type="button" className="signup-btn">Sign Up</button>
          </div>
        </form>

        <div className="divider">
          <span>Or login with</span>
        </div>

        <div className="social-login">
          <button className="social-icon fb">f</button>
          <button className="social-icon google">G</button>
        </div>
      </div>
    </div>
  );
}

export default Signin;