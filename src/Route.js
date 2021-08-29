import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MiniTestExamPage from "./pages/MiniTest/TestPage";
import MiniTestListeningPage from "./pages/MiniTest/ListeningPage";
import MiniTestAnswerKeyPage from "./pages/MiniTest/AnswerKeyPage";
import DocumentPage from "./pages/DocumentPage";
import IntroDocumentPage from "./pages/Listening45Days/IntroDocumentPage";
import Listen45DaysListeningTest from "./pages/Listening45Days/ListeningPage";

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
      <Route exact path="/document" component={DocumentPage} />
      <Route
        exact
        path="/listening-45-days-document"
        component={IntroDocumentPage}
      />
      <Route
        exact
        path="/listening-45-days-listen"
        component={Listen45DaysListeningTest}
      />
    </Switch>
  );
};

export default Router;
