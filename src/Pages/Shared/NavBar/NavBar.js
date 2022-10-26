import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import logo from '../../../images/logo2.png'
import { BsCart3 } from 'react-icons/bs';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <nav>
                <img src={logo} alt="Logo" />

                <div className='nav-links'>
                    <Link className='cart-icon' to='/cart'><BsCart3 /> <span>10</span></Link>
                    <Link to='/login'>Login</Link>
                    <Link className='signup-nav' to='/signup'>Signup</Link>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;