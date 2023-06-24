import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";


const Header: React.FC = () => {
    return (
        <AppBar position="static" sx={{ marginBottom: '50px' }}>
        <h1>Streamer Spotlight</h1>
            <Toolbar>
                <Typography variant="h6" color="inherit">
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
