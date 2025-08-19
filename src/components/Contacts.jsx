import { Mail, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contacts() {
  return (
    <section id="contacts" className="section py-16">
      <div className="card p-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-2">Contacts</h2>
            <p className="text-neutral-300">
              Per collaborazioni, commissioni o press kit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="flex md:justify-end gap-4"
          >
            <a href="mailto:ciao@example.com" className="px-4 py-3 rounded-xl ring-1 ring-white/10 hover:bg-white/5 inline-flex items-center gap-2">
              <Mail size={18}/> Email
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="px-4 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 transition inline-flex items-center gap-2">
              <Instagram size={18}/> Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}