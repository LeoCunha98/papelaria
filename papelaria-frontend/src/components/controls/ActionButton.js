import React from 'react'
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
      minWidth: 0,
      margin: "4px"
  }
});

export default function ActionButton(props) {

  const {color, children, onClickEvent } = props;
  const classes = useStyles();

  return (
    <Button 
      className= {classes.root}
      color={color} 
      onClick={onClickEvent}
    >
      {children}
    </Button>
  )
}
