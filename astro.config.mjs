import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// De momento se publica en GitHub Pages bajo /ClubAlpbachSpain/.
// Cuando se apunte el dominio clubalpbachspain.org a GitHub Pages:
//   SITE = 'https://clubalpbachspain.org' y BASE = '/'
const SITE = 'https://maximilianomoreno-lopez.github.io';
const BASE = '/ClubAlpbachSpain/';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  output: 'static',
  build: { inlineStylesheets: 'always' },
  integrations: [
    sitemap({ filter: (page) => !page.endsWith('/404/') }),
  ],
});
