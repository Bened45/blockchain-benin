import React from 'react';
import './Programs.css'; // Import the new CSS file

function Programs() {
  return (
    <section className="programs-section">
      <div className="programs-container">
        <h2 className="programs-title">Nos Programmes</h2>
        <p className="programs-subtitle">Des parcours adaptés à tous les profils, du débutant à l'expert</p>

        <div className="programs-grid">
          {/* Formation Card */}
          <div className="program-card">
            <div>
              <h3 className="card-title">Formations</h3>
              <p className="card-description">
                Cours structurés pour maîtriser la blockchain, des bases aux concepts avancés.
              </p>
            </div>
            <button className="card-button">
              Découvrir <span className="arrow">→</span>
            </button>
          </div>

          {/* Club Blockchain Card */}
          <div className="program-card">
            <div>
              <h3 className="card-title">Club Blockchain</h3>
              <p className="card-description">
                Découvre la blockchain, apprends, protège-toi et lance tes projets concrets dans ton université.
              </p>
            </div>
            <button className="card-button">
              Rejoindre <span className="arrow">→</span>
            </button>
          </div>

          {/* Bootcamps Card */}
          <div className="program-card">
            <div>
              <h3 className="card-title">Bootcamps</h3>
              <p className="card-description">
                Programmes intensifs pour devenir développeur blockchain en quelques semaines.
              </p>
            </div>
            <button className="card-button">
              Rejoindre <span className="arrow">→</span>
            </button>
          </div>

          {/* Hackathons Card */}
          <div className="program-card">
            <div>
              <h3 className="card-title">Hackathons</h3>
              <p className="card-description">
                Relevez des défis, développez des projets concrets et gagnez des prix.
              </p>
            </div>
            <button className="card-button">
              Participer <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
