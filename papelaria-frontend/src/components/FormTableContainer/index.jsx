import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import React from 'react';
import PageTitle from '../PageTitle';
import useStyles, { useClasses } from './styles';


const FormTableContainer = ({
    title,
    titleRefresh = 'Atualizar Tabela',
    buttonText,
    disabled,
    children
}) => {
    const styles = useStyles();
    const { openFormButtonLabel, rotateLabel } = useClasses(styles);

    return (
        <>
            <PageTitle title={title} />
            <Paper elevation={3} className={styles.paperContainer}>
                <Box paddingBottom={3} position='relative'>
                        <Button
                            className={styles.openFormButton}
                            classes={{ label: openFormButtonLabel }}
                            color='primary'
                            variant='contained'
                            disabled={disabled}
                        >
                            {buttonText}
                        </Button>
                        <Fab
                            className={styles.openFormFab}
                            color='default'
                            size='small'
                            title={titleRefresh}
                        >
                            <AutorenewIcon />
                        </Fab>
                </Box>
                <Box>{children}</Box>
            </Paper>
        </>
    );
};

export default FormTableContainer;
