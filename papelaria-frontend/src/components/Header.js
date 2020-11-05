import { AppBar, makeStyles } from '@material-ui/core'
import React from 'react';

const useStyles = makeStyles ({
  root: {
      backgroundColor: '#d61846',
      transform: 'translateZ(0)',
      height: "30px",

  }
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position='static' />
  )
}