import { motion } from 'framer-motion'

export function Bio() {
  const cvUrl = import.meta.env.BASE_URL + 'cv.pdf'
  return (
    <section id="bio" className="section py-16">
      <div className="grid lg:grid-cols-3 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-serif">Bio</h2>
          <p className="text-neutral-300">
            Testo descrittivo dell’artista proprietario del portfolio. Enfasi su ricerca,
            temi trattati, media utilizzati, collaborazioni ed esposizioni. Linguaggio essenziale
            e chiaro, con focus sul processo e sulla poetica.
          </p>
          <p className="text-neutral-400">
            (Sostituisci questo testo con la bio reale. È consigliabile un paragrafo breve + uno medio.)
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="card p-6 space-y-3"
        >
          <h3 className="font-serif text-xl">CV</h3>
          <p className="text-neutral-300 text-sm">Scarica il curriculum completo in PDF.</p>
          <a
            href={cvUrl}
            download
            className="inline-block px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-500 transition ring-1 ring-brand-500/30 text-sm"
          >
            Download CV
          </a>
        </motion.aside>
      </div>
    </section>
  )
}