import { Mail, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contacts() {
  return (
    <section id="contacts" className="section py-24">
      <div className="card p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-4xl font-serif mb-2">Contacts</h2>
            <p className="text-stone-700">
              Per collaborazioni, commissioni o press.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex md:justify-end gap-3"
          >
            <a href="mailto:ciao@example.com" className="px-4 py-3 rounded-full border border-brand-line hover:bg-stone-100 inline-flex items-center gap-2">
              <Mail size={18}/> Email
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="px-4 py-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 inline-flex items-center gap-2">
              <Instagram size={18}/> Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}