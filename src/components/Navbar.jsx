import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#opere', label: 'Opere' },
  { href: '#about', label: 'Chi sono' },
  { href: '#contatti', label: 'Contatti' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-neutral-900/70 ring-1 ring-white/10' : 'bg-transparent'}`}>
      <nav className="section flex items-center justify-between h-16">
        <a href="#home" className="font-serif text-xl tracking-wide">Art<span className="gradient-text">•</span>Portfolio</a>
        <div className="hidden md:flex gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-neutral-300 hover:text-white transition">{l.label}</a>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Apri menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </nav>
      {open && (
        <div className="md:hidden section pb-4">
          <div className="card p-4 space-y-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block text-neutral-200" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
