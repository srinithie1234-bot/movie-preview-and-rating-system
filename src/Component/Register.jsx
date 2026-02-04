import { useState } from "react";
import "./Register.css";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8080/api/users/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, password }),
        }
      );

      const data = await response.text();
      alert(data);

      if (data === "Registration successful") {
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      alert("Server error");
    }
  };

  return (
    <div className="register-container">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name"
          value={name} onChange={(e) => setName(e.target.value)} required />

        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)} required />

        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)} required />

        <input type="password" placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
