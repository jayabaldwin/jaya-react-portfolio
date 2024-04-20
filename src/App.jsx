import './App.css'
import { Outlet } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import About from './components/home/About.jsx'
import Intro from './components/home/Intro.jsx';

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


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Layout>
          <Intro />
          <About />
        </Layout>
        <Outlet />
      </main>
    </ThemeProvider>
    </>
  );
}

export default App;
