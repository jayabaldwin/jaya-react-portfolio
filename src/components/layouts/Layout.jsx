import LeftLogo from "./LeftLogo.jsx"
import RightSocial from "./RightSocial.jsx"
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { useMediaQuery } from '@mui/material';

// import Box from '@mui/material/Box';

// const Item = styled(Box)(({ theme }) => ({
//   textAlign: 'center',
// }));




export default function Layout({ children }) {
  const isMobile = useMediaQuery('(max-width:900px)');

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
     
        <Grid item={true} xs={0} sm={0} md={1}>
          <LeftLogo />
        </Grid>
  
        <Grid item={true} xs={10} sm={9} md={9} sx={{marginLeft: '12px'}}>
            {children}
        </Grid>
       
        <Grid item={true} xs={0} sm={3} md={2}>
          {isMobile ? ('') : (
          <RightSocial styles={styles.rightSocials} placement={'right'} color={'primary'} background={'transparent'} />)}
        </Grid>
      </Grid>
  );
}

