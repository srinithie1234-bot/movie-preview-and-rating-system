import { useState } from "react";

export const MovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const currentUser = localStorage.getItem("loggedInUser");

    if (!currentUser) {
      alert("Please login first to add a movie!");
      return;
    }

    if (title.trim() === "" || rating === "") {
      alert("Please enter movie name and rating");
      return;
    }

    addMovie({ title, rating });
    setTitle("");
    setRating("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Movie name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="Rating"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />

      <button type="submit" className="btn add-btn">
  Add Movie
</button>

    </form>
  );
};