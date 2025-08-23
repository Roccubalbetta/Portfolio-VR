import { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const isVideo = (src) => /\.(mp4|webm|ogg)$/i.test(src || '')

const getCaption = (project, idx) => {
  const caps = Array.isArray(project?.captions) ? project.captions : []
  return caps[idx] || `${project?.title || ''} — ${idx + 1}`
}

const getDescription = (project, idx) => {
  const descs = Array.isArray(project?.descriptions) ? project.descriptions : []
  return descs[idx] || project?.description || ''
}

const getFileName = (p) => String(p || '').split('/').pop()


export function Work({ projects = [], onOpen }) {
  // Refs map for scrolling to cards from the left menu
  const cardRefs = useRef({})
  useEffect(() => {
    cardRefs.current = {}
  }, [projects])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const sorted = useMemo(() => {
    // Keep input order; ensure it is an array copy
    return Array.isArray(projects) ? [...projects] : []
  }, [projects])

  const menuItems = useMemo(() => sorted.map(p => p.title), [sorted])
  const [activeCat, setActiveCat] = useState(null)
  const [selected, setSelected] = useState(null) // { projectId, index }

  const selectedProject = useMemo(() => {
    if (!activeCat) return null
    const key = String(activeCat).toLowerCase()
    return sorted.find(p => String(p.title || '').toLowerCase() === key) || null
  }, [sorted, activeCat])

     // Auto-seleziona il primo progetto al primo render quando activeCat è nullo
  useEffect(() => {
    if (!activeCat && sorted.length > 0) {
      setActiveCat(sorted[0].title)
    }
  }, [activeCat, sorted])
 

  return (
        <section id="work" className="relative min-h-screen w-full pt-28 px-10" style={{ fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
      <div className="mx-auto w-full max-w-none px-3 sm:px-4 lg:px-6 xl:px-8 2xl:px-10 pb-16 mt-10">
        <div className="w-full grid grid-cols-12 gap-6">
          {/* Sidebar sinistra */}
          <aside className="col-span-12 md:col-span-2 lg:col-span-2">
            <div className="sticky top-28">
              <nav aria-label="Indice progetti">
                <ul className="space-y-1 text-[11px] leading-5 tracking-wide text-stone-700">
                  {sorted.map((p, idx) => (
                    <motion.li
                      key={p.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                    >
                      <button
                        type="button"
                        onClick={() => setActiveCat(p.title)}
                        className={`text-left uppercase transition-colors duration-200 relative after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-stone-900 after:transition-all after:duration-300 hover:after:w-full focus:outline-none ${
                          activeCat === p.title ? 'text-stone-900 font-semibold after:w-full' : 'hover:text-stone-900'
                        }`}
                        aria-current={activeCat === p.title ? 'true' : 'false'}
                      >
                        {p.title}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
    
          {/* Griglia delle foto del progetto*/}
          <section className="col-span-12 md:col-span-9 lg:col-span-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {selectedProject && selectedProject.images?.length ? (
                selectedProject.images.map((src, idx) => (
                  <article
                    key={`${selectedProject.id}-${idx}`}
                    className="group cursor-pointer"
                    role="button"
                    tabIndex={0}
                    onClick={() => setSelected({ project: selectedProject, index: idx })}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setSelected({ project: selectedProject, index: idx }) }}
                    aria-label={`Apri immagine ${idx + 1} di ${selectedProject.title}`}
                  >
                    <figure className="relative w-full aspect-video bg-stone-100 overflow-hidden shadow-[0_0_0_1px_rgba(0,0,0,0.25)]">
                      {isVideo(src) ? (
                        <video
                          src={import.meta.env.BASE_URL + src}
                          className="absolute inset-0 h-full w-full object-cover"
                          muted
                          playsInline
                          loop
                        />
                      ) : (
                        <img
                          src={import.meta.env.BASE_URL + src}
                          alt={`${selectedProject.title} – immagine ${idx + 1}`}
                          loading="lazy"
                          className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                        />
                      )}
                      <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <div className="w-full bg-black/55 text-white px-2 py-1">
                          <p className="text-[11px] leading-snug">{selectedProject?.didascalia || ''}</p>
                        </div>
                      </div>
                    </figure>
                  </article>
                ))
              ) : (
                (
                  <div className="col-span-full text-center text-stone-500 text-sm sm:text-base py-10">
                    Seleziona un progetto dall’elenco a sinistra per visualizzare le immagini.
                  </div>
                )
              )}
            </div>
          </section>
        </div>
      </div>

      {selected && selected.project?.images?.[selected.index] && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Dettagli immagine ${selected.index + 1} di ${selected.project?.title || ''}`}
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}
        >
          <div className="relative w-full max-w-6xl max-h-[85vh] overflow-hidden rounded-md bg-white shadow-2xl">
            <button
              type="button"
              aria-label="Chiudi"
              onClick={() => setSelected(null)}
              className="absolute right-2 top-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-stone-300 bg-white/90 text-stone-700 hover:bg-white focus:outline-none focus:ring-2 focus:ring-stone-400"
            >
              ×
            </button>
            <div className="grid grid-cols-1 md:grid-cols-5 h-full">
              {/* Media */}
              <div className="md:col-span-3 bg-black flex items-center justify-center">
                {isVideo(selected.project.images[selected.index]) ? (
                  <video
                    src={import.meta.env.BASE_URL + selected.project.images[selected.index]}
                    className="max-h-[85vh] w-full object-contain"
                    controls
                    autoPlay
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={import.meta.env.BASE_URL + selected.project.images[selected.index]}
                    alt={getCaption(selected.project, selected.index)}
                    className="max-h-[85vh] w-full object-contain"
                  />
                )}
              </div>

              {/* Info */}
              <div className="md:col-span-2 p-4 overflow-y-auto">
                <h3 className="text-sm font-semibold tracking-wide uppercase text-stone-900">
                  {selected.project?.title}
                </h3>
                <p className="mt-1 text-xs text-stone-500">
                  {getCaption(selected.project, selected.index)}
                </p>
                {selected.project?.didascalia && (
                  <p className="mt-3 text-[13px] leading-relaxed text-stone-700 whitespace-pre-line">
                    {selected.project.didascalia}
                  </p>
                )}
                <dl className="mt-3 space-y-2 text-[13px]">
                  {getDescription(selected.project, selected.index) && (
                    <div className="grid grid-cols-4 gap-2">
                      <dd className="col-span-3 text-stone-800 whitespace-pre-line">{getDescription(selected.project, selected.index)}</dd>
                    </div>
                  )}
                </dl>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}