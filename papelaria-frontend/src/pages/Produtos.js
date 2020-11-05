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
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';
import Popup from '../components/Popup';
import Notificacao from '../components/Notificacao';

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
  },
  iconeVisualizar: {
    paddingLeft: "30px",
    verticalAlign: "bottom",
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  let produtos = props.produtosList;
  const classes = useStyles();
  const [produtoParaEditar, setProdutoParaEditar] = useState(null);
  const [disabledFields, setDisabledFields] = useState(false);
  const [filtrarProduto, setFiltrarProduto] = useState({ funcao: (produtos) => { return produtos; }});
  const [openPopup, setOpenPopup] = useState({ isOpen:false , title:"" });
  const [notificacao, setNotificacao] = useState({ isOpen:false, message:"", type:"" });
  const [confirmDialog, setConfirmDialog] = useState({ isOpen:false, title:"", subtitle:"" });

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
    let ntfMsg = ""
    if(produto.id == null) {
      props.postProduto(produto);
      ntfMsg = "Produto adicionado com sucesso!"
    }
    else {
      props.putProduto(produto);
      ntfMsg = "Produto editado com sucesso!"
    }
    resetForm();
    setProdutoParaEditar(null);
    setOpenPopup({ isOpen: false, title:"" });
    props.getAllProdutos();
    produtos = props.produtosList;
    setNotificacao({
      isOpen: true,
      message: ntfMsg,
      type:"success"
    });
  }

  const openInPopup = (produto, title) => {
    setProdutoParaEditar(produto);
    setOpenPopup({ isOpen: true , title: title})
  }

  const onDelete = (id) => {
      
    setConfirmDialog({
      ...confirmDialog,
      isOpen: false,
    });
    props.deleteProduto(id);
    props.getAllProdutos();
    produtos = props.produtosList;
    setNotificacao({
      isOpen: true,
      message: "Produto removido com sucesso!",
      type: "error"
    });
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
            color="secondary"
            startIcon={<AddIcon />}
            onClick={() => {
              setOpenPopup({ isOpen:true, title: "Adicionar Produto"}); 
              setProdutoParaEditar(null)
              setDisabledFields(false);
            }}
          />
        </Toolbar>
        <TableContainer>
          <TableHead />
          <TableBody>
            {
               dadosPaginados().map(produto => (
                <TableRow key={produto.id}>
                  <TableCell>{produto.id}</TableCell>
                  <TableCell>
                    {produto.nome} 
                    <Controls.ActionButton >
                      {<VisibilityIcon  
                        onClick={() => {
                          openInPopup(produto, "Detalhes do Produto");
                          setDisabledFields(true)
                        }}
                        className={classes.iconeVisualizar}
                      />}
                    </Controls.ActionButton>
                  </TableCell>
                  <TableCell>{produto.quantidade}</TableCell>
                  <TableCell>{produto.categoria}</TableCell>
                  <TableCell>
                    <Controls.ActionButton>
                      <EditIcon 
                        color="primary" 
                        fontSize="small" 
                        onClick={() => {
                          openInPopup(produto, "Editar Produto");
                          setDisabledFields(false)
                        }}
                      />
                    </Controls.ActionButton>
                    <Controls.ActionButton>
                      <CloseIcon 
                        color="secondary" 
                        fontSize="small"
                        onClick={() => 
                          setConfirmDialog({
                            isOpen: true,
                            title: "Tem certeza que deseja excluir este produto?",
                            subtitle: "Você não pode desfazer essa operação",
                            onConfirm: () => { onDelete(produto.id) }
                          })}
                       />
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
      >     
        <ProdutosForm
          disabledFields={disabledFields}
          produtoParaEditar={produtoParaEditar}
          addOuEditar={addOuEditar} 
         />
      </Popup>
      <Notificacao
        notificacao={notificacao}
        setNotificacao={setNotificacao}
      />
      <Controls.ConfirmDialog 
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  )
}

const mapStateToProps = state => ({
  produtosList: state.produtos.list
})

const mapActionToProps = {
  getAllProdutos: actions.getAll,
  postProduto: actions.postItem,
  putProduto: actions.putItem,
  deleteProduto: actions.deleteItem
}

export default connect(mapStateToProps, mapActionToProps)(Produtos);
