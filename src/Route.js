import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MiniTestExamPage from "./pages/MiniTest/TestPage";
import MiniTestListeningPage from "./pages/MiniTest/ListeningPage";
import MiniTestAnswerKeyPage from "./pages/MiniTest/AnswerKeyPage";

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
      <Route
        exact
        path="/mini-test-answer-key"
        component={MiniTestAnswerKeyPage}
      />
    </Switch>
  );
};

export default Router;
