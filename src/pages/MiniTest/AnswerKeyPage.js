import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import { useQuery } from "../../utils/customHooks";
import { MINI_TEST_DATA } from "../../db/data";
import { formatTestData } from "../../utils";
import DocumentTesting from "../../components/common/TestingComponents/DocumentTesting";

const useStyles = makeStyles({
  homePageLink: {
    color: "#0d6efd",
    textAlign: "right",

    "&:hover": {
      color: "orange",
      cursor: "pointer",
    },
  },
  paperWrap: {
    padding: 20,
  },
});

const AnswerPage = () => {
  const classes = useStyles();
  let query = useQuery();
  const testId = query.get("test");

  const currentTest = MINI_TEST_DATA.find((item) => item.id === testId);
  const formattedTest = formatTestData(currentTest);

  return (
    <Fragment>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h3" component="h4">
            {`Mini Test - Answer Key - ${formattedTest.name}`}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Link to={`/`}>
            <Typography
              variant="h6"
              component="h4"
              className={classes.homePageLink}
            >
              Trang Chủ
            </Typography>
          </Link>
        </Grid>
      </Grid>

      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={12}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            <DocumentTesting docURL={formattedTest.answerKeyURL} />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default AnswerPage;
