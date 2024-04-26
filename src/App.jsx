import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#000000',
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 670,
      md: 900,
      lg: 1024,
      xl: 1200
    }
  }
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Outlet />
      </main>
    </ThemeProvider>
    </>
  );
}

export default App;
