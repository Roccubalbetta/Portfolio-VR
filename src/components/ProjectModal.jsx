import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-black/40" onClick={onClose} />

          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="relative max-w-3xl w-full bg-white border border-brand-line rounded-2xl p-6"
            role="dialog" aria-modal="true"
          >
            <button
              onClick={onClose}
              className="absolute right-3 top-3 p-2 rounded-full hover:bg-stone-100"
              aria-label="Chiudi"
            >
              <X size={18} />
            </button>

            <div className="space-y-3 pr-8">
              <h3 className="font-serif text-2xl">{project.title}</h3>
              <p className="text-sm text-stone-600">{project.year} · {project.tags.join(' · ')}</p>
              <p className="text-stone-700">{project.description}</p>
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.images.map((src, i) => (
                <img
                  key={i}
                  src={import.meta.env.BASE_URL + src}
                  alt={`${project.title} ${i+1}`}
                  className="w-full h-56 object-cover rounded-xl border border-brand-line"
                  loading="lazy"
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}