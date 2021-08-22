import React from "react";
import Grid from "@material-ui/core/Grid";

import MiniTestTable from "../components/pages/Home/MiniTestTable";

const HomePage = () => {
  return (
    <Grid container justifyContent="space-between" spacing={3}>
      <Grid item xs={6}>
        <MiniTestTable />
      </Grid>
      <Grid item xs={6}>
        <MiniTestTable />
      </Grid>
      <Grid item xs={6}>
        <MiniTestTable />
      </Grid>
    </Grid>
  );
};

export default HomePage;
