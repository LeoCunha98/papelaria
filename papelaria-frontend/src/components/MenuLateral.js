import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Header from './Header';

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
