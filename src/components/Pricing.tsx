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
    <section className="py-24 bg-gray-50" id="pricing">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">
          Des tarifs <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">simples et transparents</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Choisissez le plan adapté à vos besoins. Tous les plans incluent un essai gratuit de 14 jours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl relative flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                plan.popular 
                  ? 'border-2 border-indigo-500 shadow-xl lg:order-none -order-1' 
                  : 'border border-gray-100 p-10'
              }`}
              style={{ padding: plan.popular ? '40px 32px' : '40px 32px' }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full whitespace-nowrap">
                  Le plus populaire
                </div>
              )}

              <h3 className="text-xl font-semibold text-gray-900 mb-4">{plan.name}</h3>

              <div className="mb-2">
                {plan.price !== "Sur mesure" ? (
                  <div className="flex items-baseline">
                    <span className="text-2xl font-semibold text-gray-900">€</span>
                    <span className="text-5xl font-bold text-gray-900 leading-none">{plan.price}</span>
                    <span className="text-base text-gray-500 ml-1">/mois</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                )}
              </div>

              <p className="text-sm text-gray-600 mb-8">{plan.description}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:-translate-y-0.5 shadow-lg hover:shadow-xl' 
                    : 'bg-white text-gray-900 border-2 border-gray-200 hover:border-indigo-500 hover:text-indigo-600'
                }`}
              >
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

