import React from 'react';

const HamburgerButton = ({ isActive, onClick }) => (
  <button
    id="menu-button"
    aria-label="Toggle menu"
    className={`hamburger hamburger--collapse ${isActive ? 'is-active' : ''}`}
    type="button"
    onClick={onClick}
    aria-expanded={isActive}
  >
    <span className="hamburger-box">
      <span className="hamburger-inner"></span>
    </span>
  </button>
);

export default HamburgerButton;
