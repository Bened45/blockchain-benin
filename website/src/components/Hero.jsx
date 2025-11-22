import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Révolutionner l'Afrique avec la blockchain</h1>
        <p className="hero-subtitle">Le futur de la blockchain est ici. Rejoignez-nous pour construire un écosystème décentralisé et innovant.</p>
        <div className="hero-buttons">
          <button className="hero-button primary">Découvrir nos programmes</button>
          <button className="hero-button secondary">Nous soutenir</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
