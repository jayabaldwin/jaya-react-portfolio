import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Chip from '@mui/material/Chip';
import { display, padding, positions, width } from '@mui/system';
import { Opacity } from '@mui/icons-material';

const styles = {
  card: {
    background: 'transparent',
    borderRadius: '12px',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: '1'

  },
  // hover: {
  //   // position: 'absolute',
  //   background: '#1f3d4738',
  //   backdropFilter: 'blue(5px)'

  // },
  icons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '5px'
  }
};

export default function ProjectCard({ img, title, subtitle, github, website, chips }) {
  return (
    <Card style={styles.card} elevation={5}>
      <div style={styles.icons}> 
      <Button
          size="small"
          sx={{ color: '#ffffff'}}
          aria-label="github repository"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon />
        </Button>
        {website && (
          <Button
            size="small"
            sx={{ color: '#ffffff' }}
            aria-label="active web application"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowOutwardIcon />View Site
          </Button>
       )}

      </div>
      <div style={styles.hover}>
      { img && <CardMedia
        style={styles.image}
        component="img"
        alt={img}
        image={`/src/assets/images/${img}.png`}
      /> }
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>{title}</Typography>
        <Typography variant="body2">{subtitle}</Typography>
      </CardContent>
      <CardActions>
      <div>
          {chips.map((chip, index) => (
              <Chip key={index} label={chip} style={{ marginRight: '0.02rem', marginBottom: '0.5rem', color: '#ffffff' }} />
            ))}
          </div>
      </CardActions>
    </Card>
  );
}