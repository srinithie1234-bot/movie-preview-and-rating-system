import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MovieList } from "./MovieList";
import { MovieForm } from "./MovieForm";
import { moviesData } from "./MoviesData";

import "./Home.css";

// 🎬 Import images
import img1 from "../assets/anjan.jpg";
import img2 from "../assets/leo.jpg";
import img3 from "../assets/jailour.jpg";
import img4 from "../assets/vikram.jpg";
import img5 from "../assets/beast.jpg";

// 🎯 Movie name → Image mapping
const MOVIE_IMAGE_MAP = {
  anjan: img1,
  leo: img2,
  jailour: img3,
  vikram: img4,
  beast: img5,
};

const STORAGE_KEY = "adminMovies";

export const Home = () => {
  // 🔹 Load movies from localStorage
  const [movies, setMovies] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : moviesData;
  });

  const [search, setSearch] = useState("");

  // 🔹 Save movies whenever data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  }, [movies]);

  // 🔍 SEARCH
  const filteredMovies = movies.filter((movie) => {
    const query = search.trim().toLowerCase();
    if (query === "") return true;
    return movie.title.toLowerCase().startsWith(query);
  });

  // ➕ ADD MOVIE
  const addMovie = (movie) => {
    const currentUser = localStorage.getItem("loggedInUser");

    if (!currentUser) {
      alert("Please login first to add a movie!");
      return;
    }

    const titleKey = movie.title.trim().toLowerCase();
    const selectedImage = MOVIE_IMAGE_MAP[titleKey];

    if (!selectedImage) {
      alert("Image not available for this movie name");
      return;
    }

    setMovies([
      ...movies,
      {
        ...movie,
        image: selectedImage,
        addedBy: currentUser,
        id: Date.now(),
      },
    ]);
  };

  // ✏️ UPDATE RATING
  const updateRating = (id, newRating) => {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, rating: newRating } : movie
      )
    );
  };

  // ❌ DELETE MOVIE
  const deleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <div className="home">
      {/* 🔐 SIGN IN / SIGN UP */}
      <div className="auth-buttons">
        <Link to="/login">
          <button className="signin-btn">Sign In</button>
        </Link>

        <Link to="/register">
          <button className="signup-btn">Sign Up</button>
        </Link>
      </div>

      <h1>🎬 Movie Preview & Rating</h1>

      <input
        className="search"
        placeholder="Search movie..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ➕ Add Movie */}
      <MovieForm addMovie={addMovie} />

      {/* 🎞 Movie List */}
      <MovieList
        movies={filteredMovies}
        updateRating={updateRating}
        deleteMovie={deleteMovie}
      />
    </div>
  );
};

export default Home;
