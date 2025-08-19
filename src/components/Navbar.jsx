import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#bio', label: 'Bio' },
  { href: '#contacts', label: 'Contacts' },
  { href: '#strautem_coler', label: 'Strautem & Coler' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-md bg-white/70 border-b border-brand-line' : 'bg-transparent'}`}>
      <nav className="section flex items-center justify-between h-16">
        <a href="#work" className="font-serif text-xl tracking-wide">Portfolio</a>
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-[13px] uppercase tracking-wide text-stone-700 hover:text-stone-900 a-underline">
              {l.label}
            </a>
          ))}
        </div>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="Menu">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
      </nav>

      {open && (
        <div className="md:hidden section pb-4">
          <div className="card p-4 space-y-2">
            {links.map(l => (
              <a key={l.href} href={l.href} className="block text-stone-900" onClick={() => setOpen(false)}>{l.label}</a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}