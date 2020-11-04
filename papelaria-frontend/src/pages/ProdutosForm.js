import React, { useState } from 'react';
import { Grid, TextField, makeStyles } from '@material-ui/core';

const initialFieldValues = {
  nome: "",
  quantidade: 0,
  descricao: "",
  categoria: "",
  codigoBarra: ""
}

const useStyles = makeStyles({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: "8px",
    }
  }
});

const ProdutosForm = (props) => {

  const [values, setValues] = useState(initialFieldValues);
  const classes = useStyles();

  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <form className={classes.root}>
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
    </form>
  )
}

export default ProdutosForm;