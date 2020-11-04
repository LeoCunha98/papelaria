import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core';

export function useForm(initialFieldValues) {

  const [values, setValues] = useState(initialFieldValues);

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

  return (
    <form className={classes.root}>
      {props.children}
    </form>
  )
}

