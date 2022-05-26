import { createContext } from "react";

const moviesContext = createContext({
  movies: [],
  setMovies: () => {},
});

export default moviesContext;
