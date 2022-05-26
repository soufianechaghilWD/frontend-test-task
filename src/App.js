import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from './pages/dashboard'
import logInContext from "./context/logInContext";
import moviesContext from "./context/moviesContext";
import { useState } from "react";

function App() {

  const [logIn, setLogIn] = useState(null)
  const [movies, setMovies] = useState([])

  const logInValue = {logIn, setLogIn}
  const moviesValue = {movies, setMovies}


  return (
    <BrowserRouter>
      <logInContext.Provider value={logInValue} >
        <moviesContext.Provider value={moviesValue} >
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </div>
        </moviesContext.Provider>
      </logInContext.Provider>
    </BrowserRouter>
  );
}

export default App;
