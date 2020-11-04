import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/produtos";
import AssessmentIcon from '@material-ui/icons/Assessment';
import PageHeader from '../components/PageHeader';
import ProdutosForm from './ProdutosForm';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from '../components/useTable';
import SearchIcon from '@material-ui/icons/Search';
import Input from './../components/controls/Input';


const useStyles = makeStyles({
  pageContent: {
    margin: "32px",
    padding: "24px"
  },
  inputBuscar: {
    width: "100%",
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
  const [filtrarProduto, setFiltrarProduto] = 
      useState({ funcao: (produtos) => { return produtos; }});

  const { 
    TableContainer, 
    TableHead,
    TblPagination,
    dadosPaginados
   } = useTable(produtos, headers, filtrarProduto);

  const handleSearch = (e) => {
    let target = e.target;
    setFiltrarProduto({
      funcao: items => {
        if(target.value){
          return items.filter(item => item.nome.toLowerCase().includes(target.value))
        } else{
          return items;
        }
      }
    })
  }

  return (
    <>
      <PageHeader 
        titulo="Produtos"
        subtitulo="Controle de Estoque"
        icone={<AssessmentIcon fontSize="large"/>} 
      />
      <Paper className={classes.pageContent}>
        {/* <ProdutosForm categorias={categorias}/> */}
        <Toolbar> 
          <Input
            label="Buscar produto"
            className={classes.inputBuscar}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )  
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TableContainer>
          <TableHead />
          <TableBody>
            {
               dadosPaginados().map(produto => (
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
