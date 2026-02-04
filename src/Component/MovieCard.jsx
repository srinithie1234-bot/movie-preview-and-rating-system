import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieCard.css";

export const MovieCard = ({ movie, updateRating, deleteMovie }) => {
  const navigate = useNavigate();

  const [editRating, setEditRating] = useState(movie.rating);
  const [rating, setRating] = useState(movie.rating || 0);
  const [review, setReview] = useState("");
  const [submittedReview, setSubmittedReview] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  // 🚫 stop navigation ONLY for buttons / inputs
  const stop = (e) => e.stopPropagation();

  // 📝 Submit review
  const handleSubmit = (e) => {
    stop(e);
    if (review.trim() === "") {
      alert("Please write a review");
      return;
    }
    setSubmittedReview(review);
    setReview("");
    setIsEditing(false);
  };

  const handleEdit = (e) => {
    stop(e);
    setReview(submittedReview);
    setIsEditing(true);
  };

  const handleCancel = (e) => {
    stop(e);
    setReview("");
    setIsEditing(false);
  };

  return (
    // ✅ Card OR Image click → details page
    <div
      className="card"
      onClick={() => navigate(`/movie/${movie.id}`)}
    >
      {/* 🖼️ Movie Image (CLICKABLE) */}
      <img
        src={movie.image}
        alt={movie.title}
        className="movie-poster"
      />

      <h3>{movie.title}</h3>

      {/* ⭐ Star Rating */}
      <div className="stars" onClick={stop}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={star <= rating ? "active" : ""}
          >
            ⭐
          </span>
        ))}
      </div>

      <p>⭐ {rating}/5</p>
      <p>👤 Added by: {movie.addedBy}</p>

      {/* ✏️ Update rating */}
      <input
        type="number"
        value={editRating}
        onClick={stop}
        onChange={(e) => setEditRating(e.target.value)}
      />

      <div className="btn-row" onClick={stop}>
        <button
          type="button"
          className="btn update-btn"
          onClick={() => updateRating(movie.id, editRating)}
        >
          Update Rating
        </button>

        <button
          type="button"
          className="btn delete-btn"
          onClick={() => deleteMovie(movie.id)}
        >
          Delete
        </button>
      </div>

      {/* 📝 Review Section */}
      {(isEditing || !submittedReview) && (
        <textarea
          placeholder="Write your review..."
          value={review}
          onClick={stop}
          onChange={(e) => setReview(e.target.value)}
        />
      )}

      {(isEditing || !submittedReview) && (
        <div className="btn-row" onClick={stop}>
          <button
            type="button"
            className="btn submit-btn"
            onClick={handleSubmit}
          >
            {isEditing ? "Update Review" : "Submit Review"}
          </button>

          {isEditing && (
            <button
              type="button"
              className="btn cancel-btn"
              onClick={handleCancel}
            >
              Cancel
            </button>
          )}
        </div>
      )}

      {submittedReview && !isEditing && (
        <div className="review-box" onClick={stop}>
          <h4>Your Review:</h4>
          <p>{submittedReview}</p>
          <button
            type="button"
            className="btn update-btn"
            onClick={handleEdit}
          >
            Edit Review
          </button>
        </div>
      )}
    </div>
  );
};
   