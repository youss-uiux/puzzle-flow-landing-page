import './Testimonials.css';

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
    <section className="testimonials section" id="testimonials">
      <div className="container">
        <h2 className="section-title">
          Ce que nos clients <span className="gradient-text">disent de nous</span>
        </h2>
        <p className="section-subtitle">
          Découvrez comment PuzzleFlow aide des centaines d'entreprises à optimiser leurs workflows.
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial-card" key={index}>
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-author">
                <div className="author-avatar">{testimonial.avatar}</div>
                <div className="author-info">
                  <span className="author-name">{testimonial.name}</span>
                  <span className="author-role">{testimonial.role} • {testimonial.company}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="trust-logos">
          <p className="trust-title">Ils nous font confiance</p>
          <div className="logos-row">
            <div className="logo-item">TechStart</div>
            <div className="logo-item">InnoLab</div>
            <div className="logo-item">GrowthCo</div>
            <div className="logo-item">DataFlow</div>
            <div className="logo-item">CloudNine</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
