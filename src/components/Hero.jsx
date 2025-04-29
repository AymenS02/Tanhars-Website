import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full flex items-center justify-center bg-cover bg-center bg-no-repeat pb-20" style={{ height: 'calc(100% - 15vh)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-yellow-300 mb-6"
          >
            Tanhar Khan
          </motion.h1>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl 2lg:text-4xl font-bold text-gray-200 mb-6"
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
            className="inline-block bg-yellow-300 text-black font-bold px-6 py-3 rounded-lg hover:bg-yellow-400 transition-colors duration-500 border border-black"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}