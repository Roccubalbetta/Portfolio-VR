import { motion } from 'framer-motion'

const groups = [
  {
    title: 'Serie A',
    images: ['strautem/group-a-1.jpg', 'strautem/group-a-2.jpg']
  },
  {
    title: 'Serie B',
    images: ['strautem/group-b-1.jpg', 'strautem/group-b-2.jpg']
  }
]

export function StrautemColer() {
  return (
    <section id="strautem_coler" className="section py-16">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-serif">Strautem & Coler</h2>
        <p className="text-neutral-400">Sottogruppi di immagini: titolo a comparsa su hover.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
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
                  className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-neutral-900/40"
                >
                  <img
                    src={import.meta.env.BASE_URL + src}
                    alt={`${g.title} ${i+1}`}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                  <figcaption className="absolute inset-0 flex items-end p-3 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 hover:opacity-100 transition">
                    <span className="text-sm text-white/90">{g.title}</span>
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