import './App.css'
import { Outlet } from 'react-router-dom';
import Layout from './components/layouts/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#000000',
    }
  }
})


function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Layout />
        <Outlet />
      </main>
    </ThemeProvider>
    </>
  );
}

export default App;
