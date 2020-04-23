import React from "react";
import { Route, Switch } from "react-router-dom";

import SportClubHomePage from "./pages/SportClubHomePage";

import PageNotFound from "./pages/PageNotFound";

const AppRoutes = () => (
    <>
      <Switch>
        <Route exact path="/" component={SportClubHomePage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
);

export default AppRoutes;
