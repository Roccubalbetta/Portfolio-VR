export function HeroFull() {
  const IMAGE = import.meta.env.BASE_URL + 'artworks/homebg.jpeg'

  return (
    <section id="home" className="relative min-h-screen w-full bg-brand-sand">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src={IMAGE}
          autoPlay muted loop playsInline
          onError={(e) => {
            e.currentTarget.outerHTML = `<img src="${IMAGE}" alt="Background" class="w-full h-full object-cover"/>`
          }}
        />
        <div className="absolute inset-0" />
      </div>
    </section>
  )
}