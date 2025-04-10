// src/components/Auth.js
import React, { useState } from "react";
import "../styles/Auth.css";

const Auth = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (email && password) {
      localStorage.setItem(email, JSON.stringify({ email, password }));
      alert("Registration successful!");
      setIsRegistering(false);
    } else {
      alert("Please enter valid details.");
    }
  };

  const handleLogin = () => {
    const storedUser = localStorage.getItem(email);
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      if (userData.password === password) {
        window.location.href = "https://www.google.com";
      } else {
        alert("Incorrect password.");
      }
    } else {
      alert("You are not registered. Please register first.");
    }
  };

  return (
    <div className="container">
      <div className="auth-box">
        <h2>{isRegistering ? "Register" : "Login"}</h2>
        <input
          type="email"
          placeholder="Email ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isRegistering ? (
          <button onClick={handleRegister} className="register-btn">
            Register
          </button>
        ) : (
          <button onClick={handleLogin} className="login-btn">
            Login
          </button>
        )}
        <p>
          {isRegistering ? "Already have an account?" : "Don't have an account?"}
          <button onClick={() => setIsRegistering(!isRegistering)} className="toggle-btn">
            {isRegistering ? "Login here" : "Register here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;