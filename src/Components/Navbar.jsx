import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logo} alt="logo" />
      </div>
      
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item">
          <Link to="/">Main</Link>
        </li>
        <li className="navbar-item">
          <Link to="/ProjectPage">Projects</Link>
        </li>
        <li className="navbar-item">
          <Link to="/gallery">Gallery</Link>
        </li>
        <li className="navbar-item">
          <Link to="/certification">Certification</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contacts">Contacts</Link>
        </li>
      </ul>

      <button className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
