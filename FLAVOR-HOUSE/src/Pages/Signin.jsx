import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signin.css";

function Signin() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        // Clear previous errors
        setError("");

        // Email validation
        if (!email) {
            setError("Email is required");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address");
            return;
        }

        // Password validation
        if (!password) {
            setError("Password is required");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        // ✅ If all validations pass
        navigate("/home");
    };

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
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    {/* Error Message */}
                    {error && <p className="error-text">{error}</p>}

                    <div className="button-group">
                        <button
                            type="button"
                            className="signup-btn"
                            onClick={handleLogin}
                        >
                            Login
                        </button>

                        <button type="button" className="signup-btn">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;
