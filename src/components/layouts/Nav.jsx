import * as React from 'react';
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
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
            background: 'transparent',
            rotate: '-90deg',
            transformOrigin: 'left',
            position: 'fixed',
            top: '35rem',
            marginLeft: '30px'
        }}
      >
        {navIcons.map(({ label, icon }, index ) => (
            <BottomNavigationAction key={index} label={label}
            sx={{
              color: 'white',
              '.MuiBottomNavigationAction-label': {
                fontSize: '1rem', 
                padding: '0.45rem'
              },
            }} 
            />))}
      </BottomNavigation>
  );
}