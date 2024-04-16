import React from "react";
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LayersIcon from '@mui/icons-material/Layers';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';

export default function RightSocial() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="flex-end"
      sx={{
        position: 'fixed',
        top: '50%', // Adjust top position as needed
        right: '20px', // Adjust right position as needed
        transform: 'translateY(-50%)', // Center vertically
        zIndex: 1000, // Ensure it's above other content
        '& > *': { my: 1 } // Add spacing between items
      }}
    >
      <Tooltip title='GitHub' placement="right-start" arrow>
        <Fab color="secondary" aria-label="add">
        <GitHubIcon />
        </Fab>
      </Tooltip>

      <Tooltip title='LinkedIn' placement="right-start" arrow>
        <Fab color="secondary" aria-label="add">
        <LinkedInIcon />
        </Fab>
      </Tooltip>

      <Tooltip title='Stack Overflow' placement="right-start" arrow>
        <Fab color="secondary" aria-label="add">
        <LayersIcon />
        </Fab>
      </Tooltip>

      <Tooltip title='Email' placement="right-start" arrow>
        <Fab color="secondary" aria-label="add">
        <SendIcon />
        </Fab>
      </Tooltip>

      <Tooltip title='Resume' placement="right-start" arrow>
        <Fab color="secondary" aria-label="add">
        <SaveAltIcon />
        </Fab>
      </Tooltip>
    </Grid>
  );
}