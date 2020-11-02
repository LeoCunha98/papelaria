import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import Paper from '@material-ui/core/Paper';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import React from 'react';
import PageTitle from '../PageTitle';
import useStyles, { useClasses } from './styles';


const FormTableContainer = ({
    children,
    isLoading,
    title,
    titleRefresh = 'Atualizar Tabela',
    buttonText,
    openFormCallback,
    disabled,
    refreshCallback
}) => {
    const styles = useStyles();
    const { openFormButtonLabel, rotateLabel } = useClasses(styles);

    return (
        <>
            <PageTitle title={title} />
            <Paper elevation={3} className={styles.paperContainer}>
                <Box paddingBottom={3} position='relative'>
                    {openFormCallback && (
                        <Button
                            className={styles.openFormButton}
                            classes={{ label: openFormButtonLabel }}
                            color='primary'
                            variant='contained'
                            onClick={() => openFormCallback()}
                            disabled={disabled}
                        >
                            {buttonText}
                        </Button>
                    )}
                    {refreshCallback && (
                        <Fab
                            className={styles.openFormFab}
                            onClick={() => refreshCallback()}
                            color='default'
                            size='small'
                            classes={{ label: isLoading ? rotateLabel : undefined }}
                            title={titleRefresh}
                        >
                            <AutorenewIcon />
                        </Fab>
                    )}
                </Box>
                <Box>{children}</Box>
            </Paper>
        </>
    );
};

export default FormTableContainer;
