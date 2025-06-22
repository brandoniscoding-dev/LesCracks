import React from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import WhatYouGet from './components/WhatYouGet';
import Method from './components/Method';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero />
        <WhySection />
        <WhatYouGet />
        <Method />
        <Testimonials />
        <About />
        <FAQ />
        <FinalCTA />
      </motion.main>
    </div>
  );
}

export default App;