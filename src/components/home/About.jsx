import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

const Item = styled('div')(({ theme }) => ({
  background: 'transparent',
  padding: theme.spacing(1),
  textAlign: 'left',
}));

function AboutMe() {
  return (
    <>
    <h2>About Me</h2>
    <p>With a background rich in communication and interpersonal skills, complemented by my energetic personality, I thrive in collaborative environments. As a highly detail-oriented individual, I ensure precision and accuracy in all my work, committed to delivering high-quality outcomes while adapting to new challenges. My multitasking capabilities and communication skills have proven vital in navigating the fast-paced demands of my current industry and I excel in resolving customer issues with empathy and professionalism.</p>
    <br/>
    <p>Transitioning into web development, I've completed a full-stack bootcamp course through the University of Sydney and edX, solidifying my skills in JavaScript and the MERN stack. While that is my current focus, I'm open to expanding my skill set to meet the needs of any project or team. I'm incredibly excited to apply my skills, expand my knowledge and gain as much experience as possible, to grow with your company and ensure I become an indispensable asset to your business.</p>
  </>)

} 

export default function About() {
  return (
      <Grid container spacing={2}>
        <Grid xs={8}>
          <Item><AboutMe/></Item>
        </Grid>
        <Grid xs={4}>
          <Item>
            <img src="src/assets/images/profile-image.png" alt="Profile Image" style={{ width: '450px', marginTop: '3rem' }} />
          </Item>
        </Grid>
      </Grid>
  );
}