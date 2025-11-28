import React from 'react';

const Hero = () => {
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Assemblez vos workflows<br />
            <span className="gradient-text">pièce par pièce</span>
          </h1>
          <p className="hero-subtitle">
            Puzzle-Flow est une plateforme SaaS qui permet d'optimiser et automatiser vos workflows internes. 
            Chaque demande, validation ou projet devient une "pièce du puzzle" que vous pouvez suivre en temps réel.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-large" onClick={(e) => handleNavClick(e, '#contact')}>
              Commencer gratuitement
            </a>
            <a href="#how-it-works" className="btn btn-secondary btn-large" onClick={(e) => handleNavClick(e, '#how-it-works')}>
              Découvrir
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">50%</span>
              <span className="stat-label">de temps gagné</span>
            </div>
            <div className="stat">
              <span className="stat-number">1000+</span>
              <span className="stat-label">équipes actives</span>
            </div>
            <div className="stat">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">disponibilité</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="dashboard-preview">
            <div className="dashboard-header">
              <div className="dashboard-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className="dashboard-title">Dashboard Puzzle-Flow</span>
            </div>
            <div className="dashboard-content">
              <div className="workflow-card">
                <div className="workflow-status status-progress"></div>
                <div className="workflow-info">
                  <span className="workflow-name">Demande d'achat #142</span>
                  <span className="workflow-date">En attente de validation</span>
                </div>
              </div>
              <div className="workflow-card">
                <div className="workflow-status status-complete"></div>
                <div className="workflow-info">
                  <span className="workflow-name">Projet Marketing Q4</span>
                  <span className="workflow-date">Approuvé</span>
                </div>
              </div>
              <div className="workflow-card">
                <div className="workflow-status status-pending"></div>
                <div className="workflow-info">
                  <span className="workflow-name">Budget IT 2024</span>
                  <span className="workflow-date">3 approbateurs restants</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
