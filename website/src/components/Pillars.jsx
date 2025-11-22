import React from 'react';
import './Pillars.css';

function Pillars() {
  return (
    <section className="pillars">
      <h2 className="pillars-main-title">Nos Piliers</h2>
      <p className="pillars-subtitle">Quatre fondations solides pour transformer l'écosystème blockchain africain</p>
      <div className="pillars-cards-container">
        <div className="pillar-card">
          <h3>Éducation</h3>
          <p>Des formations de qualité, accessibles à tous les niveaux pour maîtriser la blockchain.</p>
        </div>
        <div className="pillar-card">
          <h3>Innovation</h3>
          <p>Encourager la créativité et développer des solutions adaptées aux défis africains.</p>
        </div>
        <div className="pillar-card">
          <h3>Communauté</h3>
          <p>Un réseau solide de passionnés, développeurs et entrepreneurs blockchain.</p>
        </div>
        <div className="pillar-card">
          <h3>Impact Social</h3>
          <p>Utiliser la blockchain pour créer un impact positif et durable en Afrique.</p>
        </div>
      </div>
    </section>
  );
}

export default Pillars;
