import './App.css';
import Navbar from './components/Navbar/Navbar.tsx';
import  {Outlet} from 'react-router-dom'
import Footer from './components/footer/Footer.tsx';

function App() {
  return (
    < >
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  );
}

export default App;
