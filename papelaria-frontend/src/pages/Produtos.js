import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/produtos";
import AssessmentIcon from '@material-ui/icons/Assessment';
import PageHeader from '../components/PageHeader';
import ProdutosForm from './ProdutosForm';
import { Paper, makeStyles, TableBody, TableRow, TableCell, Toolbar, InputAdornment } from '@material-ui/core';
import useTable from '../components/useTable';
import Controls from './../components/controls/Controls';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import Popup from '../components/Popup';

const useStyles = makeStyles({
  pageContent: {
    margin: "32px",
    padding: "24px"
  },
  inputBuscar: {
    width: "65%",
  },
  botaoAdicionar: {
    position: 'absolute',
    right: "10px",

  }
});

const headers = [
  { id:'id', label:'Identificador' },
  { id:'nome', label: 'Nome do Produto' },
  { id:'quantidade', label: 'Quantidade de Itens (unid.)' },
  { id:'categoria', label:'Categoria do Produto' },
  { id:'acoes', label: 'Ações' },
  
]

function Produtos (props) {
  
  useEffect(() => {
    props.getAllProdutos()
  }, [])

  let produtos = props.produtosList;
  const classes = useStyles();
  const [produtoParaEditar, setProdutoParaEditar] = useState(null);
  const [filtrarProduto, setFiltrarProduto] = useState({ funcao: (produtos) => { return produtos; }});
  const [openPopup, setOpenPopup] = useState(false);

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
        } else {
          return items;
        }
      }
    })
  }

  const addOuEditar = (produto, resetForm) => {
    props.postProduto(produto);
    resetForm();
    setOpenPopup(false);
    props.getAllProdutos();
    produtos = props.produtosList;
  }

  const openInPopup = (produto) => {
    setProdutoParaEditar(produto);
    setOpenPopup(true)
  }

  return (
    <>
      <PageHeader 
        titulo="Produtos"
        subtitulo="Controle de Estoque"
        icone={<AssessmentIcon fontSize="large"/>} 
      />
      <Paper className={classes.pageContent}>
        <Toolbar> 
          <Controls.Input
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
          <Controls.Button
            className={classes.botaoAdicionar}
            text="Novo Produto"
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenPopup(true)}
          />
        </Toolbar>
        <TableContainer>
          <TableHead />
          <TableBody>
            {
               dadosPaginados().map(produto => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.id}</TableCell>
                  <TableCell>{produto.nome}</TableCell>
                  <TableCell>{produto.quantidade}</TableCell>
                  <TableCell>{produto.categoria}</TableCell>
                  <TableCell>
                    <Controls.ActionButton>
                      <EditIcon color="primary" fontSize="small" onClick={() => {openInPopup(produto)}}/>
                    </Controls.ActionButton>
                    <Controls.ActionButton>
                      <CloseIcon color="secondary" fontSize="small"/>
                    </Controls.ActionButton>
                  </TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </TableContainer>
        <TblPagination />
      </Paper>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Adicionar Produto"
      >     
        <ProdutosForm
          produtoParaEditar={produtoParaEditar}
          addOuEditar={addOuEditar} 
         />
      </Popup>
    </>
  )
}

const mapStateToProps = state => ({
  produtosList: state.produtos.list
})

const mapActionToProps = {
  getAllProdutos: actions.getAll,
  postProduto: actions.postItem
}

export default connect(mapStateToProps, mapActionToProps)(Produtos);
