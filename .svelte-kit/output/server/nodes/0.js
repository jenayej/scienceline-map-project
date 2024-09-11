

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.C2MsCJcA.js","_app/immutable/chunks/scheduler.D2CNYxju.js","_app/immutable/chunks/index.Bfd7QkMT.js"];
export const stylesheets = [];
export const fonts = [];
