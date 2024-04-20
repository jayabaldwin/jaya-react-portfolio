import React from "react";
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LayersIcon from '@mui/icons-material/Layers';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SendIcon from '@mui/icons-material/Send';
// import Tooltip from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const socialIcons = [
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/jayabaldwin' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaya-baldwin-489122204/' },
  { icon: <LayersIcon />, label: 'Stack Overflow', href: 'https://stackoverflow.com/users/16069392/jaya-baldwin' },
  { icon: <SendIcon />, label: 'Email', href: `mailto:jayastarrbaldwin@gmail.com` },
  { icon: <SaveAltIcon />, label: 'Resumé', href: '#' }, // Add resume file download link
];

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: theme.palette.common.black,
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.black,
  },
}));

export default function RightSocial() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'fixed',
        right: '50px',
        top: '25vh',
      }}
    >
      {socialIcons.map(({ icon, label, href }, index) => (
        <StyledTooltip 
          key={index} 
          title={label} 
          placement="left"
          arrow 
          >
          <Fab 
          color="primary" 
          aria-label={label} 
          href={href}
          sx={{
            marginTop: '15px',
            background: 'transparent', 
            outlineColor: 'white',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)'
          }}>
            {icon}
          </Fab>
        </StyledTooltip>
      ))}
    </Box>
  );
}
