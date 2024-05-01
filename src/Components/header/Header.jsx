import Navbar from '../navbar/Navbar.jsx'
import'../header/Header.css';
import { useLocation } from 'react-router-dom';


function Header() {
  return (
    <header>
         <div className='banner-group'>
            <Navbar></Navbar>
            <h1></h1>
        </div>
   </header>
  );
}
export default Header;