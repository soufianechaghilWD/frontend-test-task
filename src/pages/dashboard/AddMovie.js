import React, { useContext, useState } from "react";
import moviesContext from "../../context/moviesContext";

function AddMovie() {
  // state of the component
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rate, setRate] = useState("");

  const { movies, setMovies } = useContext(moviesContext);

  const add = () => {

    // copying the movies from the context
    var newMovies = [];
    for (let i = 0; i < movies?.length; i++) {
      const tmpMovie = Object.assign({}, movies[i]);
      newMovies.push(tmpMovie);
    }

    const id = newMovies[newMovies?.length - 1]?.id + 1 || 1
    newMovies.push({ id, name, genre, rate });
    setMovies(newMovies)

    // set the movies in the localstorage
    localStorage.setItem('user_management_system_movies', JSON.stringify(newMovies))
    setName('')
    setGenre('')
    setRate('')
    };

  return (
    <div className="dash__add">
        <h2>Add Movie in Watchlist</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Enter Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Enter Genre"
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          placeholder="Enter Rating"
          type="text"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <button onClick={add}>Add</button>
      </form>
    </div>
  );
}

export default AddMovie;
