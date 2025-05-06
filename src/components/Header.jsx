import { motion } from 'framer-motion';

const itemVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (customDelay) => ({
    y: 0,
    opacity: 1,
    transition: { delay: customDelay, duration: 0.5 },
  }),
};

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex justify-center items-center h-[15vh]"
    >
      <nav className="flex justify-center items-center">
        <ul className="flex space-x-12 text-shadow-lg/80">
          {[ 
            { href: '#pricing', label: 'Pricing' }, 
            { href: '#contact', label: 'Contact' }, 
            { href: '#services', label: 'Services' }
          ].map((item, index) => (
            <motion.li
              key={item.label}
              custom={0.3 + index * 0.2}
              variants={itemVariants}
              initial="initial"
              animate="animate"
              whileHover={{
                scale: 1.5,
                transition: { duration: 0.2 }, // instant hover
              }}
            >
              <a
                href={item.href}
                className="text-gray-200 hover:text-gray-400 text-lg font-medium"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById(item.href.slice(1));
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
