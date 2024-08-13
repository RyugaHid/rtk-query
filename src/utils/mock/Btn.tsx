import React from 'react';
import { Button } from '@mui/material';
const Btn = ({ children, variant, type, onClick }: any) => {
    return (
        <Button sx={{ color: '#fff' }} variant={variant} type={type} onClick={onClick}>
            {children}
        </Button>
    );
};
export default Btn;
