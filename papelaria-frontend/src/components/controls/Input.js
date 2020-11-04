import React from 'react'
import { TextField } from '@material-ui/core';

export default function Input(props) {

  const {name, label, value, error=null, type="text", onChange} = props;

  return (
    <TextField autoComplete="off"
      variant="outlined"
      label={label}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      {...(error && {error:true,helperText:error})}
    />
  )
}
