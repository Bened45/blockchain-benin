import React from 'react';
import './Partners.css';

function Partners() {
  return (
    <section className="partners-section">
      <div className="partners-container">
        <h2 className="partners-title">Nos Partenaires</h2>
        <p className="partners-subtitle">
          Nous sommes fiers de collaborer avec des organisations et des entreprises qui partagent notre vision.
        </p>
        <div className="partners-grid">
          {/* Placeholder for partner logos */}
          <div className="partner-logo-placeholder">Partenaire 1</div>
          <div className="partner-logo-placeholder">Partenaire 2</div>
          <div className="partner-logo-placeholder">Partenaire 3</div>
          <div className="partner-logo-placeholder">Partenaire 4</div>
          <div className="partner-logo-placeholder">Partenaire 5</div>
          <div className="partner-logo-placeholder">Partenaire 6</div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
