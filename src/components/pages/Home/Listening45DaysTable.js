import React, { Fragment, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

import DataTable from "../../common/DataTable";
import Listening45DaysModalContent from "./Listening45DaysModalContent";
import { LISTENING_45_DAYS_DATA } from "../../../db/data";
import { sortTestDataByDate } from "../../../utils";

const HEADERS_DATA = [
  {
    key: "name",
    text: "Tiêu đề",
  },
  {
    key: "updatedDate",
    text: "Ngày đăng",
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
    maxWidth: 600,
    border: "none",
  },
});

const Listening45DaysTable = () => {
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
    const convertStringToDate = (dateStr) => {
      let [day, month, year] = dateStr.split("/");
      let formatDateStr = `${year}-${month}-${day}`;

      return new Date(formatDateStr);
    };

    const filterData = data.filter((item) => {
      const updateDate = convertStringToDate(item.updatedDate);
      return updateDate <= new Date();
    });

    return sortTestDataByDate(filterData);
  };

  return (
    <Fragment>
      <DataTable
        rows={formatData(LISTENING_45_DAYS_DATA)}
        headers={HEADERS_DATA}
        title={"Listening 45 Days"}
        subTitle={
          "Đây là khóa học luyện nghe trong vòng 45 ngày, với lộ trình đã được thiết kế sẵn một cách bài bản."
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
              <Listening45DaysModalContent
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

export default Listening45DaysTable;
