import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    if (selectedProject) setActiveIndex(0)
  }, [selectedProject])
  return (
    <section id="strautem_coler" className="relative w-screen min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6 min-h-[calc(100vh- theme(space.16))] md:min-h-[calc(100vh- theme(space.24))] flex flex-col justify-center gap-10 md:gap-14">
        <header className="mb-0 text-center">
          <h2 className="text-5xl font-serif mb-2">Strautem & Coler</h2>
          <p className="text-stone-600">Carosello orizzontale con gruppi/progetti (4 immagini) e titolo a comparsa.</p>
        </header>

        {/* Carosello orizzontale con snap */}
        <div className="flex-1 flex items-center justify-center mt-10 md:mt-16">
          <div
            className="relative flex gap-16 overflow-x-auto scroll-smooth pb-4 -mx-6 px-6 md:-mx-10 md:px-10"
            aria-label="Progetti in carosello"
          >
            {groups.map((g, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group relative shrink-0 w-[92vw] md:w-[86vw] lg:w-[78vw] cursor-pointer outline-none"
                role="button"
                tabIndex={0}
                onClick={() => setSelectedProject(g)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedProject(g) } }}
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
        </div>

        {/* Paginatore a pallini (visivo) */}
        <div className="mt-2 md:mt-0 flex gap-2">
          {groups.map((_, i) => (
            <span key={i} className="h-1.5 w-6 rounded-full bg-stone-300" />
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true" aria-label={`${selectedProject.title} — dettagli progetto`}>
          <div className="relative w-full max-w-6xl max-h-[92vh] overflow-auto rounded-2xl bg-white shadow-xl">
            {/* Header modal */}
            <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-brand-line/50 bg-white/80 backdrop-blur px-5 py-4">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl">{selectedProject.title}, {selectedProject.year}</h3>
                {/* Inserisci qui eventuale sottotitolo/descrizione */}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="rounded-full border border-brand-line/60 px-3 py-1.5 text-sm hover:bg-stone-100"
                aria-label="Chiudi"
              >
                Chiudi ✕
              </button>
            </div>

            {/* Corpo modal: immagine grande + galleria orizzontale + descrizione */}
            <div className="px-5 py-5 md:px-8 md:py-6">
              {(() => {
                const gallery = selectedProject.gallery || selectedProject.images || []
                const current = gallery[activeIndex] || gallery[0]
                return (
                  <>
                    {/* Immagine principale */}
                    <div className="relative w-full mb-4 md:mb-6">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={activeIndex}
                          initial={{ opacity: 0, x: 40 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -40 }}
                          transition={{ duration: 0.35, ease: 'easeOut' }}
                          src={import.meta.env.BASE_URL + current}
                          alt={`${selectedProject.title} — immagine ${activeIndex + 1}`}
                          className="w-full max-h-[60vh] object-contain rounded-md"
                        />
                      </AnimatePresence>
                      {/* Prev/Next facoltativi */}
                      {gallery.length > 1 && (
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-between px-2">
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev - 1 + gallery.length) % gallery.length) }}
                            className="pointer-events-auto rounded-full bg-white/80 hover:bg-white px-2.5 py-1.5 text-stone-800 shadow"
                            aria-label="Immagine precedente"
                          >
                            ‹
                          </button>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setActiveIndex((prev) => (prev + 1) % gallery.length) }}
                            className="pointer-events-auto rounded-full bg-white/80 hover:bg-white px-2.5 py-1.5 text-stone-800 shadow"
                            aria-label="Immagine successiva"
                          >
                            ›
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Thumbnails orizzontali scrollabili */}
                    {gallery.length > 1 && (
                      <div className="relative -mx-2 md:mx-0">
                        <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-3">
                          {gallery.map((src, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setActiveIndex(i)}
                              className={`shrink-0 rounded-md overflow-hidden border ${i === activeIndex ? 'border-stone-900' : 'border-brand-line/60'} focus:outline-none focus:ring-2 focus:ring-stone-900/20`}
                              aria-label={`Apri immagine ${i + 1}`}
                            >
                              <img
                                src={import.meta.env.BASE_URL + src}
                                alt={`${selectedProject.title} — anteprima ${i + 1}`}
                                className="h-20 w-28 object-cover"
                                loading="lazy"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                )
              })()}

              {/* Descrizione */}
              <div className="mt-6 text-stone-700 max-w-3xl">
                <p>
                  Breve descrizione del progetto. Aggiungi materiali, crediti, tecniche e note come nella sezione Work.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}