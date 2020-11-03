import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/produtos"

const Produtos = (props) => {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    props.getAllProdutos()
  }, [produtos])

  return (<div>PRODUTOS</div>)
}

const mapStateToProps = state => ({
  produtoList: state.produtos.list
})

const mapActionToProps = {
  getAllProdutos: actions.getAll
}

export default connect(mapStateToProps, mapActionToProps)(Produtos);
