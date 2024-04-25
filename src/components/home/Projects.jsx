import Grid from '@mui/material/Grid';
import styled from '@mui/system/styled';
import ProjectCard from '../home/ProjectCard.jsx';

const Item = styled('div')(({ theme }) => ({
  // background: 'transparent',
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
  },
  {
    img: 'e-commerce-backend', 
    title: 'E-Commerce Backend Database', 
    subtitle: 'A backend e-commerce application that utilises Express.js API and Sequelize to interact with a MySQL database', 
    github: 'https://github.com/jayabaldwin/e-commerce-backend', 
  },
  {
    img: 'employee-tracker', 
    title: 'SQL: Employee Tracker', 
    subtitle: "Content management systems (CMS), CLI application, to manage a company's employee database, using Node.js, Inquirer, and MySQL.", 
    github: 'https://github.com/jayabaldwin/employee-tracker', 
  },
  {
    img: 'svg-logo', 
    title: 'SVG Logo Generator', 
    subtitle: 'Node.js command-line application to generate an svg logo', 
    github: 'https://github.com/jayabaldwin/svg-logo-maker', 
  },
  {
    img: '', 
    title: 'Final course project', 
    subtitle: 'Coming soon ...', 
    github: 'https://github.com/jayabaldwin', 
    website: 'https://github.com/jayabaldwin'
  },
];

export default function Projects() {
  return (
    <Grid container id="projects" spacing={2} justifyContent="center" sx={{ flexWrap: 'wrap' }}>
      <Grid item xs={12}>
        <Item><ProjectText/></Item>
      </Grid>
      {projectData.map((project, index) => (
        <Grid key={index} item sm={12} md={12} lg={6} xl={4}>
          <Item>
            <ProjectCard {...project}/>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
}