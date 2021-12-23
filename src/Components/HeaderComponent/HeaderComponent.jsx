import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./HeaderComponent.css";

const HeaderComponent = () => {
  return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar className="header-section">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="header_logo">
                    <a href="/">CO-Q Space Booking</a>
                </Typography>
                <ul className="header_links">
                    <li className="active">Home</li>
                    <li>Page</li>
                    <li>Page</li>
                    <li>Page</li>
                    <li>
                        <Button className="btn btn-primary">Book a flight</Button>
                    </li>
                </ul>
                </Toolbar>
            </AppBar>
        </Box>
  );
}

export default HeaderComponent;