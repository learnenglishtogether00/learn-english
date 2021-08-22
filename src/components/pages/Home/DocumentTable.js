import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

import DataTable from "../../common/DataTable";
import DocumentModalContent from "./DocumentModalContent";
import { DOCUMENT_DATA } from "../../../db/data";
import { sortTestDataByDate } from "../../../utils";

const HEADERS_DATA = [
  {
    key: "name",
    text: "Tiêu đề",
  },
  {
    key: "updatedDate",
    text: "Ngày đăng tải",
  },
];

const useStyles = makeStyles({
  rootModal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperWrap: {
    padding: 30,
    maxWidth: 500,
    border: "none",
  },
});

const DocumentTable = () => {
  const classes = useStyles();
  const [visibleDetailModal, setVisibleDetailModal] = useState(false);
  const [currentRow, setCurrentRow] = useState();

  const handleClickRow = (row) => {
    console.log({ row });
    setCurrentRow(row);
    setVisibleDetailModal(true);
  };

  const handleCloseModal = () => {
    setCurrentRow(null);
    setVisibleDetailModal(false);
  };

  const formatData = (data) => {
    return sortTestDataByDate(data);
  };

  return (
    <Fragment>
      <DataTable
        rows={formatData(DOCUMENT_DATA)}
        headers={HEADERS_DATA}
        title={"Tài Liệu"}
        subTitle={
          "Bạn có thể tìm thấy các tại liệu chia sẻ trên nhóm ở đây. Tài liệu chủ yếu tập trung vào việc ôn luyện thi TOEIC. Cũng như những nội dung hữu ích về Tiếng Anh"
        }
        handleClickRow={handleClickRow}
      />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.rootModal}
        open={visibleDetailModal}
        onClose={handleCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={visibleDetailModal}>
          <Paper elevation={3} classes={{ root: classes.paperWrap }}>
            {currentRow && (
              <DocumentModalContent
                testDetail={currentRow}
                handleCloseModal={handleCloseModal}
              />
            )}
          </Paper>
        </Fade>
      </Modal>
    </Fragment>
  );
};

export default DocumentTable;
