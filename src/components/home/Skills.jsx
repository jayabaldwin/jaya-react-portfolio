import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import Gallery from '../home/Gallery.jsx'

const Item = styled('div')(({ theme }) => ({
  background: 'transparent',
  padding: theme.spacing(1),
  textAlign: 'center'
}));

function SkillsText() {
  return (
    <>
    <h2>Skills & Technologies</h2>
    <p>Transitioning into web development, I've completed a full-stack bootcamp course through the University of Sydney and edX, solidifying my skills in JavaScript and the MERN stack. While that is my current focus, I'm open to expanding my skill set to meet the needs of any project or team. I'm incredibly excited to apply my skills, expand my knowledge and gain as much experience as possible, to grow with your company and ensure I become an indispensable asset to your business.</p>
  </>)

} 

export default function Skills() {
  return (
      <Grid container={true} sx={{ display: 'column', mb: '5rem', justifyContent: 'center'}} spacing={2} >
        <Grid>
          <Item><SkillsText/></Item>
        </Grid>
        <Grid>
          <Gallery />
        </Grid>
      </Grid>
  );
}