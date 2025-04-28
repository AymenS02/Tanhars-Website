import { motion } from 'framer-motion'

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-sm"
    >
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-700">Counselling Services</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a></li>
            <li><a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a></li>
            <li><a href="#booking" className="text-gray-600 hover:text-indigo-600">Book Now</a></li>
          </ul>
        </nav>
      </div>
    </motion.header>
  )
}