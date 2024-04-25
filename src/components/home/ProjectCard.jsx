import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Chip from '@mui/material/Chip';

const styles = {
  card: {
    background: 'transparent',
    borderRadius: '12px',
    // margin: '10px'
  },
};

export default function ProjectCard({ img, title, subtitle, github, website, chips }) {
  return (
    <Card style={styles.card} elevation={5}>
      { img && <CardMedia
        component="img"
        alt={img}
        height="180px"
        image={`/src/assets/images/${img}.png`}
      /> }
      <CardContent>
          <div>
          {chips.map((chip, index) => (
              <Chip key={index} label={chip} style={{ marginRight: '0.02rem', marginBottom: '0.5rem' }} />
            ))}
          </div>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: '#ffffff' }}>{title}</Typography>
        <Typography variant="body2">{subtitle}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{ color: '#ffffff', justifyContent: 'flex-end' }}
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
            sx={{ color: '#ffffff', justifyContent: 'flex-end' }}
            aria-label="active web application"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ArrowOutwardIcon />View Site
          </Button>
        )}
      </CardActions>
    </Card>
  );
}