import React from 'react';
import LeftLogo from "./LeftLogo.jsx"
import RightSocial from "./RightSocial.jsx"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

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
        <Grid item xs={8}>
            {children}
        </Grid>
        {/* Socials sidebar */}
        <Grid item xs={2}>
          <RightSocial />
        </Grid>
      </Grid>
  );
}

