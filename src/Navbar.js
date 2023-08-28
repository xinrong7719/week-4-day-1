import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Website
                </Typography>
                <Button color="inherit">Home</Button>
                <Button color="inherit">About Us</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
