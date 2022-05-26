import React, { useContext } from "react";
import moviesContext from "../../context/moviesContext";

function ShowMovies() {
  const { movies, setMovies } = useContext(moviesContext);

  const deleteMovie = (id) => {
    console.log(id);
    // copying the movies from the context
    var newMovies = [];
    for (let i = 0; i < movies?.length; i++) {
      const tmpMovie = Object.assign({}, movies[i]);
      newMovies.push(tmpMovie);
    }

    for (let i = 0; i < newMovies.length; i++) {
      const tmp = newMovies[i];
      if (tmp?.id === id) {
        newMovies.splice(i, 1);
      }
    }

    setMovies(newMovies);
    // set the movies in the localstorage
    localStorage.setItem(
      "user_management_system_movies",
      JSON.stringify(newMovies)
    );
  };

  return (
    <div className="dash__ele">
      <div className="titles">
        <p>ID</p>
        <p>Movie</p>
        <p>Genre</p>
        <p>Rating</p>
        <p>Action</p>
      </div>
      {movies?.map((movie, idx) => {
        const { id, name, genre, rate } = movie;
        return (
          <div className="movie" key={idx}>
            <p>{id}</p>
            <p>{name}</p>
            <p>{genre}</p>
            <p>{rate}</p>
            <button onClick={() => deleteMovie(id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default ShowMovies;
