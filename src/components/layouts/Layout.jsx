import LeftLogo from "./LeftLogo.jsx"
import RightSocial from "./RightSocial.jsx"
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

export default function Layout({ children }) {
  const isMobile = useMediaQuery('(max-width:700px)');

  const styles = {
    rightSocials: {
      display: 'flex',
      flexDirection: 'column',
      position: 'fixed',
      right: '50px',
      top: '25vh',
    }
  }

  return (
      <Grid container={true} spacing={2}>
     
        <Grid item={true} xs={0.5} sm={0.5} md={1}>
          <LeftLogo />
        </Grid>
  
        <Grid item={true} xs={10.5} sm={9.5} md={9}>
            {children}
        </Grid>
       
        <Grid item={true} xs={0} sm={2} md={2}>
          {isMobile ? ('') : (
          <RightSocial styles={styles.rightSocials} placement={'right'} color={'primary'} background={'transparent'} />)}
        </Grid>
      </Grid>
  );
}

