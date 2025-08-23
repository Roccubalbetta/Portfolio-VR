import React from 'react'

export function Contacts() {
  return (
    <section
      id="contacts"
      className="relative min-h-screen w-screen flex items-center justify-center text-white"
      style={{
        backgroundImage: "url(materiale/posti/DSCF1838.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container mx-auto px-6 w-full">
        <div className="text-center space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-2xl mt-12">
          <p className="px-2 bg-black/70 rounded">{'vanessafabiola.ruiz@gmail.com'}</p>
          <p className="px-2 bg-black/70 rounded">{'+39 333 3068643'}</p>
        </div>
        </div>
      </div>
    </section>
  )
}