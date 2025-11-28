const testimonials = [
  {
    name: "Marie Dupont",
    role: "Directrice RH",
    company: "TechStart",
    avatar: "MD",
    content: "PuzzleFlow a révolutionné notre gestion des demandes RH. Les validations de congés qui prenaient 3 jours se font maintenant en quelques heures."
  },
  {
    name: "Thomas Martin",
    role: "CEO",
    company: "InnoLab",
    avatar: "TM",
    content: "Nous avons gagné 40% de temps sur nos processus d'approbation. L'interface est intuitive et notre équipe l'a adoptée immédiatement."
  },
  {
    name: "Sophie Bernard",
    role: "Responsable Opérations",
    company: "GrowthCo",
    avatar: "SB",
    content: "Le dashboard nous donne une visibilité complète sur tous nos workflows. C'est devenu notre outil central de coordination."
  }
];

function Testimonials() {
  return (
    <section className="py-24 bg-white" id="testimonials">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">
          Ce que nos clients <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">disent de nous</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Découvrez comment PuzzleFlow aide des centaines d'entreprises à optimiser leurs workflows.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-3xl border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative mb-6">
                <div className="absolute -top-5 -left-1 text-6xl text-indigo-600 opacity-20 font-serif leading-none">"</div>
                <p className="text-base text-gray-900 leading-relaxed relative z-10">{testimonial.content}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role} • {testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide font-medium mb-6">Ils nous font confiance</p>
          <div className="flex items-center justify-center gap-12 flex-wrap">
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">TechStart</div>
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">InnoLab</div>
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">GrowthCo</div>
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">DataFlow</div>
            <div className="text-xl font-bold text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">CloudNine</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;

