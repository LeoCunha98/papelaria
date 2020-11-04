import { AppBar, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles ({
  root: {
      backgroundColor: '#FFF',
      transform: 'translateZ(0)'
  },
  '& .MuiInputBase-root': {
    width: '100%'
  },
  buscaInput: {
    opacity: '0.6',
    padding: '0px 8px',
    fontSize: '0.8rem',
    '& .MuiSvgIcon-root': {
      marginRight: '8px'
    }
  },
});

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.root} position='static'>
      <Toolbar> 
        <InputBase className={classes.buscaInput}
          placeholder="Buscar produto..."
          startAdornment={<SearchIcon fontSize="small"/>}
        />
      </Toolbar>
    </AppBar>
  )
}