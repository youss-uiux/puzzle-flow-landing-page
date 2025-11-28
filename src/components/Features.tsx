const features = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    title: "Dashboard intuitif",
    description: "Visualisez l'avancement de tous vos workflows dans un tableau de bord clair et personnalisable."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
    title: "Gestion des approbateurs",
    description: "Assignez facilement des validateurs à chaque étape et suivez leurs décisions en temps réel."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
        <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
      </svg>
    ),
    title: "Notifications intelligentes",
    description: "Recevez des alertes personnalisées par email, Slack ou SMS pour ne jamais manquer une action importante."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </svg>
    ),
    title: "Suivi en temps réel",
    description: "Suivez chaque demande, validation et projet avec des statuts mis à jour instantanément."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
    title: "Automatisation",
    description: "Créez des règles automatiques pour déclencher des actions et accélérer vos processus."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
      </svg>
    ),
    title: "Sécurité avancée",
    description: "Vos données sont protégées avec un chiffrement de bout en bout et des contrôles d'accès granulaires."
  }
];

function Features() {
  return (
    <section className="py-24 bg-transparent relative" id="features">
      {/* Blur plus subtil de l'arrière-plan pour laisser voir l'Orb tout en gardant la lisibilité */}
      <div className="absolute inset-0 backdrop-blur-lg"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 drop-shadow-lg">
          Tout ce dont vous avez besoin pour <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">maîtriser vos workflows</span>
        </h2>
        <p className="text-lg text-gray-600 font-medium text-center max-w-3xl mx-auto mb-16 drop-shadow-lg">
          Des fonctionnalités puissantes conçues pour simplifier vos processus internes et améliorer la collaboration de votre équipe.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-400 hover:bg-gray-50 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl text-white mb-5 group-hover:scale-110 transition-transform shadow-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;

