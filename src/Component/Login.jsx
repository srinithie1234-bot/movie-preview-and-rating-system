import { useState } from "react";
import "./Login.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:8080/api/users/login",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.text();

      if (data === "Login successful") {
        localStorage.setItem("loggedInUser", email);
        alert("Login successful");
      } else {
        alert(data);
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="login-container">
      <h1>Sign in</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
