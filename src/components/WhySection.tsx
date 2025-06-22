import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Users, ShieldCheck, Network, ArrowRight } from 'lucide-react';

const WhySection: React.FC = () => {
  const valueBlocks = [
    {
      icon: ClipboardList,
      title: 'Clarté.',
      description: 'On analyse tes forces et tes faiblesses pour t’aider à savoir où tu en es et où tu peux aller.',
      question: 'Qu’est-ce que je gagne personnellement ?'
    },
    {
      icon: Users,
      title: 'Encadrement.',
      description: 'Un suivi humain et régulier pour t’aider à avancer, sans te laisser seul face à tes questions.',
      question: 'Est-ce qu’on m’aide vraiment ?'
    },
    {
      icon: ShieldCheck,
      title: 'Confiance.',
      description: 'Tu construis ton identité et ton positionnement pour te démarquer avec assurance.',
      question: 'Est-ce que je vais construire quelque chose ?'
    },
    {
      icon: Network,
      title: 'Connexion.',
      description: 'On te connecte à un réseau actif de talents et d’opportunités concrètes, pas à un groupe vide.',
      question: 'Est-ce que j’aurai des opportunités ?'
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
    <section id="why" className="py-16 sm:py-24 bg-gray-50">
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
            Pourquoi des jeunes comme toi nous font confiance
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl">
            Trop de talents manquent de cadre pour briller. LesCracks t’offre un accompagnement humain pour clarifier, structurer et connecter tes ambitions.
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
              className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-blue-200 transition-all duration-300"
              variants={itemVariants}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg mb-4">
                <block.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <span className="text-blue-600">{block.title}</span> {block.description.split('.')[1].trim()}
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
            Prêt à poser les bases de ton parcours ?
          </p>
          <button
            onClick={handleCtaClick}
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-300"
          >
            Répondre aux premières questions
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

export default WhySection;