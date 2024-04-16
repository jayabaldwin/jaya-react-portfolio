import React from "react";
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '90vh', // Fill the viewport height
    justifyContent: 'space-between', // Space between items
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
  fab: {
    marginTop: 'auto', // Push FAB buttons to bottom
  },
};

export default function LeftLogo() {
  return (
    <Grid
      container
      direction="column"
      alignItems="flex-start"
      style={styles.container}
    >
      <img src="src/assets/images/jaya-logo.png" alt="Logo" style={styles.logo} />
      <Fab color="secondary" aria-label="add" style={styles.fab}>
        <GitHubIcon />
      </Fab>
      <Fab color="secondary" aria-label="add" style={styles.fab}>
        <KeyboardArrowUpIcon />
      </Fab>
    </Grid>
  );
}
