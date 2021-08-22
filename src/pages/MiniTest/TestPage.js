import React from "react";
import Grid from "@material-ui/core/Grid";

import { useQuery } from "../../utils/customHooks";

const TestPage = () => {
  let query = useQuery();
  const testId = query.get("test");
  console.log({ testId });

  return (
    <Grid container justifyContent="space-between" spacing={3}>
      <Grid item xs={6}>
        Mini test page
      </Grid>
    </Grid>
  );
};

export default TestPage;
