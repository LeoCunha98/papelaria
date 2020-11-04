import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

  const {name, label, value, error=null, type="text", onChange, ...other } = props;

  return (
    <TextField autoComplete="off"
      variant="outlined"
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && {error:true,helperText:error})}
    />
  )
}
