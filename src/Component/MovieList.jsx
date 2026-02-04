import { MovieCard } from "./MovieCard";
import "./MovieList.css";

export const MovieList = ({ movies, updateRating, deleteMovie }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          updateRating={updateRating}
          deleteMovie={deleteMovie}
        />
      ))}
    </div>
  );
};