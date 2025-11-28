function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-lg pt-20 pb-10 text-white relative">
      {/* Blur subtil pour laisser voir l'Orb tout en gardant la lisibilité */}
      <div className="absolute inset-0 backdrop-blur-sm"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 md:col-span-2 text-center md:text-left">
            <a href="#" className="flex items-center gap-2.5 justify-center md:justify-start mb-5">
              <svg className="w-9 h-9" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" rx="20" fill="url(#footerGradient)"/>
                <path d="M30 35 L30 25 C30 22 33 20 35 20 C37 20 40 22 40 25 L40 35 L50 35 L50 40 C47 40 45 43 45 45 C45 47 47 50 50 50 L50 55 L40 55 L40 65 C40 68 37 70 35 70 C33 70 30 68 30 65 L30 55 L25 55 L25 45 C22 45 20 42 20 40 C20 38 22 35 25 35 L30 35 Z" fill="white" opacity="0.9"/>
                <path d="M60 35 L60 25 C60 22 63 20 65 20 C67 20 70 22 70 25 L70 35 L80 35 L80 40 C77 40 75 43 75 45 C75 47 77 50 80 50 L80 55 L70 55 L70 65 C70 68 67 70 65 70 C63 70 60 68 60 65 L60 55 L50 55 L50 50 C53 50 55 47 55 45 C55 43 53 40 50 40 L50 35 L60 35 Z" fill="white" opacity="0.7"/>
                <defs>
                  <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#6366f1'}}/>
                    <stop offset="100%" style={{stopColor: '#8b5cf6'}}/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-bold text-white">PuzzleFlow</span>
            </a>
            <p className="text-sm text-white/60 leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
              Optimisez et automatisez vos workflows internes. Chaque workflow est une pièce de votre entreprise, et PuzzleFlow les assemble parfaitement.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-white hover:bg-indigo-600 hover:-translate-y-0.5 transition-all" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-white hover:bg-indigo-600 hover:-translate-y-0.5 transition-all" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-lg text-white hover:bg-indigo-600 hover:-translate-y-0.5 transition-all" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="text-center lg:text-left">
            <h4 className="text-sm font-semibold mb-5 text-white">Produit</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Fonctionnalités</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Tarifs</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Intégrations</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Changelog</a></li>
              <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-sm font-semibold mb-5 text-white">Ressources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">API</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Webinaires</a></li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-sm font-semibold mb-5 text-white">Entreprise</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Partenaires</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Presse</a></li>
            </ul>
          </div>

          <div className="text-center lg:text-left">
            <h4 className="text-sm font-semibold mb-5 text-white">Légal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Confidentialité</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">CGU</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">Sécurité</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-white transition-colors">RGPD</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-10 border-t border-white/10 gap-3">
          <p className="text-sm text-gray-600">&copy; 2025 PuzzleFlow. Tous droits réservés.</p>
          <p className="text-sm text-gray-600 flex items-center gap-1">Fait avec ❤️ au Niger</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

