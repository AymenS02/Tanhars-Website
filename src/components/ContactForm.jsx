import { motion } from 'framer-motion'
import { useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    preferredTime: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [captchaValue, setCaptchaValue] = useState(null)
  const onChange = (value) => {
    setCaptchaValue(value)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    // which would then email the counsellor
    console.log('Form submitted:', formData)
    alert('Your details have been sent to the counsellor. They will contact you soon.')
    setFormData({
      name: '',
      number: '',
      email: '',
      message: '',
      reason: ''
    })
  }

  return (
    <motion.section 
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 "
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact the Counsellor</h2>
        <div
          className="md:w-[1000px] py-10 mx-auto bg-cover bg-no-repeat bg-center rounded-2xl border border-gray-100 " 
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
                <option value="Counselling - Individual">Counselling - Individual</option>
                <option value="Counselling - Family">Counselling - Family</option>
                <option value="Counselling - Pre-Marital">Counselling - Pre-Marital</option>
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
            
            <div className="mb-6">
              <ReCAPTCHA
                sitekey="6LcBRy8rAAAAAF2f54l8ZuhropW-cPUZ1QqatdCE"
                onChange={captchaValue => onChange(captchaValue)}
              />
            </div>

            <motion.button
              disabled={!captchaValue}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-gold text-black font-bold py-3 px-6 rounded-lg bg-yellow-300 hover:bg-yellow-400 transition-colors"
            >
              Send Details
            </motion.button>
          </motion.form>
        </div>
        
      </div>
    </motion.section>
  )
}