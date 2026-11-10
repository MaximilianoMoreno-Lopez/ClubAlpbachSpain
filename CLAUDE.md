# Club Alpbach Spain, contexto para Claude Code

Web de Club Alpbach Spain (club español del European Forum Alpbach). Astro 6 estático en GitHub Pages, misma base
técnica que horizonterioja. Es una réplica fiel de la web de Hostinger https://clubalpbachspain.org: mismos textos
(en inglés), fotos, colores y estructura. No mezclar con Estrellas del Sur ni Horizonte Rioja.

## Rutas
De momento vive en https://maximilianomoreno-lopez.github.io/ClubAlpbachSpain/ (`base: '/ClubAlpbachSpain/'`).
En `.astro` usar siempre `${base}/ruta/` con `base = import.meta.env.BASE_URL.replace(/\/$/, '')`.
Cuando se mueva al dominio propio, cambiar `SITE` y `BASE` en `astro.config.mjs` y `public/robots.txt`.

## Diseño (copiado de la original)
- Oliva `rgb(89, 93, 43)` en cabecera, pie y bloques oscuros; crema `rgb(244, 241, 226)` en fondos claros;
  dorado `rgb(255, 198, 102)` en hovers. Tipografía League Spartan.
- Contenedor de 1224 px, fotos con radio de 20 px, botones píldora de 56 px (variantes en `global.css`).
- Heros con foto y velo negro al 45 %.
- Partners y Community muestran "Coming soon!" porque así están en la original (sus bloques están ocultos allí).

## Datos
- Email, menú, redes y board en `src/lib/site.js`.
- Fotos en `src/assets/img/` (nombres cortos); el componente `Img.astro` las busca por nombre y las pasa a WebP.
- Créditos de las fotos: © EFA / Andrei Pungovschi, Marko Risovic, Ioana Cirlig, Elisabeth Mandl, Philipp Huber.

## Deploy
Push a `main` → GitHub Actions → Pages (~2 min). Comprobar con `gh run list`.
