import React from 'react'
import { withStyles } from '@material-ui/core/styles'

const style = {
  menuLateral: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      left: '0px',
      width: '320px',
      height: '100%',
      backgroundColor: '#d61846'
  }
};

const MenuLateral = (props) => {
  const { classes } = props;
  
  return (
    <div className={classes.menuLateral}></div>
  )
};

export default withStyles(style)(MenuLateral);
