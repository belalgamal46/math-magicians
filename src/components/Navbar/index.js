import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav-container">
    <h1>Math Magician</h1>
    <ul className="nav-items">
      <li>
        <Link to="/">Home</Link>
      </li>
      |
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      |
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;
