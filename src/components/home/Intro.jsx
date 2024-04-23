import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const Item = styled('div')(() => ({
  backgroundColor: 'transparent',
  marginTop: '12rem',
  marginBottom: '18rem'
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
      marginLeft: '5px'
    }
}

export default function Intro() {
  const handleConnectClick = () => {
    window.location.href = 'mailto:jayastarrbaldwin@gmail.com';
  };

  return (
    <Grid container={true} id="home" spacing={2}>
      <Grid xs={8}>
        <Item sx={{ textAlign: 'left' }}>
          <h2>Jaya Baldwin</h2>
          <h1>Web +</h1>
          <h1 style={styles.dev}>Developer</h1>
          <h3 style={styles.connect} onClick={handleConnectClick}>
            Let's connect 
            <ArrowCircleRightOutlinedIcon fontSize='medium' style={styles.arrow} />
          </h3>
        </Item>
      </Grid>
    </Grid>
  );
}
