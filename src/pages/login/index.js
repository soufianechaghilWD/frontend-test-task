import React, { useContext, useState } from "react";
import logInContext from "../../context/logInContext";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";

function Index() {
  // state of the component
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // getting the data from the context
  const { setLogIn } = useContext(logInContext);


  const login = () => {
    // check the credentials are valid
    if (username === "XYZ" && password === "123") {
        // set the state of the context
      setLogIn(username);

        // set the data in the localStorage
        localStorage.setItem('user_management_system_login', username)

      // navigate the user to the dashboard
      navigate("/");
    } else {
      setError("Wrong username and password combination");
    }
  };

  return (
    <div className="login">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>User Management System</h1>
        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
        {error !== "" && <p className="error_msg">{error}</p>}
      </form>
    </div>
  );
}

export default Index;
