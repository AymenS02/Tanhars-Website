import { motion } from 'framer-motion'

export default function Booking() {
  return (
    <motion.section 
      id="booking"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Book Your Session</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-indigo-50 p-8 rounded-xl border border-indigo-100"
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Single Session</h3>
            <p className="text-gray-600 mb-6">Book a one-time counselling session.</p>
            <a 
              href="#"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Book Now
            </a>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-indigo-50 p-8 rounded-xl border border-indigo-100"
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Package Deal</h3>
            <p className="text-gray-600 mb-6">Purchase multiple sessions at a discounted rate.</p>
            <a 
              href="#"
              className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              View Packages
            </a>
          </motion.div>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Payment Methods</h3>
          <p className="text-gray-600 mb-4">We accept the following payment methods:</p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-700 font-medium">PayPal</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-700 font-medium">Credit Card</span>
            </div>
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <span className="text-gray-700 font-medium">Bank Transfer</span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}