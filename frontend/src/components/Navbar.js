import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#f0f0f0' }}>
      <ul style={{ listStyleType: 'none', display: 'flex', gap: '20px' }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#tool-rent">Tool Rent</a> {/* Placeholder */}
        </li>
        <li>
          <a href="#contact">Contact</a> {/* Placeholder */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
