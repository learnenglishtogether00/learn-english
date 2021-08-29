import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { useQuery } from "../../utils/customHooks";
import { LISTENING_45_DAYS_DATA } from "../../db/data";
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
});

const ListeningPage = () => {
  const classes = useStyles();
  let query = useQuery();
  const testId = query.get("test");

  const currentTest = LISTENING_45_DAYS_DATA.find((item) => item.id === testId);
  const formattedTest = formatTestData(currentTest);

  return (
    <Fragment>
      <Grid container justifyContent="space-between" spacing={3}>
        <Grid item xs={6}>
          <Typography variant="h3" component="h4">
            {`Listening 45 Days - ${formattedTest.name}`}
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

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            <Typography
              variant="h6"
              component="h4"
              className={classes.partTitle}
            >
              Bài nghe
            </Typography>
            <AudioTesting audioURL={formattedTest.docAudioURL} />
          </Paper>
        </Grid>
        {formattedTest.wordsAudioURL && (
          <Grid item xs={6}>
            <Paper elevation={3} classes={{ root: classes.paperWrap }}>
              <Typography
                variant="h6"
                component="h4"
                className={classes.partTitle}
              >
                Từ mới trong bài
              </Typography>
              <AudioTesting audioURL={formattedTest.wordsAudioURL} />
            </Paper>
          </Grid>
        )}

        <Grid item xs={6}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            <DocumentTesting docURL={formattedTest.docURL} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            <TextareaAutosize
              style={{
                width: "100%",
                padding: 20,
              }}
              minRows={20}
              placeholder="Nơi để điền nội dung nghe"
            />
          </Paper>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default ListeningPage;
