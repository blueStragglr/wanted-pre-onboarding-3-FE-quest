import { Route, Switch } from "react-router-dom";
import Login from "./pages/Login/Login";
import PageA from "./pages/PageA/PageA";
import PageB from "./pages/PageB/PageB";
import PageC from "./pages/PageC/PageC";

function Router() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/pagec">
        <PageC />
      </Route>
      <Route path="/pageb">
        <PageB />
      </Route>
      <Route path="/">
        <PageA />
      </Route>
    </Switch>
  );
}

export default Router;
