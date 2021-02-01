import React from 'react';
import './Header.css'

function Header() {
  return (
    <div className="main-nav">
      <div className="nav-item">Personal</div>
      <div className="nav-item">Academic</div>
      <div className="nav-item">Experience</div>
      <div className="nav-item">Skills & Interest</div>
      <div className="nav-item">Artwork</div>
      <div className="nav-item">Contact Me</div>
    </div>
  );
}

export default Header;