import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './../../assets/home.svg';

export default function Navbar() {
  return (
    <div>
      <nav>
        <Link to="/">
          <img
            src={homeIcon}
            style={{ width: '5%', display: 'block', margin: '0 auto' }}
            alt="Home"
          />
        </Link>
      </nav>
    </div>
  );
}
