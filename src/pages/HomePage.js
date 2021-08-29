import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { WEB_INFO } from "../db/template";
import MiniTestTable from "../components/pages/Home/MiniTestTable";
import DocumentTable from "../components/pages/Home/DocumentTable";
import Listening45DaysTable from "../components/pages/Home/Listening45DaysTable";
import FullTestTable from "../components/pages/Home/FullTestTable";

const HomePage = () => {
  return (
    <Fragment>
      <Typography variant="h3" component="h4" gutterBottom>
        {WEB_INFO.webName}
      </Typography>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={6}>
          <MiniTestTable />
        </Grid>
        <Grid item xs={6}>
          <Listening45DaysTable />
        </Grid>
        <Grid item xs={12}>
          <FullTestTable />
        </Grid>
        <Grid item xs={12}>
          <DocumentTable />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default HomePage;
