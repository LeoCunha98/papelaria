import { Snackbar, makeStyles } from '@material-ui/core';
import React from 'react'
import { Alert } from '@material-ui/lab'

const useStyles = makeStyles({
  root: {
    top: "81px",
  }
})

export default function Notificacao(props) {
  
  const { notificacao, setNotificacao } = props;
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if(reason === 'clickaway'){
      return;
    }
    setNotificacao({
      ...notificacao,
      isOpen: false,
    })
  }

  return (
      <Snackbar
        className={classes.root}
        open={notificacao.isOpen}
        autoHideDuration={3000}
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        onClose={handleClose}
      >
        <Alert 
          onClose={handleClose}
          severity={notificacao.type}
        >
          {notificacao.message}
        </Alert>
      </Snackbar>
  )
}
