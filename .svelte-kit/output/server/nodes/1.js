

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.CXk5ol8d.js","_app/immutable/chunks/scheduler.D2CNYxju.js","_app/immutable/chunks/index.Bfd7QkMT.js","_app/immutable/chunks/entry.D9BwwLFG.js"];
export const stylesheets = [];
export const fonts = [];
