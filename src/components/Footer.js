import React from 'react';

const Footer = () => {
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

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <button className="logo" onClick={scrollToTop} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
              <span className="logo-icon">🧩</span>
              <span className="logo-text">Puzzle-Flow</span>
            </button>
            <p>Optimisez et automatisez vos processus internes. Chaque workflow est une pièce de votre entreprise.</p>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Produit</h4>
              <a href="#features" onClick={(e) => handleNavClick(e, '#features')}>Fonctionnalités</a>
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, '#how-it-works')}>Comment ça marche</a>
              <a href="#benefits" onClick={(e) => handleNavClick(e, '#benefits')}>Avantages</a>
            </div>
            <div className="footer-column">
              <h4>Entreprise</h4>
              <button className="footer-link-btn">À propos</button>
              <button className="footer-link-btn">Carrières</button>
              <button className="footer-link-btn">Contact</button>
            </div>
            <div className="footer-column">
              <h4>Ressources</h4>
              <button className="footer-link-btn">Documentation</button>
              <button className="footer-link-btn">Blog</button>
              <button className="footer-link-btn">Support</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Puzzle-Flow. Tous droits réservés.</p>
          <div className="footer-legal">
            <button className="footer-link-btn">Politique de confidentialité</button>
            <button className="footer-link-btn">Conditions d'utilisation</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
