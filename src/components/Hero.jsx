import { motion } from 'framer-motion'
import heroBg from '../assets/heroBg.jpg';

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="py-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('../assets/heroBg.jpg')" }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
          >
            Tanhar Khan
          </motion.h1>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-2xl font-bold text-gray-200 mb-6"
          >
            Professional Website & Counselling Services
          </motion.h1>

          <motion.button
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="inline-block bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-500"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}