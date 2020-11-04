import React from 'react'
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    margin: "4px",
  }
})


export default function Button(props) {
  const { text, size, color, onClick, variant, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      classes={{root:classes.root}}
      variant={variant}
      size={size}
      color={color}
      onClick={onClick}
      {...other}
    >
      {text}
    </MuiButton>
  )
}

