import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import Chip from "@material-ui/core/Chip";

import TablePaginationActions from "./TablePaginationActions";
import { checkIsTestComplete } from "../../utils";

const useStyles = makeStyles({
  paperWrap: {
    padding: 30,
  },
  table: {},
  rootHeaderRow: {
    textTransform: "capitalize",
  },
  rootRow: {
    textTransform: "capitalize",
  },
  hoverRow: {
    cursor: "pointer",
  },
  completeChip: {
    backgroundColor: "#5cb85c",
    color: "white",
  },
});

const DataTable = (props) => {
  const classes = useStyles();
  const { title, subTitle, headers, rows, handleClickRow } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const onClickRow = (row) => {
    handleClickRow(row);
  };

  return (
    <Paper classes={{ root: classes.paperWrap }} elevation={3}>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        {subTitle}
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow
              classes={{
                root: classes.rootHeaderRow,
              }}
            >
              {Array.isArray(headers) &&
                headers.map((header, index) => (
                  <TableCell key={index}>{header.text}</TableCell>
                ))}
              <TableCell align={"center"}>Trạng Thái</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(rows) &&
              (rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row, rowIndex) => (
                <TableRow
                  key={rowIndex}
                  classes={{
                    hover: classes.hoverRow,
                    root: classes.rootRow,
                  }}
                  hover
                  onClick={() => {
                    onClickRow(row);
                  }}
                >
                  {Array.isArray(headers) &&
                    headers.map((header, index) => (
                      <TableCell key={index} component="th" scope="row">
                        {row[header.key]}
                      </TableCell>
                    ))}
                  <TableCell align={"center"} component="th" scope="row">
                    <Chip
                      size="small"
                      className={
                        checkIsTestComplete(row.id) && classes.completeChip
                      }
                      label={
                        checkIsTestComplete(row.id)
                          ? "hoàn thành"
                          : "chưa hoàn thành"
                      }
                    />
                  </TableCell>
                </TableRow>
              ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                colSpan={3}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DataTable;
