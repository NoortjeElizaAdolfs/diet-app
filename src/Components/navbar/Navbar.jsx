//import React, { useContext } from 'react'
import NavbarItem from '../navbaritem/NavbarItem';
import'../navbar/Navbar.css';

function Navbar() {

    return (
        <nav>  
            <NavbarItem url={"/"} text={"Home"} />
            <NavbarItem url={"/recepten"} text={"Recepten"} />
        </nav>
    );
}

export default Navbar;
