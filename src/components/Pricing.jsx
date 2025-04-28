import { motion } from 'framer-motion';
import pricingBg from '../assets/pricingBg.jpg';

export default function Pricing() {
  return (
    <motion.section 
      id="pricing"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Pricing</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div
            whileHover={{ 
              scale: 1.025,
             }}
            transition={{ duration: 0.15 }}
            className="p-8 rounded-xl shadow-md border border-gray-100 text-white"
            style={{
              backgroundImage: `url(${pricingBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h3 className="text-2xl font-semibold mb-4">30 Minute Session</h3>
            <p className="text-4xl font-bold mb-4">$50</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Focused discussion
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white text-opacity-80 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Quick check-ins
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Follow-up sessions
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            whileHover={{ 
              scale: 1.025,
             }}
            transition={{ duration: 0.15 }}
            className="p-8 rounded-xl shadow-md border border-gray-100 text-white"
            style={{
              backgroundImage: `url(${pricingBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            <h3 className="text-2xl font-semibold mb-4">1 Hour Session</h3>
            <p className="text-4xl font-bold mb-4">$90</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                In-depth conversation
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Comprehensive support
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Initial consultations
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}