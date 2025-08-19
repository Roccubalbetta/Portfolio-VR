import { ArtworkCard } from './ArtworkCard'
import { motion } from 'framer-motion'

export function Gallery({ artworks = [] }) {
  return (
    <section id="opere" className="section py-20">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif">Opere selezionate</h2>
          <p className="text-neutral-400">Una selezione aggiornata dei lavori recenti.</p>
        </div>
        <motion.a
          whileHover={{ x: 2 }}
          href="#contatti"
          className="hidden md:inline-block text-sm underline decoration-dotted underline-offset-4 text-neutral-300 hover:text-white"
        >
          Richiedi catalogo completo
        </motion.a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {artworks.map(a => <ArtworkCard key={a.id} art={a} />)}
      </div>
    </section>
  )
}
