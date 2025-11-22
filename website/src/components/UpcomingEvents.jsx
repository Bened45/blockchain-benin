import React from 'react';
import './UpcomingEvents.css';

function UpcomingEvents() {
  const events = [
    {
      title: 'Stellar Pop City',
      date: '06 Decembre 2025',
      buttonText: 'S\'inscrire',
      image: 'https://via.placeholder.com/300x200', // Placeholder image
    },
    {
      title: 'Crypto Treasury',
      date: '06 Décembre 2025',
      buttonText: 'Participer',
      image: 'https://via.placeholder.com/300x200', // Placeholder image
    },
    {
      title: 'Noël en Or',
      date: '14 Décembre 2026',
      buttonText: 'Contribuer',
      image: 'https://via.placeholder.com/300x200', // Placeholder image
    },
  ];

  return (
    <section className="upcoming-events">
      <h2 className="events-main-title">Événements à Venir</h2>
      <div className="events-cards-container">
        {events.map((event, index) => (
          <div className="event-card" key={index}>
            <div className="event-card-header">
              <h3>{event.title}</h3>
            </div>
            <div className="event-card-body">
              <img src={event.image} alt={event.title} className="event-image" />
              <p className="event-date">{event.date}</p>
              <button className="event-button">{event.buttonText} →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UpcomingEvents;
