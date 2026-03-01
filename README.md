# INTEGRARE — Frontend

Sitio comercial en Svelte 5 + Vite + Tailwind CSS v4.

## Desarrollo

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Estructura

- **Landing (/**): Hero, Servicios, Promoción, Temas, Experiencia, Contacto — enfoque comercial y CTA.
- **Nosotros (/nosotros):** Quiénes somos, Misión, Visión.
- `src/lib/router.js` — Navegación cliente (path + navigate).
- `public/_redirects` — Para producción (Netlify): todas las rutas → index.html (SPA).

Paleta: azul claro, turquesa, lavanda, morado; tipografía Plus Jakarta Sans y DM Serif Display.

## Agenda (backend)

Los botones "Agendar consulta" e "Informes de talleres" envían datos al backend. Crea `.env` con:

```
VITE_API_URL=http://localhost:3001
```

En producción, usa la URL de tu API (ej. `https://api.integraredesarrollo.com`).
