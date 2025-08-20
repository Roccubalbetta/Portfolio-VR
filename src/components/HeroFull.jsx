import { motion } from 'framer-motion'

export function HeroFull() {
  const VIDEO = import.meta.env.BASE_URL + 'artworks/HeroFullVideo.mp4'
  const IMAGE = import.meta.env.BASE_URL + 'media/hero.jpg'

  return (
    <section id="home" className="relative min-h-screen w-full bg-brand-sand">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={VIDEO}
          autoPlay muted loop playsInline
          onError={(e) => {
            e.currentTarget.outerHTML = `<img src="${IMAGE}" alt="Background" class="w-full h-full object-cover"/>`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f8fa] via-[#f7f8fa]/70 to-transparent" />
      </div>

      {/* Text content */}
      <div className="section flex min-h-screen items-center justify-center relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="uppercase tracking-[0.25em] text-base md:text-lg text-stone-900 mx-auto">Fashion Portfolio</p>
          <h1 className="mt-4 text-7xl md:text-9xl font-serif leading-tight">
            Vanessa Ruiz
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-stone-700 max-w-2xl mx-auto">
            Ricerca visiva su silhouette, tessuti e luce.
          </p>
        </motion.div>
      </div>
    </section>
  )
}