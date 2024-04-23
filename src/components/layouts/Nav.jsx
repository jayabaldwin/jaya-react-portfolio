import React from "react";
import { NavLink as RouterLink, useLocation, useNavigate } from "react-router-dom";

import { Link as ScrollLink } from "react-scroll";
import * as Scroll from "react-scroll";

const Navigation = () => {
  const path = useLocation().pathname;
  const location = path.split("/")[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const goToPageAndScroll = async (selector) => {
    await navigate("/");
    await scroller.scrollTo(selector, {
      duration: 500,
      smooth: true,
      offset: -75,
      spy: true
    });
  };

  return (
      <nav id="navigation">
        <ul  
        style={{
          display: 'flex',
          rotate: '-90deg',
          transformOrigin: 'left',
          position: 'fixed',
          top: '32rem',
          marginLeft: '30px',
          }}>
          {location !== "Contact" ? (
            <>
              <li>
                {" "}
                <ScrollLink to="home" spy={true} smooth={true} offset={-75} duration={500}>
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="about" spy={true} smooth={true} offset={-75} duration={500}>
                  About
                </ScrollLink>
              </li>
              <li>
                <ScrollLink to="projects" spy={true} smooth={true} offset={-75} duration={500}>
                  Projects
                </ScrollLink>
              </li>
              <li>
                <RouterLink to="/Contact">Contact</RouterLink>
              </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <button onClick={() => goToPageAndScroll("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("about")}>About</button>
              </li>
              <li>
                <button onClick={() => goToPageAndScroll("projects")}>Projects</button>
              </li>
              <li>
                <RouterLink to="/Contact">Contact</RouterLink>
              </li>
            </>
          )}
        </ul>
      </nav>
  );
};

export default Navigation;



// import { Box } from '@mui/system';
// import { Link as ScrollLink } from 'react-scroll';
// import { Link } from 'react-router-dom'
// import { useLocation } from 'react-router-dom'

// const navLinks = [
//     { label: 'Home', anchor: 'home' },
//     { label: 'About', anchor: 'about' },
//     { label: 'Projects', anchor: 'projects' },
// ];

// export default function Nav() {
//   const location = useLocation();
//   location.pathname === '/Contact'
//   return (
//     <Box
//       sx={{
        // rotate: '-90deg',
        // transformOrigin: 'left',
        // position: 'fixed',
        // top: '32rem',
        // marginLeft: '30px',
//       }}
//     >
//       {navLinks.map(({ label, anchor }, index) => (
//         <ScrollLink
//           to={anchor}
//           smooth={true}
//           duration={700}
//           key={index}
//           style={{
//             color: '#ffffff',
//             fontSize: '1rem',
//             marginRight: '20px',
//             textDecoration: 'none',
//             cursor: 'pointer',
//           }}
//         >
//           {label}
//         </ScrollLink>
//       ))}
//       <Link 
//         to="/contact"
//         style={{
//           color: '#ffffff',
//           fontSize: '1rem',
//           marginRight: '20px',
//           textDecoration: 'none',
//           cursor: 'pointer',
//         }}>
//         Contact
//       </Link>
//     </Box>
//   );
// }



// import React from 'react';
// import { Box } from '@mui/system';
// import { Link } from 'react-router-dom'; // Correct import statement
// import Contact from '../../pages/Contact';

// // Ensure directing to contact
// const navLinks = [
//     { label: 'Home', anchor: '#home' },
//     { label: 'About', anchor: '#about' },
//     { label: 'Projects', anchor: '#projects' },
//     { label: 'Contact', anchor: '/contact' },
// ];

// export default function Nav() {
//   const handleClick = (event, anchor) => {
//     event.preventDefault();
//     const element = document.querySelector(anchor);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   };

//   return (
//     <Box sx={{
//       rotate: '-90deg',
//       transformOrigin: 'left',
//       position: 'fixed',
//       top: '32rem',
//       marginLeft: '30px'
//     }}>
//       {navLinks.map(({ label, anchor }, index) => (
//         <Link to={anchor} key={index} style={{ color: '#ffffff', fontSize: '1rem', marginRight: '20px', textDecoration: 'none' }} onClick={(event) => handleClick(event, anchor)}>
//           {label}
//         </Link>
//       ))}
//     </Box>
//   );
// }


// import React from 'react';
// import { Box } from '@mui/system';
// import { Link } from 'react-router-dom';
// import Contact from '../../pages/Contact'

// // Fix contact link, potentially change all to links and remove href
// const navLinks = [
//     { label: 'Home', anchor: '#home' },
//     { label: 'About', anchor: '#about' },
//     { label: 'Projects', anchor: '#projects' },
//     { label: 'Contact', anchor: <Link to={Contact}/> },
// ];

// // Slow down transition
// export default function Nav() {
//   const handleClick = (event, anchor) => {
//     event.preventDefault();
//     const element = document.querySelector(anchor);
//     if (element) {
//       element.scrollIntoView({
//         behavior: 'smooth',
//         block: 'start',
//       });
//     }
//   };

//   return (
//     <Box sx={{
//       rotate: '-90deg',
//       transformOrigin: 'left',
//       position: 'fixed',
//       top: '32rem',
//       marginLeft: '30px'
//     }}>
//       {navLinks.map(({ label, anchor }, index) => (
//         <a href={anchor} key={index} style={{ color: '#ffffff', fontSize: '1rem', marginRight: '20px', textDecoration: 'none' }} onClick={(event) => handleClick(event, anchor)}>
//           {label}
//         </a>
//       ))}
//     </Box>
//   );
// }


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
