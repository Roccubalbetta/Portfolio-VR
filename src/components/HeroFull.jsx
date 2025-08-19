import { motion } from 'framer-motion'

export function HeroFull() {
  // Se esiste hero.mp4 lo useremo, altrimenti hero.jpg
  const VIDEO = import.meta.env.BASE_URL + 'media/hero.mp4'
  const IMAGE = import.meta.env.BASE_URL + 'media/hero.jpg'

  return (
    <section id="home" className="relative min-h-screen w-full">
      {/* Background media */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover"
          src={VIDEO}
          autoPlay
          muted
          loop
          playsInline
          // Se preferisci forzare l'immagine commenta il video e lascia l'img sotto
          onError={(e) => {
            // fallback immagine se il video manca
            e.currentTarget.outerHTML = `<img src="${IMAGE}" alt="Background" class="w-full h-full object-cover"/>`
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
      </div>

      <div className="section flex min-h-screen items-end pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            <span className="gradient-text">Nome Cognome</span>
          </h1>
          <p className="mt-3 text-neutral-300">
            Ricerca visiva tra luce, materia e spazio. Selezione di progetti recenti.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#work" className="px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 transition ring-1 ring-brand-500/30">Work</a>
            <a href="#bio" className="px-5 py-3 rounded-xl ring-1 ring-white/10 hover:bg-white/5 transition">Bio</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}