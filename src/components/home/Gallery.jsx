import * as React from 'react';
import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';

const Item = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  align: 'center',
}));

const technologies = [
    'javascript', 
    'jquery', 
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
      <Grid container>
      {technologies.map((tech, index) => (
        <Item key={index} title={tech}>
          <img src={`src/assets/icons/${tech}.png`} alt={tech} style={{ width: '50px', marginTop: '1rem', marginRight: '1rem' }} />
        </Item>
      ))}
    </Grid>
    );
  }


// const technologies = [
//     {
//         image: 'javascript'
//     },
//     {
//         image: 'jquery'
//     },
//     {
//         image: 'nodejs'
//     },
//     {
//         image: 'expressjs'
//     },
//     {
//         image: 'react'
//     },
//     {
//         image: 'materialUI'
//     },
//     {
//         image: 'bootstrap'
//     },
//     {
//         image: 'css3'
//     },
//     {
//         image: 'mongoDB'
//     },
//     {
//         image: 'mysql'
//     },
//     {
//         image: 'sequelize'
//     },
//     {
//         image: 'github'
//     },
// ]