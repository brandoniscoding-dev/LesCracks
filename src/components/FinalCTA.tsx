import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, Clock } from 'lucide-react';

const FinalCTA: React.FC = () => {
  const content = {
    finalCta: {
      title: "Prêt à passer à l'action ?",
      subtitle: "Rejoins LesCracks aujourd’hui",
      description:
        "Transforme tes compétences en projets concrets et profite d’un accompagnement sur-mesure, humain et impactant.",
      primaryCta: "Je m'inscris maintenant",
      guarantee: "Garantie satisfaction 100%",
      urgency: "Places limitées, agis vite !",
    },
    ui: {
      allRightsReserved: "Tous droits réservés",
      legalNotice: "Mentions légales",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
    },
  };

  const handleMainCTA = () => {
    window.open('Candidature de Pré-Qualification – LesCracks', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="final-cta" className="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-2xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-2xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 100, -40, 0],
            scale: [1, 0.9, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-600/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {content.finalCta.title}
            <br />
            <motion.span
              className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ backgroundSize: '200% 200%' }}
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            >
              {content.finalCta.subtitle}
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-lg lg:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.finalCta.description}
          </motion.p>

          <motion.button
            onClick={handleMainCTA}
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-12 py-6 rounded-3xl font-semibold text-xl shadow-md hover:shadow-blue-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            <span className="relative flex items-center justify-center gap-4">
              <span className="text-2xl">🤓</span>
              {content.finalCta.primaryCta}
              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight size={24} />
              </motion.div>
            </span>

            <motion.div
              className="absolute inset-0 bg-blue-400/30 rounded-3xl blur-xl"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.button>

          <motion.div
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="flex items-center gap-3 text-blue-400 font-semibold"
              whileHover={{ scale: 1.05 }}
            >
              <Shield size={24} />
              {content.finalCta.guarantee}
            </motion.div>

            <motion.div
              className="flex items-center gap-3 text-blue-400 font-semibold"
              whileHover={{ scale: 1.05 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Clock size={24} />
              {content.finalCta.urgency}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-24 pt-12 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="mb-4 sm:mb-0 font-semibold">
            © 2024 LesCracks. {content.ui.allRightsReserved}
          </div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-blue-400 transition-colors font-medium">
              {content.ui.legalNotice}
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors font-medium">
              {content.ui.privacy}
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors font-medium">
              {content.ui.terms}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;