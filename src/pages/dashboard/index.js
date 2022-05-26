import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logInContext from "../../context/logInContext";
import moviesContext from "../../context/moviesContext";
import AddMovie from "./AddMovie";
import ShowMovies from "./ShowMovies";
import '../../styles/dashboard.css'

function Index() {
  
    // getting the context data
    const { logIn, setLogIn } = useContext(logInContext);
    const { setMovies } = useContext(moviesContext)
    const navigate = useNavigate()

  // check if the user is already connected (in localstorage)
  useEffect(() => {
    const user = localStorage.getItem("user_management_system_login");
    const movies = localStorage.getItem('user_management_system_movies')
    if(!user){
        navigate('/login')
    }else{
        setLogIn(user)
        // set the movies saved in the localstorage in the context
        setMovies(JSON.parse(movies))
    }
  }, []);

  const logout = () => {
      setLogIn('')
      localStorage.removeItem('user_management_system_login')

      navigate('/login')
  }


  return (
    <div className="dash">
        <div className="dash__header">
            <div className="empty_space"></div>
            <div className="dash__header__header">
                <h1>User Management System</h1>
            </div>
            <button onClick={logout}>Logout</button>
        </div>
        <div className="secondary__header">
            <p>Hey {logIn}!</p>
            <h2>Your Watchlist</h2>
        </div>
        <ShowMovies />
        <AddMovie />
    </div>
  );
}

export default Index;
