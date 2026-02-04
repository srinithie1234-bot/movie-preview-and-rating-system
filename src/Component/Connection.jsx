import { Routes, Route } from "react-router-dom";

import { Home } from "./Home";
import { About } from "./About";
import { Contact } from "./Contact";
import { Login } from "./Login";
import { Register } from "./Register";
import { Admin } from "./Admin";
import { MovieDetails } from "./MovieDetails";

export const Connection = () => {
  return (
    <Routes>
      {/* 🏠 Home */}
      <Route path="/" element={<Home />} />

      {/* 🎬 Movie Details (on image click) */}
      <Route path="/movie/:id" element={<MovieDetails />} />

      {/* ℹ️ Other pages */}
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* 🔐 Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* 🛠 Admin */}
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
