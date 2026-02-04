import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("loggedInUser", username);
    alert("Login successful");
  };

  const handleReset = () => {
    setUsername("");
    setPassword("");
  };

  // 🔹 Dummy handlers (UI only)
  const handleGoogleLogin = () => {
    alert("Google login coming soon 🚀");
  };

  const handleAppleLogin = () => {
    alert("Apple login coming soon 🍎");
  };

  return (
    <div className="login-container">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmit}>
        <label>Username or Email</label>
        <input
          type="email"
          placeholder="example@gmail.com"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="signin-main" type="submit">
          Sign in
        </button>
      </form>

      <div className="divider">or</div>

      {/* 🔵 Google */}
      <button className="social-btn google" onClick={handleGoogleLogin}>
        Continue with Google
      </button>

      {/* ⚫ Apple */}
      <button className="social-btn apple" onClick={handleAppleLogin}>
        Continue with Apple
      </button>

      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Login;
