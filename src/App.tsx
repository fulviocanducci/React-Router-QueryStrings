import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Components/Home";
import ConfirmEmail from "./Components/ConfirmEmail";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/user/confirm-email?token=123456&email=t@t.com">
                Confirm Email
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Switch>
            <Route path="/user/confirm-email">
              <ConfirmEmail />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
