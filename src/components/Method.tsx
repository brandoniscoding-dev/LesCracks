import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Hammer, CheckCircle, Network, ArrowRight } from 'lucide-react';

const Method: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: Search,
      title: 'Diagnostic & Positionnement',
      description: 'Tu sors du flou, tu comprends ce qui te bloque et ce que tu vaux vraiment.'
    },
    {
      icon: Hammer,
      title: 'Apprentissage par l’action',
      description: 'Tu développes, designes ou structures un vrai projet, pas un exercice bidon.'
    },
    {
      icon: CheckCircle,
      title: 'Réalisation & Encadrement',
      description: 'Tu exécutes avec un cadre, des feedbacks, et une exigence qui change la donne.'
    },
    {
      icon: Network,
      title: 'Connexion & Opportunité',
      description: 'Tu es visible, valorisé, prêt à closer ou saisir une vraie opportunité.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const handleCtaClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfavDAtUxOQtLL8GXJzHowOu7qx-iSxfAOJKiUQPU5cuWgFvQ/viewform?usp=dialog', '_blank');
  };

  return (
    <section id="method" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title and Subtitle */}
        <motion.div
          className="text-left mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Comment on t’accompagne
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            Avec LesCracks, tu avances étape par étape, dans un cadre clair et humain qui te pousse à te dépasser.
          </p>
        </motion.div>

        {/* Mobile Timeline (Vertical) */}
        <div className="lg:hidden space-y-8 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    <span className="text-blue-600">{index + 1}. </span>
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base">{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden lg:block mb-20">
          <div className="relative">
            {/* Timeline Line */}
            <motion.div
              className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
            />
            <motion.div
              className="absolute top-1/2 left-0 h-1 bg-blue-600 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />

            {/* Steps */}
            <motion.div
              className="flex justify-between"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center w-1/4"
                  variants={itemVariants}
                  onHoverStart={() => setActiveStep(index)}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      activeStep >= index ? 'bg-blue-600 text-white border-blue-600' : 'bg-white border-gray-200'
                    }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <step.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="mt-4 text-lg font-semibold text-gray-900">
                    <span className="text-blue-600">{index + 1}. </span>
                    {step.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm max-w-xs">{step.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Closing Encouragement */}
        <motion.div
          className="text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xl sm:text-2xl text-gray-900 font-semibold mb-4">
            Prêt à franchir ces étapes avec nous ?
          </p>
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
          >
            Commencer le diagnostic
            <motion.div
              className="ml-2"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Method;