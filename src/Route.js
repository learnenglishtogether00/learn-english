import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MiniTestExamPage from "./pages/MiniTest/TestPage";
import MiniTestListeningPage from "./pages/MiniTest/ListeningPage";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/mini-test-exam" component={MiniTestExamPage} />
      <Route
        exact
        path="/mini-test-listening"
        component={MiniTestListeningPage}
      />
    </Switch>
  );
};

export default Router;
