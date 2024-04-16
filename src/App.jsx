import './App.css'
import { Outlet } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Completely rework color pallete 
const theme = createTheme({
  palette: {
    background: {
      default: '#000000',
    },
    primary: {
      main: '#B6742A',
      light: '#EFEAE3',
      dark: '#655446',
      contrastText: '#fff',
    },
    secondary: {
      main: '#B6742A',
      light: '#EFEAE3',
      dark: '#655446',
      contrastText: '#fff',
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  }
});


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main sx={{

      }}>
        <Layout />
        <Outlet />
      </main>
    </ThemeProvider>
    </>
  );
}

export default App;
