import { motion } from 'framer-motion'

export function Bio() {
  return (
    <section id="bio" className="relative py-24 min-h-screen w-screen flex items-center justify-center overflow-hidden">

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-2 space-y-5"
        >
          <h2 className="text-2xl font-bold uppercase tracking-wide text-stone-900">Bio</h2>
          <p className="mt-2 text-sm text-stone-700 leading-relaxed">
            Testo descrittivo dell’artista. Focus su ricerca, poetica, collaborazioni, pubblicazioni ed esposizioni.
          </p>
          <p className="mt-2 text-sm text-stone-500">
            (Sostituisci con il testo reale; consigliati 1–2 paragrafi concisi in tono editoriale.)
          </p>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="card p-6 space-y-3"
        >
          <h3 className="text-sm font-semibold tracking-wide uppercase text-stone-900">CV</h3>
          <p className="text-xs text-stone-500">Scarica il curriculum completo (PDF).</p>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download="Vanessa_Ruiz_CV.pdf"
            className="inline-block px-3 py-1.5 rounded-md bg-stone-900 text-white hover:bg-stone-700 transition text-xs font-medium"
          >
            Download CV
          </a>
        </motion.aside>
      </div>
    </section>
  )
}