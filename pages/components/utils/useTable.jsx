import React, { useState, useEffect } from "react";

import Table from "@material-ui/core/table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TablePagination from "@material-ui/core/TablePagination";
import { makeStyles } from "@material-ui/core/Styles";

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),

    "& thead th": {
      fontWeight: "600",
      fontSize: "1.5rem",
      color: "#fff",
      height: "2rem",
      background: "#4a8ba8",
    },

    "& tbody td": {
      fontWeight: "300",
      fontSize: "1.1rem",
    },
    "& tbody tr:hover": {
      cursor: "pointer",
      fontSize: "1.8rem",
      background: "#5e9fbc",
    },
  },
}));

const useTable = (records, columns, filterFn) => {
  const classes = useStyles();

  const pages = [5, 20, 30, 50];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(pages[0]);

  const handleChange = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const TblContainer = (props) => (
    <Table className={classes.table}>{props.children}</Table>
  );

  const TblHead = (props) => {
    const handleSortRequest = (cellId) => {
      const isAsc = orderBy === cellId && order === "asc";
      setOrder(isAsc ? "desc" : "asc");
      sortOrderBy(cellId);
    };
    return (
      <TableHead>
        <TableRow>
          {columns.map((item) => (
            // <TableCell key={item.id}>{item.label}</TableCell>
            <TableCell
              key={item.id}
              sortDirection={orderBy === item.id ? order : false}
            >
              {item.disableSorting ? (
                item.label
              ) : (
                <TableSortLabel
                  active={orderBy === item.id}
                  direction={orderBy === item.id ? order : "asc"}
                  onClick={() => {
                    handleSortRequest(item.id);
                  }}
                >
                  {item.rankName}
                </TableSortLabel>
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    );
  };

  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPageOptions={pages}
      rowsPerPage={rowsPerPage}
      count={records.length}
      onChangePage={handleChange}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );

  const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator((a[0], b[0]));
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  };

  const getComparator = (order, orderBy) => {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  };

  const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  };
  const recordsAfterPagingAndSorting = () => {
    return stableSort(
      filterFn.fn(records),
      getComparator(order, orderBy)
    ).slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  };

  return {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagingAndSorting,
  };
};
export default useTable;
