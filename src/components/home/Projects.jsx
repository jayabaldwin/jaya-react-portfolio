import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import ProjectCard from '../home/ProjectCard.jsx'

const Item = styled('div')(({ theme }) => ({
  background: 'transparent',
  padding: theme.spacing(1),
}));

function ProjectText() {
  return (
    <>
    <h2>Projects</h2>
    <p>Throughout the duration of this course I've built an array of applications, both solo and within a team. We were challenged with building primarily front-end, back-end and start-to-finish full-stack projects. </p>
  </>)

}; 

const projectCards = [{}];

export default function Projects() {
  return (
      <Grid container sx={{ display: 'column', mb: '5rem'}} spacing={2} >
        <Grid>
          <Item sx={{mb: '3rem'}}><ProjectText/></Item>
        </Grid>
        <Grid container>
          {/* {projectCards.map((card, index) => (
            <ProjectCard />
          ))} */}
          <ProjectCard />
        </Grid>
      </Grid>
  );
};