import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export default function Produto() {
  
  const rows = [
    createData(10, 159, 6.0, 24, 4.0),
  ];
  

  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  function createData(id, produto, descricao, categoria, quantidade, codigoBarras) {
    return { id, produto, descricao, categoria, quantidade, codigoBarras };
  }
  
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell width={12}>ID</StyledTableCell>
            <StyledTableCell align="right">Produto</StyledTableCell>
            <StyledTableCell align="right">Descrição</StyledTableCell>
            <StyledTableCell align="right">Categoria</StyledTableCell>
            <StyledTableCell align="right">Quantidade</StyledTableCell>
            <StyledTableCell align="right">Código de Barras</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell  component="th" scope="row">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.produto}</StyledTableCell>
              <StyledTableCell align="right">{row.descricao}</StyledTableCell>
              <StyledTableCell align="right">{row.categoria}</StyledTableCell>
              <StyledTableCell align="right">{row.quantidade}</StyledTableCell>
              <StyledTableCell align="right">{row.codigoBarras}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      );
    }
  
