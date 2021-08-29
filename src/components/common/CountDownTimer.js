import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  startButton: {
    backgroundColor: "#5cb85c",
    color: "white",
    marginRight: 20,
  },
  pauseButton: {
    backgroundColor: "gray",
    color: "white",
    marginRight: 20,
  },
});

const CountDown = ({
  hours = 0,
  minutes = 0,
  seconds = 0,
  isStarted,
  setIsOver,
  setIsStarted,
}) => {
  const classes = useStyles();
  const [paused, setPaused] = React.useState(true);
  const [over, setOver] = React.useState(false);
  const [[h, m, s], setTime] = React.useState([hours, minutes, seconds]);

  const tick = () => {
    if (paused || over) return;
    if (h === 0 && m === 0 && s === 0) setOver(true);
    else if (m === 0 && s === 0) {
      setTime([h - 1, 59, 59]);
    } else if (s === 0) {
      setTime([h, m - 1, 59]);
    } else {
      setTime([h, m, s - 1]);
    }
  };

  const reset = () => {
    setTime([parseInt(hours), parseInt(minutes), parseInt(seconds)]);
    setPaused(false);
    setOver(false);
    setIsStarted(false);
    setIsOver(false);
  };

  React.useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  React.useEffect(() => {
    if (isStarted) {
      setPaused(false);
    }
  }, [isStarted]);

  React.useEffect(() => {
    if (over) {
      setIsOver(true);
    }
  }, [over, setIsOver]);

  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Typography variant="h4" component="h4">
        {`${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
          .toString()
          .padStart(2, "0")}`}
      </Typography>
      <Grid item xs={12}>
        <Grid container justifyContent="center">
          <Button
            variant="contained"
            color="secondary"
            className={paused ? classes.startButton : classes.pauseButton}
            onClick={() => setPaused(!paused)}
          >
            {paused ? "Resume" : "Pause"}
          </Button>
          <Button variant="contained" color="secondary" onClick={() => reset()}>
            Restart
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CountDown;
