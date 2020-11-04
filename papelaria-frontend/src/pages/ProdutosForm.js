import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from './../components/useForm';
import Controls from '../components/controls/Controls';
import { connect } from 'react-redux';
import * as actions from "../redux/actions/produtos";

const initialFieldValues = {
  nome: "",
  quantidade: 0,
  descricao: "",
  categoria: "",
  codigoBarra: ""
}
const ProdutosForm = (props) => {
    
  const { categorias } = props;

  const validacaoCampos = (fieldValues = values) => {
    let temp = { ...errors };
    
    if('nome' in fieldValues){
      temp.nome = fieldValues.nome ? "" : `O campo é obrigatório`
    }
    
    if('descricao' in fieldValues){
      temp.descricao = fieldValues.descricao ? "" : `O campo é obrigatório`
    }

    if('quantidade' in fieldValues){
      temp.quantidade = fieldValues.quantidade ? "" : `O campo é obrigatório`
    }

    if('categoria' in fieldValues){
      temp.categoria = fieldValues.categoria ? "" : `O campo é obrigatório`
    }

    if('codigoBarra' in fieldValues){
      temp.codigoBarra = fieldValues.codigoBarra ? "" : `O campo é obrigatório`
    }

    setErrors({
      ...temp
    })

    if(fieldValues === values)
      return Object.values(temp).every(x => x == "");
  }

  const {
    values,
    setValues, 
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFieldValues, true, validacaoCampos); 


  const handleSubmitForm = (e) => {
    e.preventDefault();
    if(validacaoCampos()){
      props.postProduto(values)
      resetForm()
    }
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Nome do Produto"
            name="nome"
            value={values.nome}
            onChange={handleInputChange}
            error={errors.nome}
          />
          <Controls.Input
            label="Descrição do Produto (marca, modelo, etc)"
            name="descricao"
            value={values.descricao}
            onChange={handleInputChange}
            error={errors.descricao}
          />
          <Controls.Input
            label="Quantidade de Itens"
            name="quantidade"
            type="number"
            value={values.quantidade}
            onChange={handleInputChange}
            error={errors.quantidade}
          />
          </Grid>
          <Grid item xs={6}>
            <Controls.Select 
              label="Categoria"
              name="categoria"
              value={values.categoria}
              onChange={handleInputChange}
              options={categorias}
              error={errors.categoria}
            />
            <Controls.Input
              label="Código de Barras"
              name="codigoBarra"
              type="number"
              value={values.codigoBarra}
              onChange={handleInputChange}
              error={errors.codigoBarra}
            />
            <div>
              <Controls.Button 
                variant="outlined"
                color="secondary"
                text="Enviar"
                size="large"
                type="submit"
              /> 
              <Controls.Button 
                variant="outlined"
                color="default"
                text="Cancelar"
                size="large"
                type="submit"
                onClick={resetForm}
              />  
            </div>
          </Grid>
      </Grid>
    </Form>
  )
}

const mapStateToProps = state => ({
  produtoList: state.produtos.list
})

const mapActionToProps = {
  postProduto: actions.postItem
}

export default connect(mapStateToProps, mapActionToProps)(ProdutosForm);