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
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled
          ? 'backdrop-blur-md bg-white/70 border-b border-brand-line'
          : 'bg-transparent'
      }`}
    >
      <nav className="section flex items-center justify-between md:justify-center h-20">
        <div
          className={`hidden md:flex items-center gap-12 ${
            scrolled ? 'text-stone-800' : 'text-white/80'
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-[18px] font-bold uppercase tracking-wide hover:text-opacity-80 transition duration-200"
            >
              <span>{l.label}</span>
              <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </div>
        <button
          className={`md:hidden p-3 ${
            scrolled ? 'text-stone-800' : 'text-white/80'
          }`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>
    </header>
  );
}