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
      cover: 'work/cover-1.jpg',
      images: ['work/img-1a.jpg', 'work/img-1b.jpg'],
      description: 'Serie che indaga la sospensione del corpo nello spazio urbano.'
    },
    {
      id: 2,
      title: 'Vento caldo',
      year: '2023',
      tags: ['Installation'],
      cover: 'work/cover-2.jpg',
      images: ['work/img-1a.jpg', 'work/img-1b.jpg'],
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