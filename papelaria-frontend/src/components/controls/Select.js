import { FormControl, MenuItem, InputLabel, Select as MuiSelect, FormHelperText } from '@material-ui/core';
import React from 'react';

export default function Select(props) {

  const {name, label, value, error=null, onChange, options, disabled} = props;

  return (
    <FormControl 
      variant="outlined"
      {...(error && {error:true})}
    >
      <InputLabel>{label}</InputLabel>
        <MuiSelect 
          label={label} 
          name={name} 
          value={value} 
          onChange={onChange} 
          disabled={disabled}
        >
          {
            options.map(item => 
              <MenuItem key={item.id} value={item.nome}>{item.nome}</MenuItem>
            )
          }
        </MuiSelect>
        {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>

  )
}
