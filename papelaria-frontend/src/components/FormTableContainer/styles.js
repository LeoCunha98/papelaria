import { makeStyles } from '@material-ui/core/styles';

export const useStyles = () => {
    const styles = makeStyles(() => ({
        paperContainer: {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
            borderRadius: 5,
            padding: 40
        },
        openFormButton: {
            float: 'right',
            width: 150,
            minHeight: 40,
            marginRight: 20
        },
        openFormButtonLabel: {
            padding: '0px 5px',
            lineHeight: '1em',
            fontSize: 14,
            fontWeight: 'bold'
        },
        openFormFab: {
            float: 'right',
            marginRight: 20
        },
        rotateLabel: {
            animation: '$rotation 2s infinite linear'
        },
        '@keyframes rotation': {
            from: {
                transform: 'rotate(0deg)'
            },
            to: {
                transform: 'rotate(359deg)'
            }
        }
    }));
    return styles();
};

export const useClasses = (styles) => {
    const classes = {
        openFormButtonLabel: styles.openFormButtonLabel,
        rotateLabel: styles.rotateLabel
    };

    return classes;
};

export default useStyles;
