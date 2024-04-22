import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Grow from '@mui/material/Grow';

const styles = [
  {
    image: {}
  },
  {
    card: {
      maxWidth: '400px',
      // background: 'transparent'
    }
  },
  {
    content: {
      maxWidth: '400px',
      background: 'transparent'
    }
  },
  {
    text: {}
  },
  {
    buttons: {}
  },
  {
    float: {}
  },
  {
    text: {}
  },
]

export default function ProjectCard() {
  return (
    <Grow in={true}>
    <Card sx={{maxWidth: '345px', background: 'transparent', borderRadius: '12px',}} style={styles.card} elevation={5}>
      <CardMedia
        component="img"
        alt="elevate"
        height="200"
        image="/src/assets/gif/elevate.gif"
      />
      <CardContent style={styles.content}>
        <Typography gutterBottom variant="h5" component="div" sx={{color: '#ffffff'}}>
          Elevate
        </Typography>
        <Typography variant="body2">
          Enhanced task management software for your company
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" sx={{color: '#ffffff'}}><GitHubIcon/></Button>
        <Button size="small" sx={{color: '#ffffff'}}><ArrowOutwardIcon/>View Site</Button>
      </CardActions>
    </Card>
    </Grow>
  );
}