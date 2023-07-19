//Provided by the initial project creation using the vite
//import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import SveltePreprocess from 'svelte-preprocess';
const config = {
	preprocess: SveltePreprocess({
		scss: {
			prependData: '@use "src/styles/variables.scss";'
		}
	})
};

// Consult https://svelte.dev/docs#compile-time-svelte-preprocess
// for more information about preprocessors
// export default {
//  preprocess: vitePreprocess(),
//  }

export default config;
