import { motion } from 'framer-motion'

export function Bio() {
  return (
    <section id="bio" className="relative py-24 min-h-screen w-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full -z-10">
        <img
          src="artworks/biobg.jpg"
          className="w-full h-full object-cover filter grayscale"
          aria-hidden="true"
          alt=""
        />
        <div className="absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 grid lg:grid-cols-3 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="lg:col-span-2 space-y-5"
        >
          <h2 className="text-4xl font-serif text-white/80">Bio</h2>
          <p className="text-stone-700 leading-relaxed text-white/80">
            Testo descrittivo dell’artista. Focus su ricerca, poetica, collaborazioni, pubblicazioni ed esposizioni.
          </p>
          <p className="text-stone-600 text-white/80">
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
          <h3 className="font-serif text-xl">CV</h3>
          <p className="text-stone-700 text-sm">Scarica il curriculum completo (PDF).</p>
          <a
            href={`${import.meta.env.BASE_URL}cv.pdf`}
            download="Vanessa_Ruiz_CV.pdf"
            className="inline-block px-4 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition text-sm"
          >
            Download CV
          </a>
        </motion.aside>
      </div>
    </section>
  )
}