

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["app/immutable/nodes/1.CHPFjiGP.js","app/immutable/chunks/scheduler.D2CNYxju.js","app/immutable/chunks/index.BT0zT_YD.js","app/immutable/chunks/entry.CvS3LpbP.js"];
export const stylesheets = [];
export const fonts = [];
