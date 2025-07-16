import { motion } from 'framer-motion'
import { useState } from 'react'
import Swal from 'sweetalert2'

export default function ContactForm() {
  const twelveHours = 12 * 60 * 60 * 1000;
  const web3formsKey = '0c3fa56a-8d7f-454b-bfab-80b5dc3f7c7e'; // Replace with your actual key

  const getInitialSubmittedState = () => {
    const lastSubmitted = localStorage.getItem('contactFormSubmittedAt');
    if (!lastSubmitted) return false;
    const now = Date.now();
    return now - parseInt(lastSubmitted, 10) < twelveHours;
  };

  const [submitted, setSubmitted] = useState(getInitialSubmittedState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState(''); // Honeypot state

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    preferredTime: '',
    number: '',
    reason: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's likely a bot
    if (honeypot) {
      console.log('Bot detected by honeypot');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          name: formData.name,
          email: formData.email,
          number: formData.number,
          reason: formData.reason,
          message: formData.message,
          botcheck: honeypot // Web3Forms will check this field
        }),
      });

      const result = await response.json();
      if (result.success) {
        // Save submission timestamp
        localStorage.setItem('contactFormSubmittedAt', Date.now());
        setSubmitted(true);
        
        Swal.fire({
          title: 'Success!',
          text: 'Your details have been sent to the counsellor. They will contact you soon.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#f59e0b'
        });

        setFormData({
          name: '',
          number: '',
          email: '',
          message: '',
          reason: ''
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message || 'There was a problem submitting your form. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
        confirmButtonColor: '#f59e0b'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">Contact the Counsellor</h2>
        <div
          className="lg:w-[1000px] py-10 mx-auto bg-cover bg-no-repeat bg-center rounded-2xl border border-gray-100 " 
          style={{ backgroundImage: "url('/pricingBg2.jpg')",
                   boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)'}}
        >
          <motion.form 
            onSubmit={handleSubmit}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl ml-auto mr-20 p-8 rounded-xl shadow-md text-white"
          >
            <input type="hidden" name="access_key" value={web3formsKey} />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            
            {/* Honeypot Field - hidden from humans but visible to bots */}
            <div className="absolute left-[-5000px]" aria-hidden="true">
              <input 
                type="text" 
                name="botcheck" 
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex="-1"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-white mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="number" className="block text-white mb-2">Phone Number</label>
              <input
                type="tel"
                id="number"
                name="number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-white mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="preferredTime" className="block text-white mb-2">Reason for Booking</label>
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black"
              >
                <option value="">Purpose of booking</option>
                <option value="Pre-marital / Nikkah Advice">Pre-marital / Nikkah Advice</option>
                <option value="Academic & Islamic Education Consulting">Academic & Islamic Education Consulting</option>
                <option value="General Advice">General Advice</option>
                <option value="Counselling - Individual">Counselling - Individual</option>
                <option value="Counselling - Family">Counselling - Family</option>
              </select>
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-white mb-2">Your Message/Additional Information</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Tell us a little about what you'd like to discuss."
              ></textarea>
            </div>

            {!submitted && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-black font-bold py-3 px-6 rounded-lg bg-yellow-300 hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Details'}
              </motion.button>
            )}

            {submitted && (
              <p className="text-center text-yellow-300 mt-4">
                You've already submitted. Please wait 12 hours before submitting again.
              </p>
            )}

          </motion.form>
        </div>
      </div>
    </motion.section>
  )
}