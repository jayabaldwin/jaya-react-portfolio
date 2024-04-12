import './App.css'
import { Outlet } from 'react-router-dom';
import Layout from './components/layouts/Layout';

function App() {
  return (
    <>
      <main>
        <Layout />
        <Outlet />
      </main>
    </>
  );
}

export default App;
