import { motion } from 'framer-motion'

// Ogni gruppo = un progetto. Puoi sostituire i path con le tue immagini reali.
const groups = [
  {
    title: 'Bend it like Lyotard',
    year: 2025,
    images: [
      'artworks/group-a-1.svg',
      'artworks/group-a-1.svg',
      'artworks/group-a-1.svg',
      'artworks/group-a-1.svg',
    ],
  },
  {
    title: 'Do You Like Me?',
    year: 2025,
    images: [
      'artworks/group-b-1.svg',
      'artworks/group-b-1.svg',
      'artworks/group-b-1.svg',
      'artworks/group-b-1.svg',
    ],
  },
]

export function StrautemColer() {
  return (
    <section id="strautem_coler" className="section py-24 w-full">
      <header className="mb-8">
        <h2 className="text-4xl font-serif">Strautem & Coler</h2>
        <p className="text-stone-600">Carosello orizzontale con gruppi/progetti (4 immagini) e titolo a comparsa.</p>
      </header>

      {/* Carosello orizzontale con snap */}
      <div
        className="relative flex gap-8 overflow-x-auto scroll-smooth pb-4 -mx-6 px-6 md:-mx-10 md:px-10"
        aria-label="Progetti in carosello"
      >
        {groups.map((g, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group relative shrink-0 w-[92vw] md:w-[86vw] lg:w-[78vw]"
          >
            {/* Griglia 4 immagini in riga (wrap su schermi piccoli) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-0">
              {g.images.map((src, i) => (
                <figure
                  key={i}
                  className="relative overflow-hidden"
                >
                  <img
                    src={import.meta.env.BASE_URL + src}
                    alt={`${g.title} — immagine ${i + 1}`}
                    className="w-full h-36 sm:h-48 object-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>

            {/* Titolo a comparsa centrato sopra le foto */}
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <div className="transition-opacity duration-300 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100">
                <span className="inline-block font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 px-3 py-1 rounded">
                  {g.title}, {g.year}
                </span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Paginatore a pallini (visivo) */}
      <div className="mt-6 flex gap-2">
        {groups.map((_, i) => (
          <span key={i} className="h-1.5 w-6 rounded-full bg-stone-300" />
        ))}
      </div>
    </section>
  )
}