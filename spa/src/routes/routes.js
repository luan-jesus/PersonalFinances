import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import NewMov from "../pages/NewMov";

function Routes() {
  return (
    <Switch>
      <Route path="/dashboard" exact={true} component={Dashboard}  />
      <Route path="/nova-movimentacao" component={NewMov} />
      <Redirect from="/" to="/dashboard" />
    </Switch>
  );
}

export default Routes;
