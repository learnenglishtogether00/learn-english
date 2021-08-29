import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const AudioTesting = (props) => {
  const { audioURL } = props;
  return <AudioPlayer src={audioURL} autoPlay={false} />;
};

export default AudioTesting;
