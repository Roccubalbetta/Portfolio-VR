import { useMemo, useState } from 'react'
import { Navbar } from './components/Navbar'
import { HeroFull } from './components/HeroFull'
import { Work } from './components/Work'
import { ProjectModal } from './components/ProjectModal'
import { Bio } from './components/Bio'
import { Contacts } from './components/Contacts'
import { StrautemColer } from './components/StrautemColer'
import { Footer } from './components/Footer'

export default function App() {
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'Sospesa',
      year: '2024',
      tags: ['Photography', 'Editorial'],
      cover: 'artworks/cover-1.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Serie che indaga la sospensione del corpo nello spazio urbano.'
    },
    {
      id: 2,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 3,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 4,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 5,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 6,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 7,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 8,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 9,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 10,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 11,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 12,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 13,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 14,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 15,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 16,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 17,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 18,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 19,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 20,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 21,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 22,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 23,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
    {
      id: 24,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'artworks/cover-2.svg',
      images: ['artworks/img-1a.svg', 'artworks/img-1b.svg'],
      description: 'Installazione site-specific sul tema della soglia termica.'
    },
  ], [])

  const [openProject, setOpenProject] = useState(null)

  return (
    <div>
      <Navbar />
      <main>
        <HeroFull />
        <Work projects={projects} onOpen={setOpenProject} />
        <Bio />
        <Contacts />
        <StrautemColer />
      </main>
      <Footer />
      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </div>
  )
}