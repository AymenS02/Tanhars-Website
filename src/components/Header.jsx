import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center items-center h-[15vh]"
    >
      {/* Centered Navigation */}
      <nav className="flex justify-center items-center">
        <ul className="flex space-x-12">
          <motion.li
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#pricing" 
              className="text-gray-200 hover:text-gray-400 text-lg font-medium"
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
            transition={{ delay: 0.5 }}
          >
            <a 
              href="#contact" 
              className="text-gray-200 hover:text-gray-400 text-lg font-medium"
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
            transition={{ delay: 0.7 }}
          >
            <a 
              href="#services" 
              className="text-gray-200 hover:text-gray-400 text-lg font-medium"
              onClick={(e) => {
                e.preventDefault();
                const servicesSection = document.getElementById("services");
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Services
            </a>
          </motion.li>
        </ul>
      </nav>
    </motion.header>
  );
}