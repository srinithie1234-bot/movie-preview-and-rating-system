import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔍 find matching user
    const validUser = users.find(
      (u) => u.email === username && u.password === password
    );

    if (!validUser) {
      alert("Invalid email or password");
      return;
    }

    // ✅ login success
    localStorage.setItem("loggedInUser", validUser.username);
    alert("Login successful");
  };

  return (
    <div className="login-container">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="signin-main" type="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
