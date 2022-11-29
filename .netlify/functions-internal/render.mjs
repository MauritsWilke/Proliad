import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["busje.png","dozen.png","favicon.png","huisvesting.png","lamp.png","logo.png","recyclebak.png","toolbox.png","Wereldbol.png","winkel.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-42aae437.js","imports":["_app/immutable/start-42aae437.js","_app/immutable/chunks/index-d6629a5e.js","_app/immutable/chunks/singletons-09017bf2.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js'),
			() => import('../server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
