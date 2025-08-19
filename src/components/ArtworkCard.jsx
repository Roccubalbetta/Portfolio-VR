import { motion } from 'framer-motion'

export function ArtworkCard({ art }) {
  const src = import.meta.env.BASE_URL + art.img
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card overflow-hidden group"
    >
      <img src={src} alt={art.title} className="w-full h-64 object-cover transition duration-300 group-hover:scale-105" />
      <figcaption className="p-4 flex items-center justify-between">
        <div>
          <h3 className="font-serif text-lg">{art.title}</h3>
          <p className="text-sm text-neutral-400">{art.medium} &middot; {art.year}</p>
        </div>
        <a href={src} className="text-sm underline decoration-dotted underline-offset-4 text-neutral-300 hover:text-white">Apri</a>
      </figcaption>
    </motion.figure>
  )
}