import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Sevices from './components/Services';
// import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import Policy from './pages/Policy';

function HomePage() {
  return (
    <div className="font-Garamond min-h-screen bg-[#0e1831]  text-gray-100">
      <main>
        <div className="mask-b-from-85% mask-b-to-95%">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative h-[80vh] lg:h-auto w-full overflow-hidden"
          >
            <img
              src="/heroBg.jpg"
              alt="Background"
              className="w-full h-full object-cover object-center md:scale-100 scale-125"
            />

            <div className="absolute inset-0">
              {/* Delay nested components slightly */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <Header />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Hero />
              </motion.div>
            </div>

            <motion.img
              initial={{ y: 10}}
              animate={{ y: 0, rotate: 345}}
              transition={{ delay: 1.2, duration: 3.8 }}
              
              src="/heroSpinnerBg.png"
              alt="Spinner"
              className="w-auto lg:h-[95%] h-[20%] absolute top-3/4 md:top-1/2 right-[85vw] md:right-[77vw] -translate-y-1/2"
            />

            <motion.img
              initial={{ y: 10}}
              animate={{ y: 0, rotate: 345}}
              transition={{ delay: 1.4, duration: 3.8 }}
              src="/heroSpinnerBg.png"
              alt="Spinner"
              className="w-auto lg:h-[95%] h-[20%] absolute top-1/4 left-[80vw] -translate-y-1/2"
            />
          </motion.div>
        </div>

        <div className='bg-gradient-to-b from-[#0e1831] to-[#213a63]' >
          
          <About />

          <Sevices />

          {/* <Pricing /> */}

          <ContactForm />

        </div>

      </main>

      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
    </Router>
  );
}
