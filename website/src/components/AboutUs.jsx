import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about-us">
      <div className="about-us-content">
        <h2 className="about-us-title">Qui sommes-nous ?</h2>
        <p className="about-us-description">
          Blockchain BENIN est la première initiative dédiée à l'éducation et au développement de l'écosystème blockchain en Afrique francophone.
        </p>
        <div className="stats-cards">
          <div className="stat-card">
            <h3>2000+</h3>
            <p>Membres Actifs</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Événements Organisés</p>
          </div>
          <div className="stat-card">
            <h3>1500+</h3>
            <p>Personnes Formées</p>
          </div>
          <div className="stat-card">
            <h3>30+</h3>
            <p>Partenaires</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
