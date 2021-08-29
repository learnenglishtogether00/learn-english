import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { COMPLETE_TEST_STORAGE_KEY } from "../../../enums";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../../../helpers/localStorage";
import { checkIsTestComplete } from "../../../utils";

const useStyles = makeStyles({
  modalTitle: {
    marginTop: 0,
    marginBottom: 6,
    textAlign: "center",
    textTransform: "capitalize",
    fontSize: 25,
    fontWeight: "normal",
  },
  cardContainer: {
    marginTop: 10,
  },
  cardWrap: {
    borderRadius: 10,
    border: "1px solid rgba(0,0,0,.125)",
  },
  modeTitle: {
    fontSize: 18,
  },
  actionButton: {
    color: "#0d6efd",

    "&:hover": {
      color: "orange",
      cursor: "pointer",
    },
  },
  completeButton: {
    backgroundColor: "#5cb85c",
    color: "white",
    width: "100%",
    fontWeight: "bold",

    "&:hover": {
      backgroundColor: "#5cb85c",
    },
  },
});

const FullTestModalContent = (props) => {
  const { testDetail, handleCloseModal } = props;
  const classes = useStyles();

  const handleCompleteTest = () => {
    const completeTestStr = getItemLocalStorage(COMPLETE_TEST_STORAGE_KEY);
    let completeTestIds = completeTestStr ? completeTestStr.split("/") : [];

    completeTestIds.push(testDetail.id);
    const updatedCompleteTests = completeTestIds.join("/");
    setItemLocalStorage(COMPLETE_TEST_STORAGE_KEY, updatedCompleteTests);

    handleCloseModal();
  };

  return (
    <Fragment>
      <Typography
        variant="h2"
        id="transition-modal-title"
        className={classes.modalTitle}
      >
        {testDetail?.name}
      </Typography>
      <Typography variant="subtitle1" id="transition-modal-description">
        Hãy chọn các chế độ bên dưới, nếu bạn đã thực hiện bài test hãy bấm nút
        "Hoàn Thành" bên dưới (để đóng cửa sổ hãy click ra vùng màu tối).
      </Typography>
      <Grid
        container
        spacing={3}
        className={classes.cardContainer}
        justifyContent="center"
      >
        <Grid item xs={4}>
          <Card elevation={0} className={classes.cardWrap}>
            <CardContent>
              <Typography className={classes.modeTitle} variant="h6">
                Full Test
              </Typography>
              <Typography variant="subtitle1">Thực hiện bài Test</Typography>

              <Link to={`/full-test-exam?test=${testDetail.id}`}>
                <Typography variant="button" className={classes.actionButton}>
                  Let Go
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card elevation={0} className={classes.cardWrap}>
            <CardContent>
              <Typography variant="h6" className={classes.modeTitle}>
                Listening Test
              </Typography>
              <Typography variant="subtitle1">
                Rèn luyện Listening Skill
              </Typography>
              <Link to={`/full-test-listen?test=${testDetail.id}`}>
                <Typography variant="button" className={classes.actionButton}>
                  Let Go
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card elevation={0} className={classes.cardWrap}>
            <CardContent>
              <Typography variant="h6" className={classes.modeTitle}>
                Answer Key
              </Typography>
              <Typography variant="subtitle1">Xem đáp án chi tiết</Typography>
              <Link to={`/full-test-answer-key?test=${testDetail.id}`}>
                <Typography variant="button" className={classes.actionButton}>
                  Let Go
                </Typography>
              </Link>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Button
            variant="contained"
            className={classes.completeButton}
            onClick={handleCompleteTest}
            disabled={checkIsTestComplete(testDetail.id)}
          >
            Hoàn Thành
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default FullTestModalContent;
