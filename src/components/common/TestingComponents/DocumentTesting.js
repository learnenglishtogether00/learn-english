import React from "react";

const DocumentTesting = (props) => {
  const { testData } = props;

  return (
    <iframe
      title="Doc Frame"
      id="docFrame"
      width="100%"
      height="800"
      frameborder="0"
      marginheight="0"
      marginwidth="0"
      src={testData.docURL}
    >
      Đang tải…
    </iframe>
  );
};

export default DocumentTesting;
