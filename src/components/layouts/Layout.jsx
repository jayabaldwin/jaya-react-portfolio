import React from 'react';
import LeftLogo from "./LeftLogo.jsx"
import RightSocial from "./RightSocial.jsx"
// import Nav from "./Nav.jsx";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { flexbox } from '@mui/system';

const Item = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

export default function Layout({ children }) {
  return (
      <Grid container spacing={2}>
        {/* Logo */}
        <Grid item xs={2}>
            <LeftLogo />
        </Grid>
        {/* Main content */}
        <Grid container item xs={8}>
            {children}
           
        </Grid>
        {/* Socials sidebar */}
        <Grid item xs={2}>
          <RightSocial />
        </Grid>
      </Grid>
  );
}

