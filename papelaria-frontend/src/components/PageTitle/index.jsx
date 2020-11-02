import React from 'react';
import { Box } from '@material-ui/core';

const PageTitle = ({ title }) => {
    return (
        <Box display='flex' alignItems='center' justifyContent='center' marginBottom='35px' width='100%'>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                textAlign='center'
                width='auto'
            >
                <h2 style={{ textTransform: 'uppercase', fontSize: 24 }}>{title}</h2>
            </Box>
        </Box>
    );
};

export default PageTitle;