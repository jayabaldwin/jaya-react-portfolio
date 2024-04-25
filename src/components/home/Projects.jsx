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
    img: '', 
    title: 'Final course project', 
    subtitle: 'Coming soon ...', 
    github: 'https://github.com/jayabaldwin', 
    website: 'https://github.com/jayabaldwin'
  },
  {
    img: 'portfolio', 
    title: 'Portfolio', 
    subtitle: 'Personal web dev folder build with React', 
    github: 'https://github.com/jayabaldwin/jaya-react-portfolio', 
    website: 'www.jayabaldwin.com'
  },
  {
    img: 'elevate', 
    title: 'Elevate', 
    subtitle: 'Enhanced company management software', 
    github: 'https://github.com/jayabaldwin/elevate', 
    website: 'https://elevate-task-manager-4dc7b75f392c.herokuapp.com/'
  },
  {
    img: 'weather-dashboard', 
    title: 'Weather Dashboard', 
    subtitle: 'A 5-Day Weather Forecast utilising Open Weather Maps Api', 
    github: 'https://github.com/jayabaldwin/weather-dashboard', 
    website: 'https://jayabaldwin.github.io/weather-dashboard/'
  },
  {
    img: 'social-network-api', 
    title: 'Social Network API', 
    subtitle: 'Simplistic social network API utilising MongoDB', 
    github: 'https://github.com/jayabaldwin/social-network-api', 
    // website: 'https://jayabaldwin.github.io/weather-dashboard/'
  },
  {
    img: 'e-commerce-backend', 
    title: 'E-Commerce Backend Database', 
    subtitle: 'A backend e-commerce application that utilises Express.js API and Sequelize to interact with a MySQL database', 
    github: 'https://github.com/jayabaldwin/e-commerce-backend', 
    // website: 'https://jayabaldwin.github.io/weather-dashboard/'
  },
  {
    img: 'employee-tracker', 
    title: 'SQL: Employee Tracker', 
    subtitle: "Content management systems (CMS), CLI application, to manage a company's employee database, using Node.js, Inquirer, and MySQL.", 
    github: 'https://github.com/jayabaldwin/employee-tracker', 
    // website: 'https://jayabaldwin.github.io/weather-dashboard/'
  },
  {
    img: 'svg-logo', 
    title: 'SVG Logo Generator', 
    subtitle: 'Node.js command-line application to generate an svg logo', 
    github: 'https://github.com/jayabaldwin/svg-logo-maker', 
    // website: 'https://jayabaldwin.github.io/weather-dashboard/'
  },
];

export default function Projects() {
  return (
    <Grid container id="projects" sx={{ display: 'column', mb: '5rem', }} spacing={2} >
      <Grid>
        <Item sx={{mb: '3rem'}}><ProjectText/></Item>
      </Grid>
      <Grid container sx={{ justifyContent: 'space-around' }} spacing={2}>
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