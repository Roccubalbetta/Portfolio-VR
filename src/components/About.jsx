import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="section py-20">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-serif">Chi sono</h2>
          <p className="text-neutral-300">
            Sono un’artista multidisciplinare. La mia ricerca indaga il rapporto tra colore, texture e spazio
            attraverso pittura, illustrazione e media digitali.
          </p>
          <p className="text-neutral-400">
            Ho esposto in spazi indipendenti e gallerie locali tra il 2022 e il 2025. Attualmente lavoro a una serie
            dedicata al tema della soglia, tra figurazione e astrazione.
          </p>
        </motion.div>
        <motion.aside
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="card p-6 space-y-4"
        >
          <h3 className="font-serif text-xl">Mostre recenti</h3>
          <ul className="space-y-2 text-neutral-300 text-sm">
            <li><span className="text-neutral-400">2025</span> — “Soglie”, Galleria Spazio 12, Milano</li>
            <li><span className="text-neutral-400">2024</span> — “Luce d’inverno”, Officina Due, Bologna</li>
            <li><span className="text-neutral-400">2023</span> — “Trame”, Spazio Kappa, Torino</li>
          </ul>
        </motion.aside>
      </div>
    </section>
  )
}
