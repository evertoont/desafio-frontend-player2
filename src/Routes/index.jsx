import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, ListBanks, BankDetail } from "../pages";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/bankdetail/:code" component={BankDetail} />
        <Route exact path="/banks" component={ListBanks} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
