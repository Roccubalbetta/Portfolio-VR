import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section id="home" className="section pt-28 pb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-5"
        >
          <span className="inline-flex items-center text-xs uppercase tracking-widest text-brand-300/90 ring-1 ring-brand-500/20 px-3 py-1 rounded-full">
            Portfolio artistico
          </span>
          <h1 className="text-4xl md:text-6xl font-serif leading-tight">
            <span className="gradient-text">Nome Cognome</span><br/>Artista & Designer
          </h1>
          <p className="text-neutral-300 max-w-prose">
            Opere che esplorano luce, materia e movimento. Una selezione di lavori recenti e progetti espositivi.
          </p>
          <div className="flex gap-3">
            <a href="#opere" className="px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 transition ring-1 ring-brand-500/30">Guarda le opere</a>
            <a href="#contatti" className="px-5 py-3 rounded-xl ring-1 ring-white/10 hover:bg-white/5 transition">Contattami</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="aspect-[4/3] card overflow-hidden">
            <img
              src={import.meta.env.BASE_URL + 'artworks/artwork-1.svg'}
              alt="Hero artwork"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 -z-10 w-40 h-40 rounded-full bg-brand-600 blur-3xl opacity-30"></div>
        </motion.div>
      </div>
    </section>
  )
}
