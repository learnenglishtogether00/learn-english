import React from "react";

import DataTable from "../../common/DataTable";
import { MINI_TEST_DATA } from "../../../db/data";

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

const MiniTestTable = () => {
  return (
    <DataTable
      rows={MINI_TEST_DATA}
      headers={HEADERS_DATA}
      title={"Mini Test"}
      subTitle={
        "Mini Test là một dạng đề mô phỏng đề thi TOEIC, với đầy đủ các cấu trúc của bài thi thực tế. Nhưng số lượng câu sẽ ít đi và độ khó ở mức 400-550 điểm."
      }
    />
  );
};

export default MiniTestTable;
