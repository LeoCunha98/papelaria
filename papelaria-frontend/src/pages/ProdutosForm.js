import React, { useEffect } from 'react';
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

const categorias = [
  { id: '1', nome: "Material escolar"},
  { id: '2', nome: "Livros didáticos"},
  { id: '3', nome: "Lápis e Canetas"},
  { id: '4', nome: "Cadernos"},
  { id: '5', nome: "Calculadoras"}
];

const ProdutosForm = (props) => {
    
  const { addOuEditar, produtoParaEditar, disabledFields = false } = props;

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
      return Object.values(temp).every(x => x === "");
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
      addOuEditar(values, resetForm)
    }
  }

  useEffect(() => {
    if(produtoParaEditar != null) {
      setValues({
        ...produtoParaEditar
      })
    }   
  }, [setValues, produtoParaEditar]);

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
            disabled={disabledFields}
          />
          <Controls.Input
            label="Descrição do Produto (marca, modelo, etc)"
            name="descricao"
            value={values.descricao}
            onChange={handleInputChange}
            error={errors.descricao}
            disabled={disabledFields}
          />
          <Controls.Input
            label="Quantidade de Itens"
            name="quantidade"
            type="number"
            value={values.quantidade}
            onChange={handleInputChange}
            error={errors.quantidade}
            disabled={disabledFields}
          />
          </Grid>
          <Grid item xs={6}>
            <Controls.Select 
              label="Categoria"
              name="categoria"
              value={values.categoria}
              onChange={handleInputChange}
              options={categorias}
              disabled={disabledFields}
              error={errors.categoria}
            />
            <Controls.Input
              label="Código de Barras"
              name="codigoBarra"
              type="number"
              value={values.codigoBarra}
              onChange={handleInputChange}
              error={errors.codigoBarra}
              disabled={disabledFields}
            />
            <div>
              <Controls.Button 
                variant="outlined"
                color="secondary"
                text="Enviar"
                size="large"
                type="submit"
                disabled={disabledFields}
              /> 
              <Controls.Button 
                variant="outlined"
                color="default"
                text="Cancelar"
                size="large"
                type="submit"
                disabled={disabledFields}
                onClick={resetForm}
              />  
            </div>
          </Grid>
      </Grid>
    </Form>
  )
}

const mapStateToProps = state => ({
  produtosList: state.produtos.list
})

const mapActionToProps = {
  postProduto: actions.postItem
}

export default connect(mapStateToProps, mapActionToProps)(ProdutosForm);