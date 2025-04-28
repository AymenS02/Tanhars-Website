import { motion } from 'framer-motion'
import heroBg from '../assets/heroBg.jpg';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, white, rgba(255, 255, 255, 0) 3%, rgba(255, 255, 255, 0) 97%, white), url(${heroBg})`,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Professional Counselling Services
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 mb-8"
          >
            Compassionate support for your mental health and wellbeing journey.
          </motion.p>
          <motion.a
            href="#contact"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}