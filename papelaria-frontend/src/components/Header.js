import { AppBar, Grid, Toolbar, withStyles } from '@material-ui/core'
import React from 'react'

const style = {
  header: {
      backgroundColor: '#d61846'
  }
};

const Header = (props)  => {
  const { classes } = props;

  return (
    <AppBar className={classes.header} position='static'>
      <Toolbar> 
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(style)(Header);
