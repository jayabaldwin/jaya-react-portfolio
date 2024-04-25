import Grid from '@mui/system/Unstable_Grid';
import styled from '@mui/system/styled';
import ProjectCard from '../home/ProjectCard.jsx';

const Item = styled('div')(({ theme }) => ({
  background: 'transparent',
  padding: theme.spacing(1),
}));

function ProjectText() {
  return (
    <>
      <h3>Portfolio</h3>
      <h2>Projects</h2>
      <p>Throughout the duration of this course I've built an array of applications, both solo and within a team. We were challenged with building primarily front-end, back-end and start-to-finish full-stack projects. </p>
    </>
  );
}

const projectData = [
  {
    img: 'elevate', 
    title: 'Elevate', 
    subtitle: 'Enhanced company management software', 
    github: 'https://github.com/jayabaldwin/elevate', 
    website: 'https://elevate-task-manager-4dc7b75f392c.herokuapp.com/'
  },
  {
    img: 'elevate', 
    title: 'Elevate', 
    subtitle: 'Enhanced company management software', 
    github: 'https://github.com/jayabaldwin/elevate', 
    website: 'https://elevate-task-manager-4dc7b75f392c.herokuapp.com/'
  },
  // Add more project data as needed
];

export default function Projects() {
  return (
    <Grid container id="projects" sx={{ display: 'column', mb: '5rem', justifyContent: 'space-around'}} spacing={2} >
      <Grid>
        <Item sx={{mb: '3rem'}}><ProjectText/></Item>
      </Grid>
      <Grid container sx={{ justifyContent: 'center' }} spacing={2}>
        {projectData.map((project, index) => (
          <Item key={index} xs={4}>
            <ProjectCard {...project} />
          </Item>
        ))}
      </Grid>
    </Grid>
  );
}



// import Grid from '@mui/system/Unstable_Grid';
// import styled from '@mui/system/styled';
// import ProjectCard from '../home/ProjectCard.jsx'

// const Item = styled('div')(({ theme }) => ({
//   background: 'transparent',
//   padding: theme.spacing(1),
// }));

// function ProjectText() {
//   return (
//     <>
//     <h3>Portfolio</h3>
//     <h2>Projects</h2>
//     <p>Throughout the duration of this course I've built an array of applications, both solo and within a team. We were challenged with building primarily front-end, back-end and start-to-finish full-stack projects. </p>
//   </>)

// }; 

// const projectCards = [{}];
// const projectData = [
//   {
//     visual: 'elevate', 
//     title: 'Elevate', 
//     subtitle: 'Enhanced company management software', 
//     github: 'https://github.com/jayabaldwin/elevate', 
//     website: 'https://elevate-task-manager-4dc7b75f392c.herokuapp.com/'
//   }
// ]
  



// export default function Projects() {
//   return (
//       <Grid container={true} id="projects"sx={{ display: 'column', mb: '5rem', justifyContent: 'space-around'}} spacing={2} >
//         <Grid>
//           <Item sx={{mb: '3rem'}}><ProjectText/></Item>
//         </Grid>
//         <Grid container={true} sx={{ justifyContent: 'center' }} spacing={2}>
//           {/* {projectCards.map((card, index) => (
//             <ProjectCard />
//           ))} */}
//           <Item xs={4}>
//             <ProjectCard />
//           </Item>
//           {/* <Item xs={4}>
//             <ProjectCard />
//           </Item>
//           <Item xs={4}>
//             <ProjectCard />
//           </Item> */}
//         </Grid>
//       </Grid>
//   );
// };