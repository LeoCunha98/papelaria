import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';

export function useForm(initialFieldValues, validateOnChange=false, validacaoCampos) {

  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});


  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
    if(validateOnChange){
      validacaoCampos({[name]: value})
    }
  }

  const resetForm = () => {
    setValues(initialFieldValues);
    setErrors({});
  } 

  return { 
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  }
}

const useStyles = makeStyles({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: "8px",
    }
  }
});

export function Form(props) {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form className={classes.root} {...other} autoComplete="off">
      {props.children}
    </form>
  )
}

