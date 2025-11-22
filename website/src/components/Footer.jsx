import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Blockchain BENIN</h3>
          <p>Une initiative dédiée à l'éducation et au développement de l'écosystème blockchain en Afrique francophone.</p>
        </div>
        <div className="footer-column">
          <h3>Liens Rapides</h3>
          <ul>
            <li><a href="#">Accueil</a></li>
            <li><a href="#">À Propos</a></li>
            <li><a href="#">Programmes</a></li>
            <li><a href="#">Ressources</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Galerie</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Nos Initiatives</h3>
          <ul>
            <li><a href="#">Blockchain Charity</a></li>
            <li><a href="#">Blockchain BENIN Week</a></li>
            <li><a href="#">Formations Certifiantes</a></li>
            <li><a href="#">Carrière</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>contact@beninblockchain.com</p>
          <p>+229 01 66 44 93 07</p>
          <p>Calavi, Bénin</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 Blockchain BENIN. Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default Footer;
