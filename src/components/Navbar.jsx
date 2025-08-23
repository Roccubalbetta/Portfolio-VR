import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/bio', label: 'Bio' },
  { to: '/contact', label: 'Contact' },
  { to: '/strautem-coler', label: 'Strautem & Coler' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const baseHeader = `fixed top-0 left-0 right-0 z-50 transition-all`
  let headerClass
  if (location.pathname === '/') {
    headerClass = scrolled
      ? 'backdrop-blur-md bg-white/80 border-b border-brand-line'
      : 'bg-transparent'
  } else {
    headerClass = 'backdrop-blur-md'
  }

  const linkClass = ({ isActive }) =>
    `group relative inline-flex items-center gap-2 text-[18px] font-bold uppercase tracking-wide px-3 py-1 rounded transition duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
      scrolled ? 'focus-visible:ring-stone-800/40' : 'focus-visible:ring-white/40'
    } ${
      isActive
        ? 'translate-y-[-1px]'
        : 'hover:translate-y-[-1px] hover:scale-[1.02] active:scale-[0.99]'
      } ${
        location.pathname === '/' && !scrolled
          ? 'text-white hover:text-gray-200'
          : 'text-stone-800 hover:text-stone-600'
      }`

  return (
    <header className={`${baseHeader} ${headerClass}`}>
      <nav className="section flex items-center justify-between md:justify-center h-20">
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} className={linkClass} end={l.to === '/'}>
              <span className="relative inline-block">
                {l.label}
                <span
                  className={`pointer-events-none absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ease-out ${
                                        (location.pathname === '/' && !scrolled) ? 'bg-white' : 'bg-stone-900'
                  } ${location.pathname === l.to ? 'w-full' : 'w-0 group-hover:w-full'}`}
                />
              </span>
            </NavLink>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-3 ${scrolled ? 'text-stone-800' : 'text-white'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur border-t border-brand-line">
          <div className="flex flex-col items-stretch px-4 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `group px-3 py-2 text-base font-semibold transition duration-200 ${
                    isActive ? 'text-stone-900' : 'hover:text-stone-700'
                  }`
                }
                end={l.to === '/'}
                onClick={() => setOpen(false)}
              >
                <span className="relative inline-block">
                  {l.label}
                  <span
                    className={`pointer-events-none absolute -bottom-0.5 left-0 h-[2px] transition-all duration-300 ease-out ${
                      'bg-stone-900'
                    } ${location.pathname === l.to ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  />
                </span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}