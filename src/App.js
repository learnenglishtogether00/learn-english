import React from "react";
import { BrowserRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { WEB_INFO } from "./db/template";
import Router from "./Route";

const useStyles = makeStyles({
  maxWidthLg: {
    paddingLeft: 50,
    paddingRight: 50,
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
          <Typography variant="h3" component="h4" gutterBottom>
            {WEB_INFO.webName}
          </Typography>
          <Router />
        </Container>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
