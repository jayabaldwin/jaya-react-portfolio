import React from "react";
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LayersIcon from '@mui/icons-material/Layers';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SendIcon from '@mui/icons-material/Send';

export default function RightSocial() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="flex-end"
    >
        <Fab color="secondary" aria-label="add">
        <GitHubIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">
        <LinkedInIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">
        <LayersIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">
        <SendIcon />
        </Fab>
        <Fab color="secondary" aria-label="add">
        <SaveAltIcon />
        </Fab>
    </Grid>
  );
}