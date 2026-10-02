# Lupa — sitio web

Sitio informativo de [Lupa](../README.md): analizador y corrector de código fuente para quien
empieza a programar.

## Stack

- [React](https://react.dev) + [Vite](https://vite.dev)
- [React Router](https://reactrouter.com) para las páginas (Inicio, Funciones, Descargar, Docs)
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) para iconos

## Desarrollo

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — servidor de desarrollo con HMR
- `npm run build` — build de producción en `dist/`
- `npm run preview` — sirve el build de producción localmente
- `npm run lint` — lint con Oxlint

## Despliegue

Se publica en GitHub Pages con `.github/workflows/deploy-pages.yml`: cada push a `main` que toque
`site/` construye el proyecto y lo despliega en `https://pablopozocamp.github.io/Lupa-App/`.

`vite.config.js` fija `base: "/Lupa-App/"` para que los assets resuelvan bajo esa ruta, y
`public/404.html` redirige las rutas internas (`/features`, `/docs`…) a `index.html` para que
funcionen los enlaces directos y recargar la página, ya que GitHub Pages no soporta el
enrutado del lado del cliente de forma nativa.
