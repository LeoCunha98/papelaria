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
  const { title, children, openPopup, setOpenPopup } = props;
  const classes = useStyles();

  return (
    <Dialog open={openPopup} maxWidth="md" classes={{ paper: classes.dialogWrapper }}>
      <DialogTitle className={classes.dialogTitle}>
      <div style={{ display: 'flex' }}>  
        <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <Controls.ActionButton 
          startIcon={<CloseIcon fontSize="large"/>}
          color="secondary"
          onClickEvent={() => setOpenPopup(false)}
          >
        </Controls.ActionButton>
      </div>
      </DialogTitle>
      <DialogContent dividers>
        {children}
      </DialogContent>
    </Dialog>
  )
}
