import React, { useState } from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import './Header.css'; // Import the new CSS file

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="main-header">
      <div className="header-left">
        <div className="logo-container">
          {/* Placeholder for logo */}
          <div className="logo-placeholder"></div>
          <div className="logo-text">
            <span>BLOCKCHAIN</span>
            <span>BÉNIN</span>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <a href="#" className="nav-link">Accueil</a>
        <a href="#" className="nav-link">A&nbsp;Propos</a>
        <a href="#" className="nav-link">Programmes</a>
        <a href="#" className="nav-link">Ressources</a>
        <a href="#" className="nav-link">Galerie</a>
        <a href="#" className="nav-link">Contact</a>
      </nav>

      <div className="header-right">
        <div className="social-icons">
          <a href="#" aria-label="Facebook" className="social-icon"><FaFacebook /></a>
          <a href="#" aria-label="Twitter" className="social-icon"><FaTwitter /></a>
          <a href="#" aria-label="LinkedIn" className="social-icon"><FaLinkedin /></a>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-nav-links">
            <a href="#" onClick={toggleMenu} className="mobile-nav-link">Accueil</a>
            <a href="#" onClick={toggleMenu} className="mobile-nav-link">A&nbsp;Propos</a>
            <a href="#" onClick={toggleMenu} className="mobile-nav-link">Programmes</a>
            <a href="#" onClick={toggleMenu} className="mobile-nav-link">Ressources</a>
            <a href="#" onClick={toggleMenu} className="mobile-nav-link">Galerie</a>
            <a href="#" onClick={toggleMenu} className="mobile-nav-link">Contact</a>
          </nav>
          <div className="mobile-social-icons">
            <a href="#" aria-label="Facebook" className="mobile-social-icon"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="mobile-social-icon"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn" className="mobile-social-icon"><FaLinkedin /></a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
