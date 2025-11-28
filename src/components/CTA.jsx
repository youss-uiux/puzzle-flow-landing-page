import './CTA.css';

function CTA() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">
              Prêt à optimiser vos workflows ?
            </h2>
            <p className="cta-description">
              Rejoignez plus de 500 entreprises qui utilisent PuzzleFlow pour automatiser leurs processus. 
              Commencez votre essai gratuit de 14 jours, sans carte de crédit.
            </p>
            <div className="cta-actions">
              <a href="#" className="btn btn-cta-primary">
                Démarrer gratuitement
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
              <a href="#" className="btn btn-cta-secondary">
                Demander une démo
              </a>
            </div>
          </div>
          <div className="cta-visual">
            <div className="puzzle-piece piece-1"></div>
            <div className="puzzle-piece piece-2"></div>
            <div className="puzzle-piece piece-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
