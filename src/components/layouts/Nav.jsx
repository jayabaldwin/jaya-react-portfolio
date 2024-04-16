// import React from "react";
// import GitHubIcon from '@mui/icons-material/GitHub';

// const links = [
//   { icon: <GitHubIcon />, text: "Home", anchor: "#home" },
//   { icon: <GitHubIcon />, text: "About", anchor: "#about" },
//   { icon: <GitHubIcon />, text: "Projects", anchor: "#projects" },
//   { icon: <GitHubIcon />, text: "Contact", anchor: "#contact" },
// ];

// const styles = {
//     nav: {
//         display: 'flex',
//         color: 'white',
//         textDecoration: 'none',  
//     },
//     outDiv: {
//         transform: 'rotate(-90deg)',
//     }
// }

// export default function Nav() {
//   return (
//     <div>
//         <div style={styles.nav}>
//         {links.map((link, index) => (
//             <a key={index} style={styles.nav} href={link.anchor}>
//             {link.icon} {link.text}
//             </a>
//         ))}
//         </div>
//     </div>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ContactsIcon from '@mui/icons-material/Contacts';

const navIcons = [
    { label: 'Home', icon: <HomeIcon /> },
    { label: 'About', icon: <PersonIcon /> },
    { label: 'Projects', icon: <LibraryBooksIcon /> },
    { label: 'Contact', icon: <ContactsIcon /> },
]

export default function Nav() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
        <Paper sx={{ position: 'fixed', bottom: 30, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {navIcons.map(({ label, icon }, index ) => (
            <BottomNavigationAction key={index} label={label} icon={icon}
            sx={{
                color: 'white',
                // stroke: 'white'
            }} 
            />))}
      </BottomNavigation>
      </Paper>
    </Box>
  );
}