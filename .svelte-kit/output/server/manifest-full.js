export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","illos_vf/beaver.png","illos_vf/bunker.png","illos_vf/eye.png","illos_vf/insulation.png","illos_vf/mammoth.png","illos_vf/megaphone.png","illos_vf/newtown.png","illos_vf/soilbank.png","illos_vf/winery.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CdP0XV4d.js","app":"_app/immutable/entry/app.CsnE6gph.js","imports":["_app/immutable/entry/start.CdP0XV4d.js","_app/immutable/chunks/entry.CySY6oqq.js","_app/immutable/chunks/scheduler.D2CNYxju.js","_app/immutable/entry/app.CsnE6gph.js","_app/immutable/chunks/scheduler.D2CNYxju.js","_app/immutable/chunks/index.Bfd7QkMT.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
