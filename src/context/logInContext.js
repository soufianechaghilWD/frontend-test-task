import { createContext } from "react";

const logInContext = createContext({
  logIn: null,
  setLogIn: () => {},
});

export default logInContext;
