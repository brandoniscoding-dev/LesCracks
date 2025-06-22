import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { getContent } from '../data/content';

const FAQ: React.FC = () => {
  const { language } = useLanguage();
  const content = getContent(language);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-blue-100/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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
            {content.faq.title}
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-3xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {content.faq.subtitle}
          </motion.p>
        </motion.div>

        <div className="space-y-6">
          {content.faq.items.map((item, index) => (
            <motion.div
              key={index}
              className="bg-blue-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-blue-100 hover:border-blue-200"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              {/* Question */}
              <motion.button
                className="w-full px-8 py-8 text-left flex items-center justify-between hover:bg-white/50 transition-colors duration-200 group"
                onClick={() => toggleItem(index)}
                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-200 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <HelpCircle className="w-6 h-6 text-blue-600" />
                  </motion.div>
                  <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 pr-4 group-hover:text-blue-600 transition-colors duration-300">
                    {item.question}
                  </h3>
                </div>
                
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <motion.div
                    className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ChevronDown className="w-6 h-6 text-blue-600" />
                  </motion.div>
                </motion.div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className="px-8 pb-8"
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -20, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div className="border-t border-blue-200 pt-6 ml-16">
                        <motion.p 
                          className="text-gray-600 leading-relaxed text-lg"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.2 }}
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-left mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div
            className="bg-blue-50 rounded-3xl p-8 border border-blue-100 inline-block"
            whileHover={{ scale: 1.02 }}
          >
            <motion.p
              className="text-gray-700 mb-6 text-xl font-semibold"
              animate={{
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {content.ui.moreQuestions}
            </motion.p>
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSeAglUzlCYKVkMmZg93hX6yL2NSWW3bfRFyFYoYoaiVCRbhnA/viewform?usp=dialog', '_blank')}
            >
              {content.ui.askQuestion}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;