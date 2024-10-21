export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "app",
	appPath: "scienceline-map-project/app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"app/immutable/entry/start.C1uxOSzb.js","app":"app/immutable/entry/app.CGwX_0hc.js","imports":["app/immutable/entry/start.C1uxOSzb.js","app/immutable/chunks/entry.CvS3LpbP.js","app/immutable/chunks/scheduler.D2CNYxju.js","app/immutable/entry/app.CGwX_0hc.js","app/immutable/chunks/scheduler.D2CNYxju.js","app/immutable/chunks/index.BT0zT_YD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
