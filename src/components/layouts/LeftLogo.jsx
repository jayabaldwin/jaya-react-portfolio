import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Navigation from "./Nav.jsx";
import { Link as ScrollLink } from 'react-scroll';
import { useLocation } from "react-router-dom";
import { useMediaQuery } from '@mui/material';


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    height: '90vh', 
    justifyContent: 'space-between',
  },
  logo: {
    width: '120px',
    height: 'auto',
    position: 'fixed'
  },
  up: {
    background: 'transparent',
    position: 'fixed',
    top: '87vh'
  }
}

export default function LeftLogo() {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const isMobile = useMediaQuery('(max-width:900px)');


  return (
    <Grid
      container
      style={styles.container}
    >
      {/* Logo */}
      {!isMobile ? (
        <img src="src/assets/images/jaya-logo.png" alt="Logo" style={styles.logo} />) : ('')}
      {/* Nav */}
      <Navigation style={styles.nav}/>
      {/* Return to top icon if not on contact page */}
      {location !== "Contact" ? (
        <ScrollLink to="home" spy={true} smooth={true} offset={-75} duration={500}>
          <Fab 
          color="primary" 
          aria-label="up"
          style={styles.up}
          >
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollLink>) : 
        ('')}
    </Grid>
  );
}
