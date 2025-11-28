import React, { useEffect, useRef } from 'react';

const stepsData = [
  {
    number: 1,
    title: 'Créez vos workflows',
    description: 'Définissez les étapes de vos processus, les approbateurs nécessaires et les conditions de validation.'
  },
  {
    number: 2,
    title: 'Lancez vos demandes',
    description: 'Soumettez vos demandes qui se transforment en "pièces du puzzle" à suivre et à valider.'
  },
  {
    number: 3,
    title: 'Suivez et analysez',
    description: "Visualisez l'avancement en temps réel et identifiez les goulots d'étranglement pour améliorer vos processus."
  }
];

const HowItWorks = () => {
  const stepsRef = useRef([]);

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

    stepsRef.current.forEach(step => {
      if (step) observer.observe(step);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Comment ça marche</span>
          <h2 className="section-title">Trois étapes pour optimiser vos workflows</h2>
          <p className="section-subtitle">Commencez en quelques minutes et transformez vos processus internes</p>
        </div>
        <div className="steps-container">
          {stepsData.map((step, index) => (
            <React.Fragment key={index}>
              <div 
                className="step"
                ref={el => stepsRef.current[index] = el}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
              {index < stepsData.length - 1 && <div className="step-connector"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
