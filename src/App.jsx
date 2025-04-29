import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main>
        <div className="relative h-[80vh] md:h-auto w-full overflow-hidden">
          <img
            src="/heroBg.jpg"
            alt="Background"
            className="w-full h-full object-cover object-center md:scale-100 scale-125"
          />
          <div className="absolute inset-0">
            <Header />
            <Hero />
          </div>
        </div>
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}