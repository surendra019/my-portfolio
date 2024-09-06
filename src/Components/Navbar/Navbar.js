import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
    {/* <div className="logo">My Website</div> */}
    <div className={`nav-links ${isOpen ? 'open' : ''}`}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/skills">Skills</NavLink>
    </div>
    <div className="hamburger" onClick={toggleMenu}>
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>
  </nav>
  );
}

export default Navbar;
