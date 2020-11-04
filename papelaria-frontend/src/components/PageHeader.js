import { Card, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  root: {
      backgroundColor: '#fdfdff'
  },
  pageHeader:{
      padding: "32px",
      display:'flex',
      marginBottom:"16px"
  },
  pageIcon:{
      display:'inline-block',
      padding: "16px",
      color:'#d61846'
  },
  pageTitle:{
      paddingLeft:"32px"
  }
})

export default function PageHeader(props) {

  const {titulo, subtitulo, icone} = props;
  const classes = useStyles();
  
  return (
    <Paper elevation={0} square className={classes.root}> 
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>
          {icone}
        </Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6" component="div">
              {titulo}
              <Typography variant="subtitle2"component="div">
                {subtitulo}
              </Typography>
          </Typography>
        </div>
      </div>
    </Paper>
  )
}
