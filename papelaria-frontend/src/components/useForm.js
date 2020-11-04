import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';

export function useForm(initialFieldValues) {

  const [values, setValues] = useState(initialFieldValues);
  const [errors, setErrors] = useState({});


  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  }

  return { 
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange
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

