import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { CurrencyConverter } from './views/currencyConverter/CurrencyConverter';
import { ProjectsList } from "./views/projectsList/ProjectsList";

export const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/projects">
          <ProjectsList />
        </Route>
        <Route path="/currency-converter">
          <CurrencyConverter />
        </Route>
        <Route path="/">
          <Redirect to="/projects" />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
