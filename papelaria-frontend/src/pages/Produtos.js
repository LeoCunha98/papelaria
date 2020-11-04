import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/produtos";
import AssessmentIcon from '@material-ui/icons/Assessment';
import PageHeader from '../components/PageHeader';
import ProdutosForm from './ProdutosForm';
import { Paper, makeStyles, TableBody, TableRow, TableCell } from '@material-ui/core';
import useTable from '../components/useTable';


const useStyles = makeStyles({
  pageContent: {
    margin: "32px",
    padding: "24px"
  }
});


function Produtos (props) {
  
  useEffect(() => {
    props.getAllProdutos()
  }, [])


  let categorias = [
    { id: '1', nome: "Material escolar"},
    { id: '2', nome: "Livros didáticos"},
    { id: '3', nome: "Lápis e Canetas"}
  ];

  

  const classes = useStyles();

  const headers = [
    { id:'nome', label: 'Nome do Produto' },
    { id:'quantidade', label: 'Quantidade de Itens (unid.)' },
    { id:'categoria', label:'Categoria do Produto' },
  ]
  const produtos = props.produtoList;

  const { 
    TableContainer, 
    TableHead,
    TblPagination
   } = useTable(produtos, headers);

  return (
    <>
      <PageHeader 
        titulo="Produtos"
        subtitulo="Controle de Estoque"
        icone={<AssessmentIcon fontSize="large"/>} 
      />
      <Paper className={classes.pageContent}>
        {/* <ProdutosForm categorias={categorias}/> */}
        <TableContainer>
          <TableHead />
          <TableBody>
            {
               produtos.map(produto => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.quantidade}</TableCell>
                  <TableCell>{produto.categoria}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TableContainer>
        <TblPagination />
      </Paper>
    </>
  )
}

const mapStateToProps = state => ({
  produtoList: state.produtos.list
})

const mapActionToProps = {
  getAllProdutos: actions.getAll
}

export default connect(mapStateToProps, mapActionToProps)(Produtos);
