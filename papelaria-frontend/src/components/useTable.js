import { 
  Table, 
  TableCell, 
  TableHead as MuiTableHead,
  TablePagination,
  TableRow, 
  makeStyles
} from '@material-ui/core';
import React, { useState } from 'react';

const useStyles = makeStyles({
    table: {
      marginTop: "12px",
      '& thead th': {
        fontWeight: 'bold',
        color: '#d61846',
        backgroundColor: '#ffe6e6'
      },
      '& tbody td': {
        fontWeight: '300',
      },
      '& tbody tr:hover': {
        backgroundColor: "#fffbf2",
        cursor: 'pointer'
      }
    }
})


export default function useTable(dados, headers) {
  const classes = useStyles();

  const pages = [5, 10];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const TableContainer = (props) => (
    <Table className={classes.table}>
      {props.children}
    </Table>
  )

  const TblPagination = () => (
    <TablePagination
      component="div"
      page={page}
      rowsPerPage={rowsPerPage}
      rowsPerPageOptions={pages}
      count={dados.length}
    />
  )

  const TableHead = (props) => (
    <MuiTableHead>
      <TableRow>
        {
          headers.map(header => (
            <TableCell key={header.id}>
              {header.label}
            </TableCell>
          ))
        }
      </TableRow>
    </MuiTableHead>
  )

  return {
    TableContainer,
    TableHead,
    TblPagination
  }

}
