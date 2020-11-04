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
          <Controls.Input
            label="Quantidade de Itens"
            name="quantidade"
            value={values.quantidade}
            onChange={handleInputChange}
          />
          </Grid>
          <Grid item xs={6}>
            <Controls.Select 
              label="Categoria"
              name="categoria"
              value={values.categoria}
              onChange={handleInputChange}
              options={categorias}
            />
            <Controls.Input
              label="Código de Barras"
              name="codigoBarra"
              value={values.codigoBarra}
              onChange={handleInputChange}
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
              />  
            </div>
          </Grid>
      </Grid>
    </Form>
  )
}

export default ProdutosForm;