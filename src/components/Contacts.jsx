import { Mail, Instagram, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export function Contacts() {
  const EMAIL_TO = 'ciao@example.com' // TODO: sostituisci con la tua email

  function onSubmit(e) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const name = (fd.get('name') || '').toString().trim()
    const email = (fd.get('email') || '').toString().trim()
    const message = (fd.get('message') || '').toString().trim()

    const subject = encodeURIComponent(`Nuovo contatto dal portfolio — ${name || 'Senza nome'}`)
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\n\nMessaggio:\n${message}`
    )

    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contacts" className="relative min-h-screen w-screen flex items-center">
      {/* Background Layer: pattern + soft gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Subtle grid pattern */}
        <svg className="absolute inset-0 h-full w-full opacity-20" aria-hidden="true">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" className="text-stone-300" />
        </svg>
        {/* Top fade to keep content readable, aligned to site style */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#e5e7eb] via-[#e5e7eb]/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-5xl"
        >
          <div className="relative rounded-2xl border border-brand-line/60 bg-white/70 backdrop-blur-md shadow-md overflow-hidden">
            {/* Decorative accent */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-stone-900/5 blur-2xl" />

            <div className="grid md:grid-cols-5">
              {/* Left: Intro & Contacts */}
              <div className="md:col-span-2 p-8 md:p-10 border-b md:border-b-0 md:border-r border-brand-line/40">
                <motion.h2
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.05 }}
                  className="text-4xl font-serif mb-3"
                >
                  Contacts
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.1 }}
                  className="text-stone-700 mb-6"
                >
                  Per collaborazioni, commissioni o press. Rispondo solitamente entro 24–48 ore.
                </motion.p>

                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href={`mailto:${EMAIL_TO}`} className="underline decoration-stone-300 underline-offset-2 hover:decoration-stone-800">
                      {EMAIL_TO}
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram size={16} />
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="underline decoration-stone-300 underline-offset-2 hover:decoration-stone-800">
                      Instagram
                    </a>
                  </li>
                  {/* Facoltativi: scommenta e personalizza se necessari */}
                  <li className="flex items-center gap-2">
                    <Phone size={16} />
                    <a href="tel:+39XXXXXXXXXX" className="underline decoration-stone-300 underline-offset-2 hover:decoration-stone-800">+39 XXX XXX XXXX</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span className="text-stone-700">Imola · Italy</span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href={`mailto:${EMAIL_TO}`} className="px-4 py-2 rounded-full border border-brand-line hover:bg-stone-100 inline-flex items-center gap-2">
                    <Mail size={18} /> Email
                  </a>
                  <a href="https://instagram.com/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full bg-stone-900 text-white hover:bg-stone-800 inline-flex items-center gap-2">
                    <Instagram size={18} /> Instagram
                  </a>
                  {/*
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-brand-line hover:bg-stone-100 inline-flex items-center gap-2">
                    <Github size={18} /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-full border border-brand-line hover:bg-stone-100 inline-flex items-center gap-2">
                    <Linkedin size={18} /> LinkedIn
                  </a>
                  */}
                </div>

                <p className="mt-6 text-xs leading-relaxed text-stone-500">
                  Inviando un messaggio accetti che i dati vengano utilizzati esclusivamente per rispondere alla tua richiesta.
                </p>
              </div>

              {/* Right: Contact Form */}
              <div className="md:col-span-3 p-8 md:p-10">
                <h3 className="font-serif text-xl mb-4">Scrivimi un messaggio</h3>
                <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Nome</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Il tuo nome"
                      className="w-full rounded-lg border border-brand-line/60 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-900/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="nome@dominio.com"
                      className="w-full rounded-lg border border-brand-line/60 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-900/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Messaggio</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Raccontami brevemente di cosa hai bisogno…"
                      className="w-full rounded-lg border border-brand-line/60 bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-stone-900/20"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-white hover:bg-stone-800 transition"
                    >
                      <Send size={18} /> Invia
                    </button>
                    <span className="text-xs text-stone-500">oppure scrivimi a <a href={`mailto:${EMAIL_TO}`} className="underline">{EMAIL_TO}</a></span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}