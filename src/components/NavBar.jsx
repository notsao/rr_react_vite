import React from 'react';
import logo from './assets/logo_rr.svg';
import Menu from './assets/Menu_icon.svg'

const NavBar = () => {
    return (
        <div className="text-white text-center flex justify-around w-screen flex-row items-center font-family">
            <img src={logo} class="navbar-logo" />
            <i className='navbar-text mr-0'> About Us </i>
            <i className='navbar-text'> Services </i>
            <i className='navbar-text ml-0'> Contact Us </i>
            <div className='w-1/4'><button className='navbar-button'> Get Started </button></div>
            <div className='Phone-DropDown '> <img src={Menu}/> </div>
        </div>
    );
    };

export default NavBar;