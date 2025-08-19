import { motion } from 'framer-motion'

export function Work({ projects = [], onOpen }) {
  return (
    <section id="work" className="section py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-serif">Work</h2>
        <p className="text-neutral-400">Anteprime dei progetti.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/40 cursor-pointer"
            onClick={() => onOpen(p)}
          >
            <img
              src={import.meta.env.BASE_URL + p.cover}
              alt={p.title}
              className="w-full h-64 object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-serif text-lg text-white">{p.title}</h3>
              <p className="text-sm text-neutral-300">{p.year} · {p.tags.join(' · ')}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}