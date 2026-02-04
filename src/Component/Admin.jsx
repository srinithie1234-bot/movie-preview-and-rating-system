import { useState } from "react";
import "./admin.css";

export const Admin = () => {
  const ADMIN_PASSWORD = "admin123";

  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(false);

  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("adminMovies")) || []
  );

  // ✏️ Update states
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  // 🔐 Admin login
  const handleAdminLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("Wrong admin password ❌");
    }
  };

  // ❌ Delete movie
  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
    localStorage.setItem("adminMovies", JSON.stringify(updatedMovies));
  };

  // ✏️ Start edit
  const startEdit = (movie) => {
    setEditId(movie.id);
    setEditTitle(movie.title);
  };

  // 💾 Save edit
  const saveEdit = (id) => {
    const updatedMovies = movies.map((movie) =>
      movie.id === id ? { ...movie, title: editTitle } : movie
    );

    setMovies(updatedMovies);
    localStorage.setItem("adminMovies", JSON.stringify(updatedMovies));

    setEditId(null);
    setEditTitle("");
  };

  // 🔒 ADMIN LOGIN SCREEN
  if (!isAuth) {
    return (
      <div className="admin-login">
        <h2>🔐 ADMIN ONLY</h2>

        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="admin-password"
        />

        <button onClick={handleAdminLogin}>Login</button>
      </div>
    );
  }

  // ✅ ADMIN PANEL
  return (
    <div className="admin-panel">
      <h1>🔐 Admin Panel</h1>
      <h3>Total Movies Added: {movies.length}</h3>

      {movies.length === 0 ? (
        <p>No movies added yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Movie Name</th>
              <th>Rating</th>
              <th>Added By</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {movies.map((movie, index) => (
              <tr key={movie.id}>
                <td>{index + 1}</td>

                <td>
                  {editId === movie.id ? (
                    <input
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                    />
                  ) : (
                    movie.title
                  )}
                </td>

                <td>{movie.rating}</td>
                <td>{movie.addedBy || "Unknown"}</td>

                <td>
                  {editId === movie.id ? (
                    <button
                      className="save-btn"
                      onClick={() => saveEdit(movie.id)}
                    >
                      💾 Save
                    </button>
                  ) : (
                    <button
                      className="update-btn"
                      onClick={() => startEdit(movie)}
                    >
                      ✏️ Update
                    </button>
                  )}

                  <button
                    className="delete-btn"
                    onClick={() => deleteMovie(movie.id)}
                  >
                    ❌ Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
