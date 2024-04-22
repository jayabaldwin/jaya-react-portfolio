import { Outlet } from 'react-router-dom';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import './App.css'
import CssBaseline from '@mui/material/CssBaseline';

// Completely rework color pallete 
const theme = createTheme({
  palette: {
    // background: {
    //   default: '#EDBAAB',
    // },
    primary: {
      main: '#000000',
      // light: '#EFEAE3',
      // dark: '#655446',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff',
      // light: '#EFEAE3',
      // dark: '#655446',
      contrastText: '#000000',
    }
  },
  typography: {
    fontFamily: [
      'Poppins',
      'sans-serif',
    ].join(','),
  }
});


function App(children) {
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
