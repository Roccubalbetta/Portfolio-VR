export function Footer() {
  return (
    <footer className="section py-10 text-sm text-neutral-400">
      <div className="flex flex-col md:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} Vanessa Ruiz — Tutti i diritti riservati.</p>
      </div>
    </footer>
  )
}
