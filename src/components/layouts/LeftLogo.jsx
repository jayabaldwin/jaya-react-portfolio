import React from "react";
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function LeftLogo() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="flex-start"
    >
        <Fab color="secondary" aria-label="add">
        <GitHubIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">
        <LinkedInIcon />
        </Fab>
    </Grid>
  );
}