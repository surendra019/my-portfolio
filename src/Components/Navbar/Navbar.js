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
      <NavLink to="/" onClick={toggleMenu}>Home</NavLink>
      <NavLink to="/about" onClick={toggleMenu}>About</NavLink>
      <NavLink to="/work" onClick={toggleMenu}>Work</NavLink>
      <NavLink to="/skills" onClick={toggleMenu}>Skills</NavLink>
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
