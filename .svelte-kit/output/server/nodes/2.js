

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["app/immutable/nodes/2.BTQphwsd.js","app/immutable/chunks/scheduler.D2CNYxju.js","app/immutable/chunks/index.BT0zT_YD.js"];
export const stylesheets = ["app/immutable/assets/2.B0m3gmAa.css"];
export const fonts = [];
