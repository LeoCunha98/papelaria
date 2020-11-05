import { Dialog, DialogActions, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import Controls from './Controls';

const useStyles = makeStyles({
  dialog: {
    padding: '16px', 
    position: 'absolute',
    top: '40px'
  },
  dialogContent: {
    textAlign: 'center'
  },
  dialogAction: {
    justifyContent: 'center'
  }
})

export default function ConfirmDialog(props) {

  const { confirmDialog, setConfirmDialog} = props;
  const classes = useStyles();

  return (
    <Dialog open={confirmDialog.isOpen} classes={{ paper: classes.dialog }}>
      <DialogTitle>
        <Typography variant="h6">
          {confirmDialog.title}
        </Typography>  
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <Typography variant="subtitle2">
          {confirmDialog.subtitle}
        </Typography>  
      </DialogContent>
      <DialogActions className={classes.dialogAction}>
        <Controls.Button 
          variant="contained" 
          text="Sim" 
          color="secondary"
          onClick={confirmDialog.onConfirm} 
        />
        <Controls.Button 
          variant="contained" 
          text="Não" 
          color="default" 
          onClick={() => setConfirmDialog({  ...confirmDialog, isOpen: false })}/>
      </DialogActions>
    </Dialog>
  )
}
