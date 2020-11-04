import React, { useState } from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';
import { useForm, Form } from './../components/useForm';

const initialFieldValues = {
  nome: "",
  quantidade: 0,
  descricao: "",
  categoria: "",
  codigoBarra: ""
}



const ProdutosForm = (props) => {
    
  const {
    values,
    setValues, 
    handleInputChange
  } = useForm(initialFieldValues); 

  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <TextField 
            variant="outlined"
            label="Nome do Produto"
            name="nome"
            value={values.nome}
            onChange={handleInputChange}
          />
          <TextField 
            variant="outlined"
            label="Descrição do Produto (marca/modelo, etc)"
            name="descricao"
            value={values.descricao}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  )
}

export default ProdutosForm;