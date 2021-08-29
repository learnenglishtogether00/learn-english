import React, { Fragment, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

import { useQuery } from "../../utils/customHooks";
import { FULL_TEST_DATA } from "../../db/data";
import { formatTestData } from "../../utils";
import DocumentTesting from "../../components/common/TestingComponents/DocumentTesting";
import AudioTesting from "../../components/common/TestingComponents/AudioTesting";
import FormTesting from "../../components/common/TestingComponents/FormTesting";
import CountDownTimer from "../../components/common/CountDownTimer";

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
    height: 700,
  },
  smallPaperWrap: {
    padding: 20,
    height: 130,
  },
  startedButton: {
    backgroundColor: "#5cb85c",
    color: "white",
    marginTop: 10,
    fontSize: 18,
  },
  showDisplay: {
    display: "block",
  },
  hiddenDisplay: {
    display: "none",
  },
});

const TestPage = () => {
  const classes = useStyles();
  let query = useQuery();
  const testId = query.get("test");

  const [isStarted, setIsStarted] = useState(false);
  const [isOver, setIsOver] = useState(false);

  const currentTest = FULL_TEST_DATA.find((item) => item.id === testId);
  const formattedTest = formatTestData(currentTest);

  return (
    <Fragment>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h3" component="h4">
            {`Full Test - ${formattedTest.name}`}
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
        <Grid item xs={7}>
          <Paper elevation={3} classes={{ root: classes.smallPaperWrap }}>
            <AudioTesting audioURL={formattedTest.normalAudioURL} />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3} classes={{ root: classes.smallPaperWrap }}>
            <CountDownTimer
              hours={2}
              isStarted={isStarted}
              setIsOver={setIsOver}
              setIsStarted={setIsStarted}
            />
          </Paper>
        </Grid>
        <Grid item xs={7}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            <DocumentTesting docURL={formattedTest.docURL} height={650} />
          </Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            <div
              className={
                isStarted && !isOver
                  ? classes.showDisplay
                  : classes.hiddenDisplay
              }
            >
              <FormTesting formURL={formattedTest.formURL} />
            </div>

            {!isStarted && !isOver && (
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ height: "80%" }}
              >
                <Typography variant="h5">Bạn Đã Sẵn Sàng Chưa?</Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.startedButton}
                  onClick={() => {
                    setIsStarted(true);
                  }}
                >
                  Get Started
                </Button>
              </Grid>
            )}

            {isOver && (
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                style={{ height: "80%" }}
              >
                <Typography variant="h5">Hết Giờ Goy ^-^</Typography>
              </Grid>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default TestPage;
