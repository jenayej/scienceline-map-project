import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["app/immutable/nodes/0.DOJA0MSh.js","app/immutable/chunks/scheduler.D2CNYxju.js","app/immutable/chunks/index.BT0zT_YD.js"];
export const stylesheets = [];
export const fonts = [];
