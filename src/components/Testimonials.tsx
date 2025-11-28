const testimonials = [
  {
    name: "Marie Dupont",
    role: "Directrice RH",
    company: "TechStart",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c5?w=150&h=150&fit=crop&crop=face",
    content: "PuzzleFlow a révolutionné notre gestion des demandes RH. Les validations de congés qui prenaient 3 jours se font maintenant en quelques heures."
  },
  {
    name: "Thomas Martin",
    role: "CEO",
    company: "InnoLab",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Nous avons gagné 40% de temps sur nos processus d'approbation. L'interface est intuitive et notre équipe l'a adoptée immédiatement."
  },
  {
    name: "Sophie Bernard",
    role: "Responsable Opérations",
    company: "GrowthCo",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Le dashboard nous donne une visibilité complète sur tous nos workflows. C'est devenu notre outil central de coordination."
  },
  {
    name: "Ahmed Benali",
    role: "CTO",
    company: "DataFlow",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "L'automatisation des workflows nous a permis de réduire les erreurs de 80%. Un outil indispensable pour notre équipe tech."
  },
  {
    name: "Fatima Ould",
    role: "Directrice Marketing",
    company: "CloudNine",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content: "Nos campagnes marketing sont maintenant approuvées en temps record. PuzzleFlow a simplifié tous nos processus créatifs."
  },
  {
    name: "Jean-Paul Kouassi",
    role: "Directeur Financier",
    company: "EcoTech",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "La traçabilité des approbations financières n'a jamais été aussi claire. Nos audits sont maintenant beaucoup plus simples."
  }
];

function Testimonials() {
  return (
    <section className="py-24 bg-transparent relative" id="testimonials">
      {/* Blur subtil de l'arrière-plan pour laisser voir l'Orb tout en gardant la lisibilité */}
      <div className="absolute inset-0 backdrop-blur-lg"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900 drop-shadow-lg">
          Ce que nos clients <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">disent de nous</span>
        </h2>
        <p className="text-lg text-gray-600 font-medium text-center max-w-3xl mx-auto mb-16 drop-shadow-lg">
          Découvrez comment PuzzleFlow aide des centaines d'entreprises à optimiser leurs workflows.
        </p>

        {/* Carrousel infini */}
        <div className="overflow-hidden mb-20">
          <div className="flex animate-scroll gap-8">
            {/* Premier set de témoignages */}
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-400 flex-shrink-0 w-96"
              >
                <div className="relative mb-6">
                  <div className="absolute -top-5 -left-1 text-6xl text-indigo-600 opacity-20 font-serif leading-none">"</div>
                  <p className="text-base text-gray-900 leading-relaxed relative z-10">{testimonial.content}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} • {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
            {/* Duplication pour l'effet infini */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className="bg-white p-8 rounded-3xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-indigo-400 flex-shrink-0 w-96"
              >
                <div className="relative mb-6">
                  <div className="absolute -top-5 -left-1 text-6xl text-indigo-600 opacity-20 font-serif leading-none">"</div>
                  <p className="text-base text-gray-900 leading-relaxed relative z-10">{testimonial.content}</p>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role} • {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-6">Ils nous font confiance</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">TechStart</div>
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">InnoLab</div>
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">GrowthCo</div>
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">DataFlow</div>
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">CloudNine</div>
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">EcoTech</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

