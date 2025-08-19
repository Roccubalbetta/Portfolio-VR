import { motion } from 'framer-motion'

export function HeroFull() {
  const VIDEO = import.meta.env.BASE_URL + 'artworks/HeroFullVideo.mp4'
  const IMAGE = import.meta.env.BASE_URL + 'media/hero.jpg'

  return (
    <section id="home" className="relative min-h-screen w-full bg-brand-sand">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[100vh] min-h-[100vw] object-cover brightness-110"
          style={{ transform: 'rotate(90deg)', transformOrigin: 'center center' }}
          src={VIDEO}
          autoPlay
          muted
          loop
          playsInline
          onError={(e) => {
            e.currentTarget.outerHTML = `<img src="${IMAGE}" alt="Background" class="w-full h-full object-cover"/>`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
      </div>

      <div className="section flex min-h-screen items-end pb-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.2em] text-[12px] text-stone-700">Fashion Portfolio</p>
          <h1 className="mt-2 text-5xl md:text-7xl font-serif leading-[1.05]">
            Vanessa Ruiz
          </h1>
          <p className="mt-4 text-stone-700 max-w-prose">
            Ricerca visiva su silhouette, tessuti e luce. Progetti selezionati 2022–2025.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#work" className="px-5 py-3 rounded-full bg-stone-900 text-white hover:bg-stone-800 transition">Work</a>
            <a href="#bio"  className="px-5 py-3 rounded-full border border-brand-line hover:bg-stone-100 transition">Bio</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}