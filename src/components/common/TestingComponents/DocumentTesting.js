import React from "react";

const DocumentTesting = (props) => {
  const { docURL, height = 800 } = props;

  return (
    <iframe
      title="Doc Frame"
      id="docFrame"
      width="100%"
      height={height}
      frameborder="0"
      marginHeight="0"
      marginWidth="0"
      src={docURL}
    >
      Đang tải…
    </iframe>
  );
};

export default DocumentTesting;
