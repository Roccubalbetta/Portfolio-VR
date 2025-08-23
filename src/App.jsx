import { useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { HeroFull } from './components/HeroFull'
import { Work } from './components/Work'
import { ProjectModal } from './components/ProjectModal'
import { Bio } from './components/Bio'
import { Contacts } from './components/Contacts'
import { StrautemColer } from './components/StrautemColer'

export default function App() {
  const projects = useMemo(() => [
    {
      id: 1,
      title: 'ai',
      tags: ['Photography', 'Editorial'],
      cover: 'materiale/ai/2023_01.jpg',
      images: ['materiale/ai/2023_01.jpg', 'materiale/ai/2023_02.jpg', 'materiale/ai/2023_03.png', 'materiale/ai/2025_01.jpg', 'materiale/ai/2025_02.jpg', 'materiale/ai/2025_03.jpg', 'materiale/ai/2025_04.jpg'],
      description: 'Serie che indaga la sospensione del corpo nello spazio urbano.',
      didascalia: 'Lotta (2024). 8mm ultra violet back-painted neon, transformers, cables and frame. 500 x 11 x 50 mm Exterior installation view, Galleria d’Arte De’ Foscherari, Bologna IT 02.25'
    },
    {
      id: 2,
      title: 'autoritratti',
      tags: ['Photography', 'Editorial'],
      cover: 'materiale/autoritratti/2022_01BW.jpg',
      images: ['materiale/autoritratti/2022_01BW.jpg', 'materiale/autoritratti/2022_02.jpg', 'materiale/autoritratti/2024_01.jpg','materiale/autoritratti/2024_02.jpg','materiale/autoritratti/2025_01.jpg','materiale/autoritratti/2025_02.jpg','materiale/autoritratti/2025_03.jpg','materiale/autoritratti/2025_04.jpg',,'materiale/autoritratti/2025_05.jpg'],
      description: 'Serie che indaga la sospensione del corpo nello spazio urbano.',
      didascalia: 'Lotta (2024). 8mm ultra violet back-painted neon, transformers, cables and frame. 500 x 11 x 50 mm Exterior installation view, Galleria d’Arte De’ Foscherari, Bologna IT 02.25'
    },
    {
      id: 3,
      title: 'brainless',
      tags: ['Photography', 'Editorial'],
      cover: 'materiale/brainless/DSCF4492.jpg',
      images: ['materiale/brainless/DSCF4492.jpg', 'materiale/brainless/DSCF4505.jpg', 'materiale/brainless/DSCF4515.jpg', 'materiale/brainless/DSCF4525.jpg', 'materiale/brainless/ita.jpg', 'materiale/brainless/pvc.jpg', 'materiale/brainless/tnt.jpg'/*, 'materiale/brainless/foglio di sala.pdf'*/],
      description: 'Serie che indaga la sospensione del corpo nello spazio urbano.',
      didascalia: 'Lotta (2024). 8mm ultra violet back-painted neon, transformers, cables and frame. 500 x 11 x 50 mm Exterior installation view, Galleria d’Arte De’ Foscherari, Bologna IT 02.25'
    },
    {
      id: 4,
      title: 'people',
      tags: ['Photography', 'Editorial'],
      cover: 'materiale/people/2023_01.jpg',
      images: ['materiale/people/2023_01.jpg',
                'materiale/people/2023_02.jpg',
                'materiale/people/2023_03.jpg',
                'materiale/people/2023_04.jpg',
                'materiale/people/2023_05.jpg',
                'materiale/people/2023_06.jpg',
                'materiale/people/2024_01.jpg',
                'materiale/people/2024_02.jpg',
                'materiale/people/2024_03.jpg',
                'materiale/people/2024_04.jpg',
                'materiale/people/2024_05.jpg',
                'materiale/people/2024_06.jpg',
                'materiale/people/2024_07.jpg',
                'materiale/people/2024_08.jpg',
                'materiale/people/2024_09.jpg',
                'materiale/people/2024_10.jpg',
                'materiale/people/2024_11.jpg',
                'materiale/people/2025_01.jpg',
                'materiale/people/2025_02.jpg',
                'materiale/people/2025_03.jpg',
                'materiale/people/2025_04.jpg',
                'materiale/people/2025_05.JPG'],
      description: 'Serie che indaga la sospensione del corpo nello spazio urbano.',
      didascalia: 'Lotta (2024). 8mm ultra violet back-painted neon, transformers, cables and frame. 500 x 11 x 50 mm Exterior installation view, Galleria d’Arte De’ Foscherari, Bologna IT 02.25'
    },
    {
      id: 5,
      title: 'posti',
      tags: ['Photography', 'Editorial'],
      cover: 'materiale/posti/000006.jpg',
      images: ['materiale/posti/000006.jpg', 'materiale/posti/DSCF1829.jpg', 'materiale/posti/DSCF1838.jpg', 'materiale/posti/DSCF1917.jpg', 'materiale/posti/DSCF4781 copy.jpg', 'materiale/posti/DSCF4788 copy.jpg', 'materiale/posti/DSCF4814 copy.jpg'],
      description: 'Serie che indaga la sospensione del corpo nello spazio urbano.',
      didascalia: 'Lotta (2024). 8mm ultra violet back-painted neon, transformers, cables and frame. 500 x 11 x 50 mm Exterior installation view, Galleria d’Arte De’ Foscherari, Bologna IT 02.25'
    },
    {
      id: 6,
      title: 'still',
      tags: ['Photography', 'Editorial'],
      cover: 'materiale/still/2023_01.svg',
      images: ['materiale/still/2023_01.jpg',
                'materiale/still/2023_02.jpg',
                'materiale/still/2023_03.jpg',
                'materiale/still/2023_04.jpg',
                'materiale/still/2023_05.jpg',
                'materiale/still/2023_06.jpg'],
      description: 'Serie che indaga la sospensione del corpo nello spazio urbano.',
      didascalia: 'Lotta (2024). 8mm ultra violet back-painted neon, transformers, cables and frame. 500 x 11 x 50 mm Exterior installation view, Galleria d’Arte De’ Foscherari, Bologna IT 02.25'
    },
    {
      id: 7,
      title: 'video',
      tags: ['Video', 'Editorial'],
      cover: 'materiale/video/2023_01.mp4',
      images: ['materiale/video/2023_01.mp4',
                'materiale/video/2023_02.mp4',
                'materiale/video/2025_01.mp4',],
      description: 'Serie che indaga la sospensione del corpo nello spazio urbano.',
      didascalia: 'Lotta (2024). 8mm ultra violet back-painted neon, transformers, cables and frame. 500 x 11 x 50 mm Exterior installation view, Galleria d’Arte De’ Foscherari, Bologna IT 02.25'
    },
  ], [])

  const [openProject, setOpenProject] = useState(null)

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HeroFull />} />
          <Route path="/work" element={<Work projects={projects} onOpen={setOpenProject} />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/strautem-coler" element={<StrautemColer />} />
          {/* Redirect unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <ProjectModal project={openProject} onClose={() => setOpenProject(null)} />
    </BrowserRouter>
  )
}