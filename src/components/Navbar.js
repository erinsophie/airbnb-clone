import React from 'react';

function Navbar() {
  return (
    <nav className="nav-bar">
      <img
        src={process.env.PUBLIC_URL + '/img/airbnb-logo.svg'}
        alt="airbnb logo"
        className="nav-logo"
      />
    </nav>
  );
}

export default Navbar;
