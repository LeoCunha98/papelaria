import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/produtos";
import AssessmentIcon from '@material-ui/icons/Assessment';
import PageHeader from '../components/PageHeader';


function Produtos (props) {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    props.getAllProdutos()
  }, [produtos])

  return (
    <>
      <PageHeader 
        titulo="Produtos"
        subtitulo="Controle de Estoque"
        icone={<AssessmentIcon fontSize="large"/>} 
      />
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
