export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DibjWeGj.js","app":"_app/immutable/entry/app.BDKUa403.js","imports":["_app/immutable/entry/start.DibjWeGj.js","_app/immutable/chunks/entry.BK5KNj-s.js","_app/immutable/chunks/scheduler.D2CNYxju.js","_app/immutable/entry/app.BDKUa403.js","_app/immutable/chunks/scheduler.D2CNYxju.js","_app/immutable/chunks/index.BT0zT_YD.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
