import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-[#0e1831] text-white py-4 pt-20 pb-10"
    >
      <div className="mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <p className="text-sm">
            <a href="/policy" className="underline text-white hover:text-gray-300">
              Privacy Policy
            </a>
          </p>
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Counselling Services. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}