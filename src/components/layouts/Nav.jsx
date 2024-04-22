// import * as React from 'react';
// // import BottomNavigation from '@mui/material/BottomNavigation';
// // import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
// import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
// import ContactsIcon from '@mui/icons-material/Contacts';
// import { Link } from 'react-router-dom';
// import { Box } from '@mui/system';


// const navIcons = [
//     { label: 'Home', icon: <HomeIcon />, anchorTag: '#home' },
//     { label: 'About', icon: <PersonIcon />, anchorTag: '#about'  },
//     { label: 'Projects', icon: <LibraryBooksIcon />, anchorTag: '#projects'  },
//     { label: 'Contact', icon: <ContactsIcon /> },
// ]

// export default function Nav() {
//   // const [value, setValue] = React.useState(0);

//   return (
//       // <BottomNavigation
//       //   showLabels
//       //   value={value}
//       //   onChange={(event, newValue) => {
//       //     setValue(newValue);
//       //   }}
//       //   sx={{
//       //       background: 'transparent',
//       //       rotate: '-90deg',
//       //       transformOrigin: 'left',
//       //       position: 'fixed',
//       //       top: '35rem',
//       //       marginLeft: '30px'
//       //   }}
//       // >
//       //   {navIcons.map(({ label }, index ) => (
//       //       <BottomNavigationAction 
//       //       key={index} 
//       //       label={label}
//       //       sx={{
//       //         color: 'white',
//       //         '.MuiBottomNavigationAction-label': {
//       //           fontSize: '1rem', 
//       //           padding: '0.45rem'
//       //         },
//       //       }} 
//       //       />))}
//       // </BottomNavigation>
//     <Box>
//       {navIcons.map(({ label, anchorTag }, index ) => (
//             <Link
//             href='#about'
//             key={index} 
//             sx={{
//               color: '#ffffff',
//               fontSize: '1rem'
//             }}>
//               {label}
//             </Link>
//       ))};
//     </Box> 
// )}

import React from 'react';
import { Box } from '@mui/system';

const navLinks = [
    { label: 'Home', anchor: '#home' },
    { label: 'About', anchor: '#about' },
    { label: 'Projects', anchor: '#projects' },
    { label: 'Contact', anchor: '#contact' },
];

export default function Nav() {
  return (
    <Box sx={{
                  rotate: '-90deg',
                  transformOrigin: 'left',
                  position: 'fixed',
                  top: '32rem',
                  marginLeft: '30px'
              }}>
      {navLinks.map(({ label, anchor }, index) => (
        <a href={anchor} key={index} style={{ color: '#ffffff', fontSize: '1rem', marginRight: '20px', textDecoration: 'none' }}>
          {label}
        </a>
      ))}
    </Box>
  );
}
