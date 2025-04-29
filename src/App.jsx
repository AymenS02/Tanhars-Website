import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
      <div className="relative w-full">
        <img src="/heroBg.jpg" alt="Background" className="w-full object-cover" />
        <div className="absolute inset-0">
          <Header />
          <Hero />
        </div>
      </div>
        <Pricing />
        <ContactForm />
        <Booking />
      </main>
      <Footer />
    </div>
  )
}