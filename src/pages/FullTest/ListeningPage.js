import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

import { useQuery } from "../../utils/customHooks";
import { FULL_TEST_DATA } from "../../db/data";
import { formatTestData } from "../../utils";
import DocumentTesting from "../../components/common/TestingComponents/DocumentTesting";
import AudioTesting from "../../components/common/TestingComponents/AudioTesting";

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
    paddingTop: 10,
    paddingBottom: 10,
  },
  partTitle: {
    textAlign: "center",
    color: "#800080",
    marginBottom: 10,
    textTransform: "capitalize",
  },
  subTitle: {
    textAlign: "center",
  },
});

const ListeningPage = () => {
  const classes = useStyles();
  let query = useQuery();
  const testId = query.get("test");

  const currentTest = FULL_TEST_DATA.find((item) => item.id === testId);
  const formattedTest = formatTestData(currentTest);

  return (
    <Fragment>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h3" component="h4">
            {`Full Test - Listening - ${formattedTest.name}`}
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

      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={7}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            <Typography
              variant="h6"
              component="h5"
              className={classes.partTitle}
            >
              File nghe
            </Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              (Vui lòng đợi đến khi file hiển thị thời gian, do file nghe có
              dung lượng khá lớn)
            </Typography>
            <AudioTesting audioURL={formattedTest.normalAudioURL} />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            <DocumentTesting docURL={formattedTest.listenDocURL} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            <DocumentTesting docURL={formattedTest.transcriptURL} />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ListeningPage;
