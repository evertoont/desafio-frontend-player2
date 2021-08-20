import { createStore } from "redux";

const reducer = (state, action) => {
  switch (action.type) {
    case "TOKEN_LOGIN":
      localStorage.setItem(action.type, action.playload);
      return (window.location = "/banks");
    case "LOGOUT":
      localStorage.removeItem("TOKEN_LOGIN");
      return (window.location = "/");
    default:
      return state;
  }
};

const isAuth = () => !!localStorage.getItem("TOKEN_LOGIN");

const store = createStore(reducer);

export { store, isAuth };
