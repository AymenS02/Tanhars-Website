import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 2.8 }}
      className="2xl:mt-[10%] xl:mt-20 max-md:mt-[20vh] h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat pb-20" style={{ height: 'calc(100% - 15vh)' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat xl:gap-5">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl 2xl:text-9xl font-bold text-yellow-300 mb-6 text-shadow-lg/80"
          >
            Tanhar Khan
          </motion.h1>

          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2}}
            className="text-2xl 2xl:text-3xl font-bold text-gray-200 mb-6 text-shadow-lg/50"
          >
            Education and Counselling Services
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
            className="inline-block bg-yellow-300 text-black font-bold px-6 py-3 2xl:px-16 2xl:py-3 2xl:text-xl rounded-lg hover:bg-yellow-400 transition-colors duration-500 border border-black text-shadow-sm cursor-pointer shadow-lg/50"
          >
            Contact Me
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}