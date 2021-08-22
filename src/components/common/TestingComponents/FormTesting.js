import React from "react";

const FormTesting = (props) => {
  const { formURL } = props;

  return (
    <iframe
      title="Form Frame"
      id="formFrame"
      width="100%"
      height="580"
      frameborder="0"
      marginHeight="0"
      marginWidth="0"
      src={formURL}
    >
      Đang tải…
    </iframe>
  );
};

export default FormTesting;
