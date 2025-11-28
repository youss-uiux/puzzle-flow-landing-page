import React, { useEffect, useRef } from 'react';

const featuresData = [
  {
    icon: '📊',
    title: 'Dashboard en temps réel',
    description: "Visualisez l'avancement de tous vos processus dans un tableau de bord clair et personnalisable."
  },
  {
    icon: '👥',
    title: 'Gestion des approbateurs',
    description: 'Assignez des approbateurs à chaque étape et définissez des chaînes de validation personnalisées.'
  },
  {
    icon: '🔔',
    title: 'Notifications intelligentes',
    description: 'Recevez des alertes en temps réel sur les actions à effectuer et les changements de statut.'
  },
  {
    icon: '📈',
    title: 'Suivi des statuts',
    description: 'Suivez chaque demande, validation ou projet avec des statuts clairs et des mises à jour instantanées.'
  },
  {
    icon: '🔄',
    title: 'Automatisation',
    description: "Automatisez les tâches répétitives et créez des workflows intelligents qui s'adaptent à vos besoins."
  },
  {
    icon: '🔒',
    title: 'Sécurité avancée',
    description: "Vos données sont protégées avec un chiffrement de bout en bout et des contrôles d'accès granulaires."
  }
];

const Features = () => {
  const cardsRef = useRef([]);

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

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Fonctionnalités</span>
          <h2 className="section-title">Tout ce dont vous avez besoin pour gérer vos workflows</h2>
          <p className="section-subtitle">Des outils puissants et intuitifs pour transformer vos processus internes</p>
        </div>
        <div className="features-grid">
          {featuresData.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card animation-delay-${index}`}
              ref={el => cardsRef.current[index] = el}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
