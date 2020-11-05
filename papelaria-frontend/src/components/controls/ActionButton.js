import React from 'react'
import { Button, makeStyles } from '@material-ui/core';


export default function ActionButton(props) {

  const {color, children, onClickEvent, startIcon} = props;

  return (
    <Button startIcon={startIcon} color={color} onClick={onClickEvent}>
      {children}
    </Button>
  )
}
