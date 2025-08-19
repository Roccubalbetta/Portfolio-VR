import { motion } from 'framer-motion'

const groups = [
  { title: 'Serie A', images: ['strautem/group-a-1.svg', 'strautem/group-a-1.svg'] },
  { title: 'Serie B', images: ['strautem/group-b-1.svg', 'strautem/group-b-1.svg'] },
]

export function StrautemColer() {
  return (
    <section id="strautem_coler" className="section py-24">
      <header className="mb-10">
        <h2 className="text-4xl font-serif">Strautem & Coler</h2>
        <p className="text-stone-600">Sottogruppi con titoli a comparsa.</p>
      </header>

      <div className="grid gap-10 md:grid-cols-2">
        {groups.map((g, idx) => (
          <div key={idx} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              {g.images.map((src, i) => (
                <motion.figure
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="relative overflow-hidden rounded-[14px] border border-brand-line bg-white"
                >
                  <img
                    src={import.meta.env.BASE_URL + src}
                    alt={`${g.title} ${i+1}`}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-white/80 via-white/10 to-transparent opacity-0 hover:opacity-100 transition">
                    <span className="text-[12px] uppercase tracking-wide text-stone-800">{g.title}</span>
                  </figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}