import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MiniTestExamPage from "./pages/MiniTest/TestPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/mini-test-exam" component={MiniTestExamPage} />
    </Switch>
  );
};

export default Router;
