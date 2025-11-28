import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">✨</span>
            <span>Nouvelle fonctionnalité: Workflows IA</span>
          </div>
          
          <h1 className="hero-title">
            Assemblez vos workflows<br />
            comme un <span className="gradient-text">puzzle parfait</span>
          </h1>
          
          <p className="hero-subtitle">
            PuzzleFlow est la plateforme SaaS qui permet d'optimiser et automatiser vos workflows internes. 
            Chaque demande, validation ou projet devient une "pièce du puzzle" que vous pouvez suivre en temps réel.
          </p>
          
          <div className="hero-actions">
            <a href="#" className="btn btn-primary">
              Démarrer gratuitement
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#" className="btn btn-secondary">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Voir la démo
            </a>
          </div>
          
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-value">+500</span>
              <span className="stat-label">Entreprises</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">98%</span>
              <span className="stat-label">Satisfaction</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat">
              <span className="stat-value">40%</span>
              <span className="stat-label">Temps gagné</span>
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
              <span className="dashboard-title">Dashboard PuzzleFlow</span>
            </div>
            <div className="dashboard-content">
              <div className="workflow-card">
                <div className="workflow-status approved"></div>
                <div className="workflow-info">
                  <span className="workflow-name">Demande de congés</span>
                  <span className="workflow-meta">Approuvé • Marie D.</span>
                </div>
              </div>
              <div className="workflow-card">
                <div className="workflow-status pending"></div>
                <div className="workflow-info">
                  <span className="workflow-name">Budget marketing Q4</span>
                  <span className="workflow-meta">En attente • 2 approbateurs</span>
                </div>
              </div>
              <div className="workflow-card">
                <div className="workflow-status in-progress"></div>
                <div className="workflow-info">
                  <span className="workflow-name">Onboarding nouveau client</span>
                  <span className="workflow-meta">En cours • Étape 3/5</span>
                </div>
              </div>
              <div className="progress-section">
                <span className="progress-label">Productivité de l'équipe</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{width: '85%'}}></div>
                </div>
                <span className="progress-value">85%</span>
              </div>
            </div>
          </div>
          <div className="floating-card card-1">
            <div className="notification-icon">🔔</div>
            <span>3 nouvelles validations</span>
          </div>
          <div className="floating-card card-2">
            <div className="notification-icon">✅</div>
            <span>Workflow terminé</span>
          </div>
        </div>
      </div>
      
      <div className="hero-bg">
        <div className="bg-gradient"></div>
        <div className="bg-grid"></div>
      </div>
    </section>
  );
}

export default Hero;
