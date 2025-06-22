import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ClipboardList, Users, ShieldCheck, Star } from 'lucide-react';

const WhatYouGet: React.FC = () => {
  const valueBlocks = [
    {
      icon: ClipboardList,
      title: 'Un cadre clair.',
      description: 'Tu sais exactement ce qu’on attend de toi, semaine après semaine, avec des objectifs concrets et atteignables.',
      question: 'Est-ce que je vais être guidé ?'
    },
    {
      icon: Star,
      title: 'Un vrai repositionnement.',
      description: 'On t’aide à raconter ton parcours de manière percutante, pour te démarquer auprès des bonnes personnes.',
      question: 'Est-ce que ça m’aide à me valoriser ?'
    },
    {
      icon: ShieldCheck,
      title: 'Un profil qui attire.',
      description: 'Tu ressors avec un projet valorisé, une présentation claire et des livrables qui prouvent ta valeur.',
      question: 'Est-ce que ça mène à quelque chose ?'
    },
    {
      icon: Users,
      title: 'Une équipe à tes côtés.',
      description: 'Pas de plateforme froide : une équipe humaine qui t’écoute, te conseille et t’accompagne jusqu’au bout.',
      question: 'Est-ce que je reste seul ?'
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
    <section id="what-you-get" className="py-16 sm:py-24 bg-white">
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
            Ce que tu gagnes avec LesCracks
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            Pas de promesses vides ni de cours en ligne. Juste un accompagnement concret pour te structurer et te démarquer.
          </p>
        </motion.div>

        {/* Value Blocks */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueBlocks.map((block, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <block.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span className="text-blue-600">{block.title}</span>
              </h3>
              <p className="text-gray-600 text-base">{block.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing CTA */}
        <motion.div
          className="text-left mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xl sm:text-2xl text-gray-900 font-semibold mb-4">
            Si ça résonne avec toi, laisse-nous te découvrir.
          </p>
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
          >
            Commencer maintenant
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

export default WhatYouGet;