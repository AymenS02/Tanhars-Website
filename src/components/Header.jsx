import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu } from 'react-icons/fi';
import { useState } from 'react';

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <div className="container mx-auto px-[15vw] py-6 flex justify-between items-center h-[15vh]">
        {/* Logo and Menu Icon */}
        <div className="flex items-center space-x-4">
          <FiMenu 
            className="lg:hidden block text-white h-7 w-7 cursor-pointer" 
            onClick={() => setOpen(!open)} 
          />
          <h1 className="text-2xl font-bold text-white">
            Counselling Services
          </h1>
        </div>

        {/* Navigation for Large Screens */}
        <nav className="hidden lg:flex lg:space-x-6">
          <ul className="flex space-x-7">
            <motion.li
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#pricing" 
                className="text-gray-200 hover:text-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  const pricingSection = document.getElementById("pricing");
                  if (pricingSection) {
                    pricingSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Pricing
              </a>
            </motion.li>
            
            <motion.li
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#contact" 
                className="text-gray-200 hover:text-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Contact
              </a>
            </motion.li>
            
            <motion.li
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <a 
                href="#booking" 
                className="text-gray-200 hover:text-gray-400"
                onClick={(e) => {
                  e.preventDefault();
                  const bookingSection = document.getElementById("booking");
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Book Now
              </a>
            </motion.li>
          </ul>
        </nav>

        {/* Dropdown Menu for Small Screens */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="absolute top-[90%] left-0 mt-2 w-full bg-white shadow-lg z-50"
            >
              <ul className="flex flex-col space-y-4 p-4">
                <li><a href="#pricing" className="text-gray-600 hover:text-[#13244F]">Pricing</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-[#13244F]">Contact</a></li>
                <li><a href="#booking" className="text-gray-600 hover:text-[#13244F]">Book Now</a></li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}