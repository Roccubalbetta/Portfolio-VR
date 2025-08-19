import { motion } from 'framer-motion'

export function Work({ projects = [], onOpen }) {
  return (
    <section id="work" className="section py-24">
      <header className="mb-10">
        <h2 className="text-4xl font-serif">Work</h2>
        <p className="text-stone-600">Selezione di progetti.</p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(p => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="cursor-pointer"
            onClick={() => onOpen(p)}
          >
            <figure className="overflow-hidden rounded-[14px] border border-brand-line bg-white">
              <img
                src={import.meta.env.BASE_URL + p.cover}
                alt={p.title}
                className="w-full h-64 object-cover transition duration-500 hover:scale-[1.02]"
                loading="lazy"
              />
            </figure>
            <div className="mt-3 flex items-baseline justify-between">
              <h3 className="font-serif text-lg">{p.title}</h3>
              <span className="text-xs uppercase tracking-wide text-stone-500">{p.year}</span>
            </div>
            <p className="text-sm text-stone-600">{p.tags.join(' · ')}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}