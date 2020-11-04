import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/produtos";
import AssessmentIcon from '@material-ui/icons/Assessment';
import PageHeader from '../components/PageHeader';
import ProdutosForm from './ProdutosForm';
import { Paper, makeStyles } from '@material-ui/core';


const useStyles = makeStyles({
  pageContent: {
    margin: "32px",
    padding: "24px"
  }
});


function Produtos (props) {
  const [produtos, setProdutos] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    props.getAllProdutos()
  }, [])

  return (
    <>
      <PageHeader 
        titulo="Produtos"
        subtitulo="Controle de Estoque"
        icone={<AssessmentIcon fontSize="large"/>} 
      />
      <Paper className={classes.pageContent}>
        <ProdutosForm />
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
