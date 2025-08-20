import { motion } from 'framer-motion'

export function Work({ projects = [], onOpen }) {
  return (
    <section id="work" className="section py-24 min-h-screen w-full flex flex-col items-center">
      <header className="mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-serif uppercase tracking-[0.18em]">Work</h2>
        <p className="text-stone-500 text-sm md:text-base">Selezione di progetti.</p>
      </header>

      {/* Grid responsive: auto-fill + minmax per evitare sovrapposizioni */}
      <div
        className="mx-auto w-full max-w-[1600px]
                   grid gap-2
                   [grid-template-columns:repeat(auto-fill,minmax(84px,1fr))]
                   sm:[grid-template-columns:repeat(auto-fill,minmax(100px,1fr))]
                   md:[grid-template-columns:repeat(auto-fill,minmax(112px,1fr))]
                   lg:[grid-template-columns:repeat(auto-fill,minmax(120px,1fr))]"
      >
        {projects.map((p) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="group cursor-pointer select-none"
            onClick={() => onOpen(p)}
            aria-label={`Apri progetto ${p.title}`}
          >
            {/* Tile quadrata con caption overlay per evitare cambi di altezza */}
            <figure className="relative aspect-square w-full overflow-hidden bg-white">
              <img
                src={import.meta.env.BASE_URL + p.cover}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.03]"
              />
              {/* overlay gradient + caption, non influisce sul layout */}
              <figcaption
                className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
              >
                <div className="bg-white/85 backdrop-blur-[2px] text-center px-2 py-1">
                  <div className="flex items-baseline justify-between gap-2 text-[11px] leading-tight">
                    <span className="font-serif text-[12px] text-stone-900">{p.title}</span>
                    <span className="text-[10px] uppercase tracking-wide text-stone-600">{p.year}</span>
                  </div>
                  <p className="text-[10px] text-stone-600 line-clamp-1">{p.tags.join(' · ')}</p>
                </div>
              </figcaption>
            </figure>
          </motion.article>
        ))}
      </div>
    </section>
  )
}