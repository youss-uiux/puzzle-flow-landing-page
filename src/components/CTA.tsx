import { motion } from 'framer-motion';

function CTA() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl p-20 relative overflow-hidden lg:p-20 md:p-16 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl font-bold text-white mb-5 lg:text-4xl md:text-3xl sm:text-2xl">
              Prêt à optimiser vos workflows ?
            </h2>
            <p className="text-lg text-white/90 leading-relaxed mb-8 lg:text-lg md:text-base">
              Rejoignez plus de 500 entreprises qui utilisent PuzzleFlow pour automatiser leurs processus.
              Commencez votre essai gratuit de 14 jours, sans carte de crédit.
            </p>
            <div className="flex gap-4 lg:flex-row sm:flex-col">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-lg text-base font-semibold transition-all hover:bg-gray-50 hover:-translate-y-1"
              >
                Démarrer gratuitement
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-white border-2 border-white/50 rounded-lg text-base font-semibold transition-all hover:border-white hover:bg-white/10"
              >
                Demander une démo
              </motion.a>
            </div>
          </div>

          {/* Floating puzzle pieces - hidden on mobile */}
          <div className="absolute top-0 right-0 bottom-0 w-2/5 pointer-events-none lg:block hidden">
            <motion.div
              className="absolute w-48 h-48 bg-white/10 rounded-3xl top-1/4 right-1/12 transform rotate-12"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-36 h-36 bg-white/10 rounded-3xl bottom-1/4 right-1/4 transform -rotate-12"
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute w-24 h-24 bg-white/10 rounded-3xl top-3/5 right-1/20 transform rotate-45"
              animate={{ y: [-20, 20, -20] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTA;
