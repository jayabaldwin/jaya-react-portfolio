import * as React from 'react';
import Grow from '@mui/material/Grow';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectCardContainer() {
  const projects = [/* List of project data */]; // Define your project data here

  return (
    <>
      {projects.map((project, index) => (
        <Grow key={index} in={true} timeout={500 * index}>
          <ProjectCard {...project} /> {/* Spread project data as props */}
        </Grow>
      ))}
    </>
  );
}
