import React from 'react';
import './MissionVision.css';

function MissionVision() {
  return (
    <section className="mission-vision">
      <h2 className="mv-main-title">Notre Mission & Vision</h2>
      <div className="mv-cards-container">
        <div className="mv-card">
          <h3 className="mv-card-title">Notre Mission+</h3>
          <p className="mv-card-text">
            Éduquer, former et habiliter les jeunes africains à maîtriser la technologie blockchain et à créer des solutions innovantes qui résolvent les problèmes réels de nos communautés.
          </p>
        </div>
        <div className="mv-card">
          <h3 className="mv-card-title">Notre Vision</h3>
          <p className="mv-card-text">
            Construire le premier centre communautaire blockchain de l'Afrique francophone - une institution de référence où l'éducation, l'innovation et l'impact social convergent pour créer une génération de leaders et d'entrepreneurs blockchain.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MissionVision;
