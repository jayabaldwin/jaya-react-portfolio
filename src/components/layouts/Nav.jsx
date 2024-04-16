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
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        elevation={3}
        sx={{
            backgroundColor: 'rgba(128, 128, 128, 0.5)', 
            borderRadius: '20px', 
            position: 'fixed',
            bottom: 30,
            left: '40%',
            right: '40%'
        }}
      >
        {navIcons.map(({ label, icon }, index ) => (
            <BottomNavigationAction key={index} label={label} icon={icon}
            sx={{
                color: 'white',
            }} 
            />))}
      </BottomNavigation>
  );
}