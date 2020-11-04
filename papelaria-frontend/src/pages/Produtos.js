import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/produto";
import { AssessmentIcon } from '@material-ui/icons/Assessment';


function Produtos (props) {

  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    props.getAllProdutos()
  }, [produtos])

  return (
    <div>
      xxxx
    </div>
  )
}

const mapStateToProps = state => ({
  produtoList: state.produto.list
})

const mapActionToProps = {
  getAllProdutos: actions.getAll
}

export default connect(mapStateToProps, mapActionToProps)(Produtos);
