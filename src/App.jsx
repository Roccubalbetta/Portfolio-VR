import { useMemo } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Gallery } from './components/Gallery'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  // In a real project you would fetch this from a CMS or JSON file
  const artworks = useMemo(() => [
    { id: 1, title: 'Sospesa', year: '2024', medium: 'Acrilico su tela', img: '/artworks/artwork-1.svg' },
    { id: 2, title: 'Vento caldo', year: '2023', medium: 'Olio su tela', img: '/artworks/artwork-2.svg' },
    { id: 3, title: 'Città liquida', year: '2025', medium: 'Digitale', img: '/artworks/artwork-3.svg' },
    { id: 4, title: 'Metamorfosi', year: '2022', medium: 'Mista', img: '/artworks/artwork-4.svg' },
    { id: 5, title: 'Alba', year: '2024', medium: 'Aquarello', img: '/artworks/artwork-5.svg' },
    { id: 6, title: 'Nodo', year: '2023', medium: 'Scultura', img: '/artworks/artwork-6.svg' },
  ], [])

  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Gallery artworks={artworks} />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
