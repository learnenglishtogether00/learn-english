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

import TablePaginationActions from "./TablePaginationActions";

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
});

const DataTable = (props) => {
  const classes = useStyles();
  const { title, subTitle, headers, rows } = props;

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
    console.log({ row });
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
                  <TableCell
                    key={index}
                    align={index === headers.length - 1 ? "right" : "left"}
                  >
                    {header.text}
                  </TableCell>
                ))}
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
                      <TableCell
                        key={index}
                        align={index === headers.length - 1 ? "right" : "left"}
                        component="th"
                        scope="row"
                      >
                        {row[header.key]}
                      </TableCell>
                    ))}
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
