import './Pricing.css';

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Pour les petites équipes qui démarrent",
    features: [
      "Jusqu'à 5 utilisateurs",
      "10 workflows actifs",
      "Notifications email",
      "Dashboard basique",
      "Support par email"
    ],
    popular: false,
    cta: "Commencer"
  },
  {
    name: "Business",
    price: "79",
    description: "Pour les équipes en croissance",
    features: [
      "Jusqu'à 25 utilisateurs",
      "Workflows illimités",
      "Notifications multi-canaux",
      "Dashboard avancé",
      "Intégrations (Slack, Teams)",
      "Rapports et analytics",
      "Support prioritaire"
    ],
    popular: true,
    cta: "Essai gratuit"
  },
  {
    name: "Enterprise",
    price: "Sur mesure",
    description: "Pour les grandes organisations",
    features: [
      "Utilisateurs illimités",
      "Workflows illimités",
      "SSO & SAML",
      "API complète",
      "Audit trail avancé",
      "SLA garanti",
      "Account manager dédié",
      "Formation sur site"
    ],
    popular: false,
    cta: "Nous contacter"
  }
];

function Pricing() {
  return (
    <section className="pricing section" id="pricing">
      <div className="container">
        <h2 className="section-title">
          Des tarifs <span className="gradient-text">simples et transparents</span>
        </h2>
        <p className="section-subtitle">
          Choisissez le plan adapté à vos besoins. Tous les plans incluent un essai gratuit de 14 jours.
        </p>
        
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`} key={index}>
              {plan.popular && <div className="popular-badge">Le plus populaire</div>}
              <h3 className="plan-name">{plan.name}</h3>
              <div className="plan-price">
                {plan.price !== "Sur mesure" ? (
                  <>
                    <span className="price-currency">€</span>
                    <span className="price-amount">{plan.price}</span>
                    <span className="price-period">/mois</span>
                  </>
                ) : (
                  <span className="price-custom">{plan.price}</span>
                )}
              </div>
              <p className="plan-description">{plan.description}</p>
              
              <ul className="plan-features">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} plan-cta`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
