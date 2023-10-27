// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/members">Members</Link>
        </li>
        <li>
            <Link to="/timeline">Timeline</Link>
        </li>
        <li>
          <Link to="/Cads">Cads</Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;