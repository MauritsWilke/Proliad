import adapter from "@sveltejs/adapter-netlify";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	/*
	 * Consult https://github.com/sveltejs/svelte-preprocess
	 * for more information about preprocessors
	 */

	preprocess: preprocess({
		scss: {
			prependData: `@import 'src/global.scss';`
		}
	}),

	kit: {
		adapter: adapter(),
		csp: {
			mode: "hash",
			directives: {
			  'script-src': ['self'],
			  'img-src': [
					'self', 'https://firebasestorage.googleapis.com/v0/b/proliad.appspot.com/'
				],
			  'style-src': [
					'self', 'https://fonts.googleapis.com/', 'unsafe-inline'
				],
				'media-src': ['self']
			}
		}
	}
};

export default config;
