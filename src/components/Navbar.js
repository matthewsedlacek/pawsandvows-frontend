// components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
       <h1>Paws and Vows</h1>
      <Link to="/">Home</Link>
      <Link to="/booking">Book Now</Link>
    </nav>
  );
}

export default Navbar;