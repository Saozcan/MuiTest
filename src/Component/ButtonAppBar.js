import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ButtonAppBar() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" style={{display: "flex", alignItems: "center"}}>
                <Toolbar style={{
                    width: "80%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}>
                    <Typography variant="h6" component="div">
                        Mental
                    </Typography>
                    <Typography style={{marginLeft: "100px"}}>
                        SÜREÇ TAKİP SİSTEMİ
                    </Typography>
                    <div>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Login</Button>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
