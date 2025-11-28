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
            <button className="logo logo-btn" onClick={scrollToTop} aria-label="Go to top">
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
              <a href="/about">À propos</a>
              <a href="/careers">Carrières</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Contact</a>
            </div>
            <div className="footer-column">
              <h4>Ressources</h4>
              <a href="/docs">Documentation</a>
              <a href="/blog">Blog</a>
              <a href="/support">Support</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Puzzle-Flow. Tous droits réservés.</p>
          <div className="footer-legal">
            <a href="/privacy">Politique de confidentialité</a>
            <a href="/terms">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
