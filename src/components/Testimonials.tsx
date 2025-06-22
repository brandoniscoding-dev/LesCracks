import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const testimonials = {
  title: 'Ils ont explosé leurs limites',
  subtitle: 'Leurs succès parlent d\'eux-mêmes',
  items: [
    {
      name: 'Awa',
      role: 'Designer UI/UX',
      company: 'Freelance',
      quote: 'Mon portfolio a décollé, j’ai eu plusieurs contrats en quelques mois.',
      result: '3 contrats en cours',
    },
    {
      name: 'Kofi',
      role: 'Développeur',
      company: 'Startup locale',
      quote: 'Projet livré en un mois, maintenant je travaille dans une startup en croissance.',
      result: 'Premier emploi stable',
    },
    {
      name: 'Léa',
      role: 'Étudiante',
      company: 'Université',
      quote: 'J’ai lancé mon idée avant la fin de mes études, le jury a été impressionné.',
      result: 'Projet étudiant reconnu',
    },
    {
      name: 'Mamadou',
      role: 'En reconversion',
      company: 'Ancien commerçant',
      quote: 'Transition réussie vers la tech, 6 mois après, j’ai mon job de rêve.',
      result: 'Reconversion accomplie',
    },
    {
      name: 'Sarah',
      role: 'Entrepreneure',
      company: 'Fondatrice locale',
      quote: 'Mon MVP est sorti en 2 mois grâce à un accompagnement concret.',
      result: 'Startup lancée',
    },
    {
      name: 'Alex',
      role: 'Freelance',
      company: 'Indépendant',
      quote: 'Première mission trouvée, le réseau m’a ouvert beaucoup de portes.',
      result: '150% d’augmentation de tarifs',
    },
  ],
};

const getAvatarColor = (index: number) => {
  const colors = [
    'from-blue-500 to-blue-600',
    'from-blue-600 to-indigo-600',
    'from-blue-500 to-cyan-600',
    'from-blue-600 to-teal-600',
    'from-blue-500 to-blue-700',
    'from-blue-600 to-sky-600',
  ];
  return colors[index % colors.length];
};

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(scrollRef, { once: false });

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials.items, ...testimonials.items];

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: ['0%', `-${50 * testimonials.items.length}%`],
        transition: {
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    }
  }, [isInView, controls]);

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-100/15 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-left mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {testimonials.title}
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {testimonials.subtitle}
          </motion.p>
        </motion.div>

        {/* Infinite Scroll Container */}
        <motion.div
          ref={scrollRef}
          className="flex space-x-6 sm:space-x-8 pb-8 mb-16"
          animate={controls}
          style={{ x: 0 }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <motion.div
              key={`${testimonial.name}-${index}`}
              className="flex-shrink-0 w-80 sm:w-96 bg-gray-50 rounded-xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
              whileHover={{
                scale: 1.03,
                y: -5,
                boxShadow: '0 15px 30px rgba(59, 130, 246, 0.1)',
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % testimonials.items.length) * 0.1 }}
            >
              {/* Background gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />

              <div className="relative z-10">
                {/* Quote Icon */}
                <motion.div
                  className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-2xl text-blue-600">💬</span>
                </motion.div>

                {/* Quote */}
                <blockquote className="text-gray-700 text-base sm:text-lg leading-relaxed mb-6 italic font-medium">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${getAvatarColor(
                        index,
                      )} rounded-full flex items-center justify-center text-white font-bold text-lg mr-4 shadow-sm`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {testimonial.name.charAt(0)}
                    </motion.div>
                    <div>
                      <div className="font-bold text-gray-900 text-base sm:text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-blue-600 font-semibold text-sm sm:text-base">
                        {testimonial.role}
                      </div>
                      <div className="text-gray-500 text-xs sm:text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </div>

                {/* Result Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-3 sm:px-4 py-2 rounded-full font-semibold text-xs sm:text-sm mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                  {testimonial.result}
                </motion.div>
              </div>

              {/* Decorative corner element */}
              <motion.div
                className="absolute top-4 right-4 w-6 h-6 bg-blue-200/50 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.3,
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Manual scroll hint for mobile */}
        <motion.div
          className="flex justify-center mb-16 lg:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="flex items-center text-gray-500 bg-gray-100 px-6 py-3 rounded-full">
            <span className="mr-3 text-base sm:text-lg">Glisse pour voir plus</span>
            <motion.div animate={{ x: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
              <span className="text-xl sm:text-2xl">👆</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;