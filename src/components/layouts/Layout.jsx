import LeftLogo from "./LeftLogo.jsx"
import RightSocial from "./RightSocial.jsx"
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';

// const Item = styled(Box)(({ theme }) => ({
//   textAlign: 'center',
// }));




export default function Layout({ children }) {

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
        {/* Logo */}
        <Grid item={true} xs={1} sm={0} md={1}>
            <LeftLogo />
        </Grid>
        {/* Main content */}
        <Grid item={true} xs={10} sm={9} md={9} sx={{marginLeft: '12px'}}>
            {children}
        </Grid>
        {/* Socials sidebar */}
        <Grid item={true} xs={1} sm={3} md={2}>
          <RightSocial styles={styles.rightSocials} placement={'right'} color={'primary'} />
        </Grid>
      </Grid>
  );
}

