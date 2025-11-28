import React, { useEffect, useRef } from 'react';

const benefitsData = [
  {
    icon: '⏱️',
    title: 'Gagnez du temps',
    description: 'Réduisez de 50% le temps consacré à la gestion des workflows manuels.'
  },
  {
    icon: '📊',
    title: 'Améliorez la productivité',
    description: 'Éliminez les tâches répétitives et concentrez-vous sur ce qui compte vraiment.'
  },
  {
    icon: '🎯',
    title: 'Gardez le contrôle',
    description: 'Ayez une vision claire de tous vos processus en un seul endroit.'
  },
  {
    icon: '🤝',
    title: 'Collaboration simplifiée',
    description: 'Facilitez la communication entre les équipes avec des notifications ciblées.'
  }
];

const Benefits = () => {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    itemsRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="benefits" id="benefits">
      <div className="container">
        <div className="benefits-content">
          <div className="benefits-text">
            <span className="section-tag">Avantages</span>
            <h2 className="section-title">Pourquoi choisir Puzzle-Flow ?</h2>
            <ul className="benefits-list">
              {benefitsData.map((benefit, index) => (
                <li 
                  key={index}
                  className={`animation-delay-${index}`}
                  ref={el => itemsRef.current[index] = el}
                >
                  <span className="benefit-icon">{benefit.icon}</span>
                  <div>
                    <strong>{benefit.title}</strong>
                    <p>{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="benefits-visual">
            <div className="puzzle-animation">
              <div className="puzzle-piece piece-1">🧩</div>
              <div className="puzzle-piece piece-2">🧩</div>
              <div className="puzzle-piece piece-3">🧩</div>
              <div className="puzzle-piece piece-4">🧩</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
