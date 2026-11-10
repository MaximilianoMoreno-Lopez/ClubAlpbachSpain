# Club Alpbach Spain

Web de Club Alpbach Spain, réplica en [Astro](https://astro.build) de la web actual de Hostinger
(https://clubalpbachspain.org). Se publica sola en GitHub Pages.

- Vista previa: https://maximilianomoreno-lopez.github.io/ClubAlpbachSpain/

## Trabajar en local

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4321/ClubAlpbachSpain/
npm run build    # genera la web en dist/
```

## Publicar

Cada push a `main` construye y publica la web con GitHub Actions (`.github/workflows/deploy.yml`) en unos 2 minutos.

La primera vez hay que activar Pages en GitHub, en **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Dónde está cada cosa

| Qué | Dónde |
| --- | --- |
| Email, menú, redes y board | `src/lib/site.js` |
| Páginas | `src/pages/` |
| Cabecera, pie, hero, carrusel, vídeo | `src/components/` |
| Colores y tipografía | `src/styles/global.css` |
| Fotos (se optimizan solas a WebP) | `src/assets/img/` |
| Favicon e imagen para redes | `public/` |

Para cambiar una foto basta con sustituir el archivo en `src/assets/img/` manteniendo el nombre.

## Formularios

GitHub Pages no tiene servidor, así que el formulario de contacto y el de la newsletter abren el programa de correo
con el mensaje ya escrito para `club.spain@alpbach.network`. Si se quiere que lleguen sin abrir el correo, se puede
conectar un servicio como Formspree o Web3Forms cambiando el `action` del formulario.

## Pasar al dominio clubalpbachspain.org

1. En `astro.config.mjs` poner `SITE = 'https://clubalpbachspain.org'` y `BASE = '/'`.
2. Cambiar la URL del sitemap en `public/robots.txt`.
3. En GitHub, Settings → Pages → Custom domain: `clubalpbachspain.org`, y forzar HTTPS.
4. En el DNS del dominio (ahora en Hostinger), apuntar el dominio a GitHub Pages: registros A a
   185.199.108.153, 185.199.109.153, 185.199.110.153 y 185.199.111.153, y `www` como CNAME a
   `maximilianomoreno-lopez.github.io`.
