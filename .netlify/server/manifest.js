export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["logo.png","Wereldbol.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml"},
	_: {
		entry: {"file":"_app/immutable/start-06a99bc4.js","imports":["_app/immutable/start-06a99bc4.js","_app/immutable/chunks/index-8a15e943.js","_app/immutable/chunks/singletons-6e1101ad.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
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
};
