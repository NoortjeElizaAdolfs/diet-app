//import React, { useContext } from 'react'
import Logo from '../../images/Logo.png';
import'../navbar/Navbar.css';
import { NavLink } from 'react-router-dom';
import { UilUser, UilSearch } from '@iconscout/react-unicons'

function Navbar() {

    return (
        <>
        <nav className='group-link'>
            <NavLink to="/"><img src={Logo} className='logo' alt='Diet Chef' /></NavLink>
          <ul>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/recepten">Recepten</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/flavor-mood">Inspiratie</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/over-ons">Over Ons</NavLink>
            </li>
          </ul>
            <div className='group-link-icon'>
            <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/zoeken"><UilSearch /></NavLink>
            <NavLink className={({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link'} to="/account"><UilUser /></NavLink>
            </div>
        </nav>
      </>
    );
}

export default Navbar;
