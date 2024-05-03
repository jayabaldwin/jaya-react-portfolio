import Grid from "@mui/system/Unstable_Grid";
import { lazy } from "react";
import styled from "@mui/system/styled";
const Lottie = lazy(() => import("lottie-react")); // dynamic import
import animationData from "../../utils/rightArrowAnimate.json";

const Item = styled('div')(() => ({
  backgroundColor: 'transparent',
}));

const styles = {
    dev: {
        marginTop: '-30px'
    },
    connect: {
      display: 'flex',
      cursor: 'pointer',
      alignItems: 'center',
    },
    arrow: {
      width: '50px'
    }
}

export default function Intro() {
  const handleConnectClick = () => {
    window.location.href = 'mailto:jayastarrbaldwin@gmail.com';
  };

  return (
    <Grid container={true} id="home" spacing={2}>
      <Grid xs={12} sm={10} md={8}>
        <Item className='intro' sx={{ textAlign: 'left' }}>
          <h2 className='name'>Jaya Baldwin</h2>
          <h1>Web +</h1>
          <h1 style={styles.dev}>Developer</h1>
          <h3 style={styles.connect} onClick={handleConnectClick}>
            Let's connect 
            {/* <ArrowCircleRightOutlinedIcon fontSize='medium' style={styles.arrow} /> */}
            <Lottie animationData={animationData} style={styles.arrow}/>
          </h3>
        </Item>
      </Grid>
    </Grid>
  );
}
