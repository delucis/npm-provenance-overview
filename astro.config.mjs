// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	base: 'npm-provenance-quickview',
	site: 'https://delucis.github.io/',
	image: {
		domains: ['astro.badg.es'],
	},
});
