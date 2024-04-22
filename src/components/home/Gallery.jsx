import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
}));

const technologies = [
    'javascript', 
    'nodejs', 
    'expressjs', 
    'react', 
    'materialUI', 
    'bootstrap', 
    'css3', 
    'mongoDB', 
    'mysql', 
    'sequelize', 
    'github'
]

export default function Gallery() {
    return (
      <Grid container={true} sx={{ justifyContent: 'center'}}>
      {technologies.map((tech, index) => (
        <Item key={index} title={tech}>
          <img src={`src/assets/icons/${tech}.png`} alt={tech} 
          style=
          {{ width: '55px', 
             marginTop: '1rem', 
             marginRight: '1rem' }} />
        </Item>
      ))}
    </Grid>
    );
  }
