import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import "./App.css";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/places/new">
          <NewPlace />
        </Route>
        <Route path="/" exact>
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
