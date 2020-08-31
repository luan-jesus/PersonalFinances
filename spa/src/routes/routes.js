import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Categoria from "../pages/Categoria";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Dashboard} />
        <Route path="/categoria" component={Categoria} />
        <Redirect from="/" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
