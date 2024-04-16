import React from "react";
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    alignContent: 'flex-start',
    height: '90vh', 
    justifyContent: 'space-between',
  },
  logo: {
    width: '100px',
    height: 'auto',
  },
}

export default function LeftLogo() {
  return (
    <Grid
      container
      alignItems="center"
      style={styles.container}
    >
      <img src="src/assets/images/jaya-logo.png" alt="Logo" style={styles.logo} />
      <Fab color="secondary" aria-label="add">
        <KeyboardArrowUpIcon />
      </Fab>
    </Grid>
  );
}
