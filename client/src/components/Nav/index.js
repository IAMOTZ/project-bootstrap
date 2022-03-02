import React from 'react';
import { AppBar, Typography } from '@mui/material';
import { Link } from "react-router-dom";
import { NavContent } from './styled';

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ padding: '10px 0 10px 20px' }}>
      <NavContent>
        <Typography sx={{ margin: '10px 0 10px 20px', textDecoration: 'none' }} variant="h5" color="inherit" component={Link} to="/devices">
          Main Logo
        </Typography>
      </NavContent>
    </AppBar>
  );
}

export default NavBar;