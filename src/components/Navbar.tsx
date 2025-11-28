function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50  backdrop-blur-lg border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <svg className="w-10 h-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="100" height="100" rx="20" fill="url(#gradient)"/>
            <path d="M30 35 L30 25 C30 22 33 20 35 20 C37 20 40 22 40 25 L40 35 L50 35 L50 40 C47 40 45 43 45 45 C45 47 47 50 50 50 L50 55 L40 55 L40 65 C40 68 37 70 35 70 C33 70 30 68 30 65 L30 55 L25 55 L25 45 C22 45 20 42 20 40 C20 38 22 35 25 35 L30 35 Z" fill="white" opacity="0.9"/>
            <path d="M60 35 L60 25 C60 22 63 20 65 20 C67 20 70 22 70 25 L70 35 L80 35 L80 40 C77 40 75 43 75 45 C75 47 77 50 80 50 L80 55 L70 55 L70 65 C70 68 67 70 65 70 C63 70 60 68 60 65 L60 55 L50 55 L50 50 C53 50 55 47 55 45 C55 43 53 40 50 40 L50 35 L60 35 Z" fill="white" opacity="0.7"/>
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#6366f1'}}/>
                <stop offset="100%" style={{stopColor: '#8b5cf6'}}/>
              </linearGradient>
            </defs>
          </svg>
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            PuzzleFlow
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          <li><a href="#features" className="font-medium text-gray-900 hover:text-indigo-400 transition-colors">Fonctionnalités</a></li>
          <li><a href="#how-it-works" className="font-medium text-gray-900 hover:text-indigo-400 transition-colors">Comment ça marche</a></li>
          <li><a href="#pricing" className="font-medium text-gray-900 hover:text-indigo-400 transition-colors">Tarifs</a></li>
          <li><a href="#testimonials" className="font-medium text-gray-900 hover:text-indigo-400 transition-colors">Témoignages</a></li>
        </ul>

        <div className="flex items-center gap-5">
          <a href="#" className="hidden md:block font-medium text-gray-900 hover:text-indigo-400 transition-colors">
            Connexion
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 md:px-6 md:py-3 sm:px-5 sm:py-2.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-base md:text-base sm:text-sm font-semibold transition-all hover:-translate-y-0.5 shadow-lg hover:shadow-xl">
            Essai gratuit
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

