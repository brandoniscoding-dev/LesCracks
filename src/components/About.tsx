import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, MessageSquare, ExternalLink, Target, Lightbulb, Zap } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { getContent } from '../data/content';

const About: React.FC = () => {
  const { language } = useLanguage();
  const content = getContent(language);

  const concernedIcons = [Target, Lightbulb, Zap, Target];

  return (
    <section className="py-16 sm:py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 bg-blue-100/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-80 h-80 bg-blue-100/10 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
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
            {content.about.title}
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.about.subtitle}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center mb-12 sm:mb-16">
          {/* Image Side */}
          <motion.div
            className="flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Main Image Container */}
              <motion.div
                className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl shadow-lg overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* ✅ Photo réelle */}
                <img
                  src="/images/photo-brandon.jpeg" // ou importée si tu préfères
                  alt="Kamga Brandon"
                  className="w-full h-full object-cover rounded-2xl"
                />

                {/* Gradient overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-3xl"
                  animate={{
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 bg-white rounded-3xl p-4 sm:p-6 shadow-md border border-blue-100"
                animate={{
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Target className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 bg-blue-100 rounded-3xl p-4 sm:p-6 shadow-md border border-blue-200"
                animate={{
                  y: [0, 15, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            className="text-center lg:text-left space-y-6 sm:space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                {content.about.name}
              </motion.h3>
              <motion.p className="text-xl sm:text-2xl text-blue-600 font-semibold mb-2">
                {content.about.role}
              </motion.p>
              <motion.p className="text-lg text-blue-600 font-semibold">
                {content.about.speciality}
              </motion.p>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {content.about.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="text-center bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-blue-100">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">3+</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold">Années</div>
              </div>
              <div className="text-center bg-white rounded-2xl p-3 sm:p-4 shadow-sm border border-blue-100">
                <div className="text-xl sm:text-2xl font-bold text-blue-600 mb-1">99%</div>
                <div className="text-xs sm:text-sm text-gray-600 font-semibold">Satisfaction</div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <motion.a
                href="https://www.linkedin.com/in/brandon-duclerc-tamwa-kamga/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                href="https://wa.me/237650830057"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare size={20} />
              </motion.a>

              <motion.a
                href="https://porfolio-olive-ten.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={20} />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-blue-100 mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.about.values.title}
          </motion.h3>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {content.about.values.items.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 p-4 sm:p-6 bg-blue-50 rounded-2xl border border-blue-100"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.div
                  className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.2 }}
                >
                  ✓
                </motion.div>
                <span className="text-gray-700 leading-relaxed font-medium text-sm sm:text-base">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* "You're concerned if" section */}
        <motion.div
          className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm border border-blue-100"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {content.concerned.title}
          </motion.h3>

          <motion.p
            className="text-lg sm:text-xl text-gray-600 text-left mb-8 sm:mb-12 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {content.concerned.subtitle}
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
            {content.concerned.items.map((item, index) => {
              const IconComponent = concernedIcons[index % concernedIcons.length];
              return (
                <motion.div
                  key={index}
                  className="group flex items-start space-x-4 p-4 sm:p-6 bg-blue-50 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <motion.div
                    className="flex-shrink-0"
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-blue-600" />
                    </div>
                  </motion.div>
                  <div>
                    <p className="text-gray-800 font-semibold mb-2 leading-relaxed text-sm sm:text-base">
                      {item.text}
                    </p>
                    <p className="text-gray-600 text-xs sm:text-sm">
                      {item.detail}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
