import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, ListBanks } from "../pages";

export function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/banks" component={ListBanks} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
