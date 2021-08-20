import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, ListBanks, BankDetail } from "../pages";
import { PrivateRoute } from "./PrivateRoute";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <PrivateRoute exact path="/bankdetail/:code" component={BankDetail} />
        <PrivateRoute exact path="/banks" component={ListBanks} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
