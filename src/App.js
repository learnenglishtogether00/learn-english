import React from "react";
import { BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Router from "./Route";

const useStyles = makeStyles({
  maxWidthLg: {
    paddingLeft: 150,
    paddingRight: 150,
    paddingTop: 20,
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="xl" className={classes.maxWidthLg}>
          <Router />
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
