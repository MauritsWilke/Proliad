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
					'self', 'https://fonts.googleapis.com/'
				],
				'media-src': ["https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy/media-src"]
			}
		}
	}
};

export default config;
