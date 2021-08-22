import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

import DataTable from "../../common/DataTable";
import MiniTestModalContent from "./MiniTestModalContent";
import { MINI_TEST_DATA } from "../../../db/data";
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
    minWidth: 800,
    border: "none",
  },
});

const MiniTestTable = () => {
  const classes = useStyles();
  const [visibleDetailModal, setVisibleDetailModal] = useState(false);
  const [currentRow, setCurrentRow] = useState();

  const handleClickRow = (row) => {
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
        rows={formatData(MINI_TEST_DATA)}
        headers={HEADERS_DATA}
        title={"Mini Test"}
        subTitle={
          "Mini Test là một dạng đề mô phỏng đề thi TOEIC, với đầy đủ các cấu trúc của bài thi thực tế. Nhưng số lượng câu sẽ ít đi và độ khó ở mức 400-550 điểm."
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
              <MiniTestModalContent
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

export default MiniTestTable;
