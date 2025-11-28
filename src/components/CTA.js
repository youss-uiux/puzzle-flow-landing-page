import React, { useState } from 'react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmittedEmail(email);
      setIsSubmitted(true);
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setSubmittedEmail('');
      }, 5000);
    }
  };

  return (
    <section className="cta-section" id="contact">
      <div className="container">
        <div className="cta-content">
          <h2>Prêt à assembler votre puzzle ?</h2>
          <p>Rejoignez les milliers d'équipes qui ont transformé leurs workflows avec Puzzle-Flow.</p>
          <form className="cta-form" onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div className="form-group">
                <p className="success-message">
                  ✓ Merci ! Nous vous contactons bientôt à {submittedEmail}
                </p>
              </div>
            ) : (
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Votre adresse email" 
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">
                  Démarrer l'essai gratuit
                </button>
              </div>
            )}
            <p className="form-note">✓ 14 jours d'essai gratuit · ✓ Pas de carte de crédit requise</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTA;
