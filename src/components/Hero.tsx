import { motion } from 'framer-motion';
import Orb from './Orb';

function Hero() {
  return (
    <section className="relative pt-36 pb-24 overflow-hidden min-h-screen flex items-center">
      {/* Background avec Orb */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
          <Orb
            hoverIntensity={0.5}
            rotateOnHover={true}
            hue={240}
            forceHoverState={false}
          />
        </div>
        <div className="absolute -top-1/2 -right-1/5 w-4/5 h-[150%] bg-gradient-radial from-indigo-500/8 to-transparent"></div>
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.03) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-600/10 border border-indigo-500/20 rounded-full px-4 py-2 text-sm font-medium text-indigo-600 mb-6">
            <span className="text-base">✨</span>
            <span>Nouvelle fonctionnalité: Workflows IA</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
            Assemblez vos workflows<br />
            comme un <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">puzzle parfait</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
            PuzzleFlow est la plateforme SaaS qui permet d'optimiser et automatiser vos workflows internes.
            Chaque demande, validation ou projet devient une "pièce du puzzle" que vous pouvez suivre en temps réel.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg text-base font-semibold transition-all hover:-translate-y-1 shadow-lg hover:shadow-xl">
              Démarrer gratuitement
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 border-2 border-gray-200 rounded-lg text-base font-semibold transition-all hover:border-indigo-500 hover:text-indigo-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Voir la démo
            </a>
          </div>

          <div className="flex items-center gap-8 flex-wrap lg:justify-start justify-center">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">+500</span>
              <span className="text-sm text-gray-500">Entreprises</span>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">98%</span>
              <span className="text-sm text-gray-500">Satisfaction</span>
            </div>
            <div className="w-px h-10 bg-gray-200 hidden sm:block"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">40%</span>
              <span className="text-sm text-gray-500">Temps gagné</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative lg:block"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 max-w-lg mx-auto">
            {/* Dashboard Header */}
            <div className="flex items-center gap-3 px-5 py-4 bg-gray-50 border-b border-gray-100">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
              <span className="text-sm text-gray-500">Dashboard PuzzleFlow</span>
            </div>

            {/* Dashboard Content */}
            <div className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl transition-all hover:translate-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 text-sm">Demande de congés</span>
                  <span className="text-xs text-gray-500">Approuvé • Marie D.</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl transition-all hover:translate-x-1">
                <div className="w-3 h-3 bg-yellow-500 rounded-full flex-shrink-0"></div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 text-sm">Budget marketing Q4</span>
                  <span className="text-xs text-gray-500">En attente • 2 approbateurs</span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl transition-all hover:translate-x-1">
                <div className="w-3 h-3 bg-indigo-500 rounded-full flex-shrink-0"></div>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 text-sm">Onboarding nouveau client</span>
                  <span className="text-xs text-gray-500">En cours • Étape 3/5</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <span className="text-sm text-gray-600 whitespace-nowrap">Productivité de l'équipe</span>
                <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" style={{width: '85%'}}></div>
                </div>
                <span className="text-sm font-semibold text-indigo-600">85%</span>
              </div>
            </div>
          </div>

          {/* Floating Cards - Hidden on mobile */}
          <motion.div
            className="absolute top-1/5 -right-5 bg-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium lg:flex items-center gap-3 hidden"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-xl">🔔</div>
            <span>3 nouvelles validations</span>
          </motion.div>

          <motion.div
            className="absolute bottom-1/5 -left-10 bg-white px-5 py-3 rounded-xl shadow-lg text-sm font-medium lg:flex items-center gap-3 hidden"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          >
            <div className="text-xl">✅</div>
            <span>Workflow terminé</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
