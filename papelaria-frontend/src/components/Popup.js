import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Controls from './controls/Controls';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
  dialogWrapper: {
      padding: "16px",
      position: 'absolute',
      top: "40px"
  },
  dialogTitle: {
      paddingRight: "0px"
  }
})

export default function Popup(props) {
  const { children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog open={openPopup.isOpen} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
      <div style={{ display: 'flex' }}>  
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          {openPopup.title}
        </Typography>
        <Controls.ActionButton 
          color="secondary"
          onClickEvent={() => setOpenPopup(false)}
          >
          <CloseIcon fontSize="large"/>
        </Controls.ActionButton>
      </div>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  )
}
