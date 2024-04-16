import React from 'react';
import LeftLogo from "./LeftLogo.jsx"
import RightSocial from "./RightSocial.jsx"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  // color: theme.palette.text.secondary,
}));

export default function Layout({ children }) {
  return (
      <Grid container spacing={2}>
        {/* Nav and logo */}
        <Grid item xs={2}>
            <LeftLogo />
        </Grid>
        {/* Main content */}
        <Grid item xs={8}>
          <Item>Main Content
            {children}
          </Item>
        </Grid>
        {/* Socials sidebar */}
        <Grid item xs={2}>
          <RightSocial />
        </Grid>
      </Grid>
  );
}

