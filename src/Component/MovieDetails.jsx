import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./MovieDetails.css";

export const MovieDetails = () => {
  const { id } = useParams();

  // 🔹 Get movies from localStorage
  const movies = JSON.parse(localStorage.getItem("adminMovies")) || [];
  const movie = movies.find((m) => m.id.toString() === id);

  if (!movie) {
    return <h2 className="not-found">Movie not found</h2>;
  }

  // 🔢 Viewers & Subscribers
  const [viewers, setViewers] = useState(movie.viewers || 0);
  const [subscribers, setSubscribers] = useState(movie.subscribers || 0);

  // 👀 Auto viewer count increment
  useEffect(() => {
    setViewers((prev) => prev + 1);
  }, []);

  return (
    <div className="details-page">
      {/* 🎬 TOP SECTION */}
      <div className="top-section">
        <img
          src={movie.image}
          alt={movie.title}
          className="details-poster"
        />

        <div className="title-box">
          <h1>{movie.title}</h1>
          <p className="rating">⭐ {movie.rating} / 5</p>
          <p className="platform">📺 {movie.subscription || "Streaming"}</p>
          <p>👀 Viewers: {viewers.toLocaleString()}</p>

          {/* 🔔 Subscribe */}
          <button
            className="subscribe-btn"
            onClick={() => setSubscribers(subscribers + 1)}
          >
            🔔 Subscribe ({subscribers.toLocaleString()})
          </button>
        </div>
      </div>

      {/* 🎥 PREVIEW TRAILER (MERGED PART) */}
      {movie.trailer && (
        <section className="section">
          <h2>🎥 Preview Trailer</h2>
          <iframe
            src={movie.trailer}
            title="Movie Trailer"
            allowFullScreen
          ></iframe>
        </section>
      )}

      {/* 📖 STORY */}
      <section className="section">
        <h2>📖 Movie Story</h2>
        <p>{movie.description}</p>
      </section>

      {/* 🎭 ACTORS */}
      {movie.actors && movie.actors.length > 0 && (
        <section className="section">
          <h2>🎭 Actors</h2>
          <div className="actors">
            {movie.actors.map((actor, index) => (
              <div key={index} className="actor-card">
                {actor}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 📝 REVIEWS */}
      <section className="section">
        <h2>📝 User Reviews</h2>
        {movie.reviews && movie.reviews.length > 0 ? (
          <ul className="review-list">
            {movie.reviews.map((review, index) => (
              <li key={index}>⭐ {review}</li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet</p>
        )}
      </section>
    </div>
  );
};
