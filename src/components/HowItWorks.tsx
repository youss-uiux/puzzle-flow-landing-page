const steps = [
  {
    number: "01",
    title: "Créez votre workflow",
    description: "Définissez les étapes de vos processus en quelques clics avec notre éditeur visuel intuitif."
  },
  {
    number: "02",
    title: "Assignez les responsables",
    description: "Ajoutez des approbateurs à chaque étape et définissez les règles de validation."
  },
  {
    number: "03",
    title: "Lancez et suivez",
    description: "Démarrez vos workflows et suivez l'avancement en temps réel depuis votre dashboard."
  },
  {
    number: "04",
    title: "Analysez et optimisez",
    description: "Consultez les rapports pour identifier les goulots d'étranglement et améliorer vos processus."
  }
];

function HowItWorks() {
  return (
    <section className="py-24 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-900">
          Comment ça <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">marche ?</span>
        </h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          En seulement 4 étapes, transformez vos processus manuels en workflows automatisés et efficaces.
        </p>

        <div className="hidden lg:flex justify-between relative">
          {steps.map((step, index) => (
            <div key={index} className="flex-1 text-center relative px-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white text-2xl font-bold mb-6 relative z-10">
                {step.number}
              </div>
              <div className="max-w-60 mx-auto">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 opacity-30 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6">
              <div className="inline-flex items-center justify-center w-15 h-15 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white text-xl font-bold flex-shrink-0">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-base text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;

