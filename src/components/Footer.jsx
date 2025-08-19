export function Footer() {
  return (
    <footer className="section py-10 text-sm text-neutral-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Nome Cognome — Tutti i diritti riservati.</p>
        <p className="opacity-80">Realizzato con React, Vite &amp; Tailwind CSS</p>
      </div>
    </footer>
  )
}
