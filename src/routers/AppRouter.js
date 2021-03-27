import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Error } from "../pages/Error";

const path = `${process.env.PUBLIC_URL}`;

export const AppRouter = () => {
  return (
    <Router path={path}>
      <Switch>
        <Route exact path={`${path}/`}>
          <Home />
        </Route>
        <Route path={`/error`}>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};
