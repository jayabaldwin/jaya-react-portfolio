import React from "react";
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LayersIcon from '@mui/icons-material/Layers';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SendIcon from '@mui/icons-material/Send';
import Tooltip from '@mui/material/Tooltip';

const socialIcons = [
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/jayabaldwin' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaya-baldwin-489122204/' },
  { icon: <LayersIcon />, label: 'Stack Overflow', href: 'https://stackoverflow.com/users/16069392/jaya-baldwin' },
  { icon: <SendIcon />, label: 'Email', href: `mailto:jayastarrbaldwin@gmail.com` },
  { icon: <SaveAltIcon />, label: 'Resumé', href: '#' }, // Add your resume link
];

export default function RightSocial() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-around"
      alignItems="flex-end"
      sx={{
        '& > *': { my: 1 }
      }}
    >
      {socialIcons.map(({ icon, label, href }, index) => (
        <Tooltip key={index} title={label} placement="right-start" arrow>
          <Fab color="secondary" aria-label={label} href={href}>
            {icon}
          </Fab>
        </Tooltip>
      ))}
    </Grid>
  );
}
