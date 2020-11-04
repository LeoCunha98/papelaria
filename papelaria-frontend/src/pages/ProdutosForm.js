import React from 'react';
import { Grid } from '@material-ui/core';
import { useForm, Form } from './../components/useForm';
import Controls from '../components/controls/Controls';

const initialFieldValues = {
  nome: "",
  quantidade: 0,
  descricao: "",
  categoria: "",
  codigoBarra: ""
}

const ProdutosForm = (props) => {
    
  const { categorias } = props;

  const {
    values,
    setValues, 
    handleInputChange
  } = useForm(initialFieldValues); 

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            label="Nome do Produto"
            name="nome"
            value={values.nome}
            onChange={handleInputChange} 
          />
          <Controls.Input
            label="Descrição do Produto (marca, modelo, etc)"
            name="descricao"
            value={values.descricao}
            onChange={handleInputChange}
          />
          <Controls.Select 
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleInputChange}
            options={categorias}
          />
        </Grid>
      </Grid>
    </Form>
  )
}

export default ProdutosForm;