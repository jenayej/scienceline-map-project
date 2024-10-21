

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DKjqjSFI.js","_app/immutable/chunks/scheduler.D2CNYxju.js","_app/immutable/chunks/index.BT0zT_YD.js","_app/immutable/chunks/entry.HXGVy9_S.js"];
export const stylesheets = [];
export const fonts = [];
