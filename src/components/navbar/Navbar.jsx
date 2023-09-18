import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar '>
        <div className="navContainer">
        <span className="logo">
          <Link style={{ color: 'white', textDecoration:"none"}} to='/'>
          Ouse
          </Link>  
        </span>
        <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
            </div> 
        </div>
    </div>
  )
}

export default Navbar