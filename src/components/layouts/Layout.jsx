import LeftLogo from "./LeftLogo.jsx"
import RightSocial from "./RightSocial.jsx"
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Item = styled(Box)(({ theme }) => ({
  textAlign: 'center',
}));

export default function Layout({ children }) {
  return (
      <Grid container={true} spacing={2}>
        {/* Logo */}
        <Grid item={true} xs={2}>
            <LeftLogo />
        </Grid>
        {/* Main content */}
        <Grid item={true} xs={8}>
            {children}
        </Grid>
        {/* Socials sidebar */}
        <Grid item={true} xs={2}>
          <RightSocial />
        </Grid>
      </Grid>
  );
}

