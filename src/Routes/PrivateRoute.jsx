import { Route, Redirect } from "react-router-dom";
import { isAuth } from "../auth/store";

export const PrivateRoute = (props) =>
  isAuth() ? <Route {...props} /> : <Redirect to="/" />;
