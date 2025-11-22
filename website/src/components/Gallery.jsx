import React from 'react';
import './Gallery.css';

function Gallery() {
  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-title">Notre Galerie</h2>
        <p className="gallery-subtitle">Revivez nos meilleurs moments en images</p>

        <div className="gallery-grid">
          <div className="gallery-item green-light">
            <p>Campus Meetup Tour 2025</p>
          </div>
          <div className="gallery-item yellow-light">
            <p>FAB Summit</p>
          </div>
          <div className="gallery-item yellow-medium">
            <p>Club Blockchain</p>
          </div>
          <div className="gallery-item green-dark">
            <p>Cérémonie de Certification</p>
          </div>
          <div className="gallery-item yellow-dark">
            <p>BB Week 2026</p>
          </div>
          <div className="gallery-item yellow-medium-light">
            <p>Bootcamp 2026</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
