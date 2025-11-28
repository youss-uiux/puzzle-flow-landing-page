import './HowItWorks.css';

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
    <section className="how-it-works section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">
          Comment ça <span className="gradient-text">marche ?</span>
        </h2>
        <p className="section-subtitle">
          En seulement 4 étapes, transformez vos processus manuels en workflows automatisés et efficaces.
        </p>
        
        <div className="steps-container">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
