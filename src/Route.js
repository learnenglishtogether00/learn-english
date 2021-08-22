import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

const Router = () => {
  return (
    <Switch>
      <Route path="/learn-english" component={HomePage} />
    </Switch>
  );
};

export default Router;
