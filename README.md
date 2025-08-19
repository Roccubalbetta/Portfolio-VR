# Portfolio Artistico — React + Vite + Tailwind

Semplice landing page per portfolio artistico. Include navbar sticky, hero con CTA, galleria opere, sezione "Chi sono" e contatti, con animazioni leggere via Framer Motion.

## Requisiti
- Node.js LTS (consigliato v18+)
- Git

## Avvio locale
```bash
npm install
npm run dev
```
Apri l'URL mostrato in console (di solito http://localhost:5173).

## Personalizzazione rapida
- **Titolo/nome artista**: `src/components/Hero.jsx`
- **Opere**: modifica l'array `artworks` in `src/App.jsx` e aggiungi le immagini in `public/artworks/`
- **Bio e mostre**: `src/components/About.jsx`
- **Contatti/Instagram**: `src/components/Contact.jsx`

## Deploy su GitHub Pages (consigliato)
1. Crea un repository GitHub e carica il progetto (cartella completa).
2. Se il repo NON è del tipo `username.github.io`, apri `vite.config.js` e **decommenta** la riga `base` mettendo il nome del repo:
   ```js
   // base: '/NOME_REPO/',
   ```
3. Vai su **Settings → Pages** e imposta **Source: GitHub Actions**.
4. Nel repo trovi già il workflow in `.github/workflows/deploy.yml`. Al primo push su `main` partirà il deploy automatico.
5. L'URL finale sarà `https://username.github.io/NOME_REPO/` (oppure `https://username.github.io/` se usi il repo utente).

## Deploy alternativo: Vercel o Netlify
- Importa il repo e usa le impostazioni di default (build: `npm run build`, dir: `dist`).

Buon lavoro! 🎨
