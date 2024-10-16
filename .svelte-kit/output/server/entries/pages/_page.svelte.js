import { c as create_ssr_component, e as escape, d as add_attribute, v as validate_component, m as missing_component, f as compute_slots, h as add_styles } from "../../chunks/ssr.js";
const css$3 = {
  code: ".well.svelte-kfp841,.chatter-container.svelte-kfp841{max-width:660px;margin-left:auto;margin-right:auto}.well.wide.svelte-kfp841,.wide.chatter-container.svelte-kfp841{max-width:930px}.well.wider.svelte-kfp841,.wider.chatter-container.svelte-kfp841{max-width:1200px}.well.widest.svelte-kfp841,.widest.chatter-container.svelte-kfp841{max-width:100%}.well.fluid.svelte-kfp841,.fluid.chatter-container.svelte-kfp841{width:100vw;margin-left:-15px;max-width:none}.visually-hidden.svelte-kfp841{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;-webkit-clip-path:polygon(0px 0px, 0px 0px, 0px 0px);clip-path:polygon(0px 0px, 0px 0px, 0px 0px);white-space:nowrap !important;border:0 !important}",
  map: `{"version":3,"file":"index.svelte","sources":["index.svelte"],"sourcesContent":["<script>\\n  /* This component wraps ai2svelte graphics. */\\n  export let AiGraphic;\\n  export let id = '';\\n  export let ariaHidden = true;\\n\\n  export let ariaDescription = null;\\n\\n  // normal, wide, wider, widest or fluid\\n  export let size = 'normal';\\n  export let onAiMounted = () => {};\\n\\n  if (ariaHidden && !ariaDescription) {\\n    console.warn(\\n      'Must provide aria description for ai2svelte components if ariaHidden is true.'\\n    );\\n  }\\n\\n<\/script>\\n\\n<section class=\\"ai2svelte-container graphic {size}\\" id=\\"{id}\\">\\n  {#if (ariaHidden && (ariaDescription || $$slots.hidden)) || !ariaHidden}\\n    {#if $$slots.title}\\n      <div class=\\"chatter-container\\">\\n        <slot name=\\"title\\" />\\n      </div>\\n    {/if}\\n    {#if ariaDescription}\\n      <p class=\\"visually-hidden\\">{ariaDescription}</p>\\n    {/if}\\n    {#if $$slots.hidden}\\n      <div class=\\"visually-hidden custom\\">\\n        <slot name=\\"hidden\\" />\\n      </div>\\n    {/if}\\n    <div class=\\"ai-wrapper\\" aria-hidden=\\"{ariaHidden}\\">\\n      <svelte:component this=\\"{AiGraphic}\\" onAiMounted=\\"{onAiMounted}\\" />\\n    </div>\\n    {#if $$slots.notes}\\n      <div class=\\"chatter-container\\">\\n        <slot name=\\"notes\\" />\\n      </div>\\n    {/if}\\n  {/if}\\n</section>\\n\\n<style>.well, .chatter-container {\\n  max-width: 660px;\\n  margin-left: auto;\\n  margin-right: auto;\\n}\\n.well.wide, .wide.chatter-container {\\n  max-width: 930px;\\n}\\n.well.wider, .wider.chatter-container {\\n  max-width: 1200px;\\n}\\n.well.widest, .widest.chatter-container {\\n  max-width: 100%;\\n}\\n.well.fluid, .fluid.chatter-container {\\n  width: 100vw;\\n  margin-left: -15px;\\n  max-width: none;\\n}\\n\\n.visually-hidden {\\n  position: absolute !important;\\n  width: 1px !important;\\n  height: 1px !important;\\n  padding: 0 !important;\\n  margin: -1px !important;\\n  overflow: hidden !important;\\n  clip: rect(0, 0, 0, 0) !important;\\n  -webkit-clip-path: polygon(0px 0px, 0px 0px, 0px 0px);\\n          clip-path: polygon(0px 0px, 0px 0px, 0px 0px);\\n  white-space: nowrap !important;\\n  border: 0 !important;\\n}</style>\\n"],"names":[],"mappings":"AA8CO,mBAAK,CAAE,gCAAmB,CAC/B,SAAS,CAAE,KAAK,CAChB,WAAW,CAAE,IAAI,CACjB,YAAY,CAAE,IAChB,CACA,KAAK,mBAAK,CAAE,KAAK,gCAAmB,CAClC,SAAS,CAAE,KACb,CACA,KAAK,oBAAM,CAAE,MAAM,gCAAmB,CACpC,SAAS,CAAE,MACb,CACA,KAAK,qBAAO,CAAE,OAAO,gCAAmB,CACtC,SAAS,CAAE,IACb,CACA,KAAK,oBAAM,CAAE,MAAM,gCAAmB,CACpC,KAAK,CAAE,KAAK,CACZ,WAAW,CAAE,KAAK,CAClB,SAAS,CAAE,IACb,CAEA,8BAAiB,CACf,QAAQ,CAAE,QAAQ,CAAC,UAAU,CAC7B,KAAK,CAAE,GAAG,CAAC,UAAU,CACrB,MAAM,CAAE,GAAG,CAAC,UAAU,CACtB,OAAO,CAAE,CAAC,CAAC,UAAU,CACrB,MAAM,CAAE,IAAI,CAAC,UAAU,CACvB,QAAQ,CAAE,MAAM,CAAC,UAAU,CAC3B,IAAI,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,UAAU,CACjC,iBAAiB,CAAE,QAAQ,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAC7C,SAAS,CAAE,QAAQ,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CAAC,GAAG,CAAC,GAAG,CAAC,CACrD,WAAW,CAAE,MAAM,CAAC,UAAU,CAC9B,MAAM,CAAE,CAAC,CAAC,UACZ"}`
};
const Ai2svelte = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$slots = compute_slots(slots);
  let { AiGraphic } = $$props;
  let { id = "" } = $$props;
  let { ariaHidden = true } = $$props;
  let { ariaDescription = null } = $$props;
  let { size = "normal" } = $$props;
  let { onAiMounted = () => {
  } } = $$props;
  if (ariaHidden && !ariaDescription) {
    console.warn("Must provide aria description for ai2svelte components if ariaHidden is true.");
  }
  if ($$props.AiGraphic === void 0 && $$bindings.AiGraphic && AiGraphic !== void 0) $$bindings.AiGraphic(AiGraphic);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  if ($$props.ariaHidden === void 0 && $$bindings.ariaHidden && ariaHidden !== void 0) $$bindings.ariaHidden(ariaHidden);
  if ($$props.ariaDescription === void 0 && $$bindings.ariaDescription && ariaDescription !== void 0) $$bindings.ariaDescription(ariaDescription);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0) $$bindings.size(size);
  if ($$props.onAiMounted === void 0 && $$bindings.onAiMounted && onAiMounted !== void 0) $$bindings.onAiMounted(onAiMounted);
  $$result.css.add(css$3);
  return `<section class="${"ai2svelte-container graphic " + escape(size, true) + " svelte-kfp841"}"${add_attribute("id", id, 0)}>${ariaHidden && (ariaDescription || $$slots.hidden) || !ariaHidden ? `${$$slots.title ? `<div class="chatter-container svelte-kfp841">${slots.title ? slots.title({}) : ``}</div>` : ``} ${ariaDescription ? `<p class="visually-hidden svelte-kfp841">${escape(ariaDescription)}</p>` : ``} ${$$slots.hidden ? `<div class="visually-hidden custom svelte-kfp841">${slots.hidden ? slots.hidden({}) : ``}</div>` : ``} <div class="ai-wrapper"${add_attribute("aria-hidden", ariaHidden, 0)}>${validate_component(AiGraphic || missing_component, "svelte:component").$$render($$result, { onAiMounted }, {}, {})}</div> ${$$slots.notes ? `<div class="chatter-container svelte-kfp841">${slots.notes ? slots.notes({}) : ``}</div>` : ``}` : ``} </section>`;
});
const css$2 = {
  code: "#g-sherp42_map-box.svelte-1f210wo.svelte-1f210wo,#g-sherp42_map-box.svelte-1f210wo .g-artboard.svelte-1f210wo{margin:0 auto}#g-sherp42_map-box.svelte-1f210wo .g-aiImg.svelte-1f210wo{position:absolute;top:0;display:block;width:100% !important;height:100%;background-size:contain;background-repeat:no-repeat}#g-sherp42_map-MAP_BOUNDS.svelte-1f210wo.svelte-1f210wo{position:relative;overflow:hidden}",
  map: `{"version":3,"file":"sherp42_map.svelte","sources":["sherp42_map.svelte"],"sourcesContent":["\\n<!-- Generated by ai2html v0.100.0 - 2024-10-14 13:42 -->\\n<!-- ai file: sherp42_map.ai -->\\n<style lang=\\"scss\\">#g-sherp42_map-box,\\n#g-sherp42_map-box .g-artboard {\\n  margin: 0 auto;\\n}\\n\\n#g-sherp42_map-box p {\\n  margin: 0;\\n}\\n\\n#g-sherp42_map-box .g-aiAbs {\\n  position: absolute;\\n}\\n\\n#g-sherp42_map-box .g-aiImg {\\n  position: absolute;\\n  top: 0;\\n  display: block;\\n  width: 100% !important;\\n  height: 100%;\\n  background-size: contain;\\n  background-repeat: no-repeat;\\n}\\n\\n#g-sherp42_map-box .g-aiPointText p {\\n  white-space: nowrap;\\n}\\n\\n#g-sherp42_map-MAP_BOUNDS {\\n  position: relative;\\n  overflow: hidden;\\n}\\n\\n/* Custom CSS */</style>\\n\\n<div id=\\"g-sherp42_map-box\\" bind:clientWidth={width}>\\n\\n\\t<!-- Artboard: MAP_BOUNDS -->\\n{#if width && (width >= 0)}\\t<div id=\\"g-sherp42_map-MAP_BOUNDS\\" class=\\"g-artboard\\" style=\\"\\">\\n<div style=\\"padding: 0 0 56.243% 0;\\"></div>\\n\\t\\t<div id=\\"g-sherp42_map-MAP_BOUNDS-img\\" class=\\"g-aiImg\\" alt=\\"\\" style=\\"background-image: url({MAP_BOUNDS});\\"></div>\\t</div>\\n{/if}\\n</div>\\n\\n<script>\\n\\texport let assetsPath = './';\\n\\tlet width = null;\\nimport { onMount } from 'svelte';\\nexport let onAiMounted = () => {};\\nonMount(() => {\\n  onAiMounted();\\n});\\n\\nimport MAP_BOUNDS from './sherp42_map-MAP_BOUNDS.png'\\n\\n<\/script>\\n<!-- End ai2html - 2024-10-14 13:42 -->\\n"],"names":[],"mappings":"AAGmB,gDAAkB,CACrC,iCAAkB,CAAC,0BAAY,CAC7B,MAAM,CAAE,CAAC,CAAC,IACZ,CAUA,iCAAkB,CAAC,uBAAS,CAC1B,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,OAAO,CAAE,KAAK,CACd,KAAK,CAAE,IAAI,CAAC,UAAU,CACtB,MAAM,CAAE,IAAI,CACZ,eAAe,CAAE,OAAO,CACxB,iBAAiB,CAAE,SACrB,CAMA,uDAA0B,CACxB,QAAQ,CAAE,QAAQ,CAClB,QAAQ,CAAE,MACZ"}`
};
const Sherp42_map = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { assetsPath = "./" } = $$props;
  let { onAiMounted = () => {
  } } = $$props;
  if ($$props.assetsPath === void 0 && $$bindings.assetsPath && assetsPath !== void 0) $$bindings.assetsPath(assetsPath);
  if ($$props.onAiMounted === void 0 && $$bindings.onAiMounted && onAiMounted !== void 0) $$bindings.onAiMounted(onAiMounted);
  $$result.css.add(css$2);
  return `   <div id="g-sherp42_map-box" class="svelte-1f210wo"> ${``}</div>  `;
});
const css$1 = {
  code: ".hed.svelte-tf2o0t.svelte-tf2o0t{font-size:32px;font-weight:700;color:white;margin-bottom:40px}.hed.svelte-tf2o0t a.svelte-tf2o0t{color:white;text-decoration:none}.body.svelte-tf2o0t.svelte-tf2o0t{font-size:22px;height:calc(100% - 80px);color:white}#sidebar.svelte-tf2o0t.svelte-tf2o0t{position:fixed;width:350px;height:calc(100% - 40px);background-color:black;padding:40px;top:20px;left:20px;font-family:Arial, Helvetica, sans-serif}.icon.svelte-tf2o0t.svelte-tf2o0t{position:absolute;width:25px;height:25px;border-radius:50%;border:2px black solid;background-color:white}.icon.svelte-tf2o0t p.svelte-tf2o0t{font-family:Arial, Helvetica, sans-serif;font-size:16px;font-weight:700;color:black;position:absolute;width:25px;height:25px;text-align:center;margin:0;transform:translate(-2px, 2px)}#map-annotations.svelte-tf2o0t.svelte-tf2o0t{position:absolute;top:0;left:0}#visuals-wrapper.svelte-tf2o0t.svelte-tf2o0t{position:relative}#wrapper.svelte-tf2o0t .g-icons{opacity:0}#wrapper.svelte-tf2o0t.svelte-tf2o0t{width:100dvw;height:100dvh;background-color:black}div.svelte-tf2o0t.svelte-tf2o0t{box-sizing:border-box}",
  map: `{"version":3,"file":"MapWrapper.svelte","sources":["MapWrapper.svelte"],"sourcesContent":["<script>\\n    import Ai2svelte from '$lib/Ai2svelte/index.svelte';\\n    import Map from '$lib/ai/sherp42_map.svelte';\\n\\n    import stories from './stories.json';\\n\\n    import {onMount} from 'svelte';\\n\\n    let hiddenIcons, \\n        icons = [], \\n        mounted = false,\\n        mapWidth,\\n        mapHeight,\\n        selected,\\n        storyHighlighted = false\\n\\n    onMount(() => {\\n        mounted = true\\n    })\\n\\n    $: if (mounted) {\\n        hiddenIcons = document.getElementsByClassName('g-icons')\\n        for (let i = 0; i < hiddenIcons.length; i++) {\\n            const element = hiddenIcons[i];\\n            let newElem = {id: element.firstChild.innerHTML, top: element.style.top, left: element.style.left}\\n            icons.push(newElem)\\n        }\\n    }\\n\\n    function onClick(icon) {\\n        selected = stories.find(d => d.id == icon.id)\\n        storyHighlighted = true\\n    }\\n\\n<\/script>\\n\\n<div id='wrapper'>\\n    <div id='visuals-wrapper'>\\n        <div id='ai2svelte-wrapper'\\n            bind:clientWidth={mapWidth}\\n            bind:clientHeight={mapHeight}\\n        >\\n            <Ai2svelte\\n                AiGraphic='{Map}'\\n                ariaDescription='This is alt text'\\n            />\\n        </div>\\n        <div id='map-annotations'\\n            style:width='{mapWidth}px'\\n            style:height='{mapHeight}px'\\n        >\\n            {#if mounted && icons.length > 0}\\n                {#each icons as icon}\\n                    <!-- svelte-ignore a11y-click-events-have-key-events -->\\n                    <!-- svelte-ignore a11y-no-static-element-interactions -->\\n                    <div\\n                        class='icon'\\n                        style:top={icon.top}\\n                        style:left={icon.left}\\n                        on:click={() => onClick(icon)}\\n                    >\\n                        <p>{icon.id}</p>\\n                    </div>\\n                {/each}\\n            {/if}\\n        </div>\\n        <div id='sidebar'>\\n            <p class='hed'>\\n                <a \\n                    href={storyHighlighted ? selected.link : ''} \\n                    target={storyHighlighted ? '_blank' : '_self'}\\n                >\\n                    {storyHighlighted ? selected.headline : 'NYC Under the Surface'}\\n                </a>\\n            </p>\\n            <p class='body'>{storyHighlighted ? selected.synopsis : \`Plunge into the depths and peel back the surface hiding the city’s secrets: mussels of Newtown Creek, the National Guard stationed in subways, the beavers of Astor place — and more! Click the icons to reveal these lurking stories across New York. \\n\\n            A project by New York University’s Science, Health and Environmental Reporting Program, with help from Sara Chodosh.\`}</p>\\n        </div>\\n    </div>\\n</div>\\n\\n\\n<style>\\n    .hed {\\n        font-size: 32px;\\n        font-weight: 700;\\n        color: white;\\n        margin-bottom: 40px;\\n    }\\n    .hed a {\\n        color: white;\\n        text-decoration: none;\\n    }\\n    .body {\\n        font-size: 22px;\\n        height: calc(100% - 80px);\\n        color: white;\\n    }\\n    #sidebar {\\n        position: fixed;\\n        width: 350px;\\n        height: calc(100% - 40px);\\n        /* min-width: 400px; */\\n        /* max-width: 500px; */\\n        background-color: black;\\n        padding: 40px;\\n        top: 20px;\\n        left: 20px;\\n        font-family: Arial, Helvetica, sans-serif;\\n    }\\n    .icon {\\n        position: absolute;\\n        width: 25px;\\n        height: 25px;\\n        border-radius: 50%;\\n        border: 2px black solid;\\n        background-color: white;\\n    }\\n\\n    .icon p {\\n        font-family: Arial, Helvetica, sans-serif;\\n        font-size: 16px;\\n        font-weight: 700;\\n        color: black;\\n        position: absolute;\\n        width: 25px;\\n        height: 25px;\\n        text-align: center;\\n        margin: 0;\\n        transform: translate(-2px, 2px);\\n    }\\n\\n    #map-annotations {\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n    }\\n\\n    #visuals-wrapper {\\n        position: relative;\\n    }\\n\\n    #wrapper :global(.g-icons) {\\n        opacity: 0;\\n    }\\n\\n    #wrapper {\\n        width: 100dvw;\\n        height: 100dvh;\\n        background-color: black;\\n        /* padding-top: 100px; */\\n    }\\n\\n    div {\\n        box-sizing: border-box;\\n    }\\n</style>\\n"],"names":[],"mappings":"AAoFI,gCAAK,CACD,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,KAAK,CACZ,aAAa,CAAE,IACnB,CACA,kBAAI,CAAC,eAAE,CACH,KAAK,CAAE,KAAK,CACZ,eAAe,CAAE,IACrB,CACA,iCAAM,CACF,SAAS,CAAE,IAAI,CACf,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CACzB,KAAK,CAAE,KACX,CACA,oCAAS,CACL,QAAQ,CAAE,KAAK,CACf,KAAK,CAAE,KAAK,CACZ,MAAM,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CAAC,CAGzB,gBAAgB,CAAE,KAAK,CACvB,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IAAI,CACT,IAAI,CAAE,IAAI,CACV,WAAW,CAAE,KAAK,CAAC,CAAC,SAAS,CAAC,CAAC,UACnC,CACA,iCAAM,CACF,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,aAAa,CAAE,GAAG,CAClB,MAAM,CAAE,GAAG,CAAC,KAAK,CAAC,KAAK,CACvB,gBAAgB,CAAE,KACtB,CAEA,mBAAK,CAAC,eAAE,CACJ,WAAW,CAAE,KAAK,CAAC,CAAC,SAAS,CAAC,CAAC,UAAU,CACzC,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,KAAK,CACZ,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,MAAM,CAClB,MAAM,CAAE,CAAC,CACT,SAAS,CAAE,UAAU,IAAI,CAAC,CAAC,GAAG,CAClC,CAEA,4CAAiB,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CACV,CAEA,4CAAiB,CACb,QAAQ,CAAE,QACd,CAEA,sBAAQ,CAAS,QAAU,CACvB,OAAO,CAAE,CACb,CAEA,oCAAS,CACL,KAAK,CAAE,MAAM,CACb,MAAM,CAAE,MAAM,CACd,gBAAgB,CAAE,KAEtB,CAEA,+BAAI,CACA,UAAU,CAAE,UAChB"}`
};
const MapWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let mapWidth, mapHeight;
  $$result.css.add(css$1);
  return `<div id="wrapper" class="svelte-tf2o0t"><div id="visuals-wrapper" class="svelte-tf2o0t"><div id="ai2svelte-wrapper" class="svelte-tf2o0t">${validate_component(Ai2svelte, "Ai2svelte").$$render(
    $$result,
    {
      AiGraphic: Sherp42_map,
      ariaDescription: "This is alt text"
    },
    {},
    {}
  )}</div> <div id="map-annotations" class="svelte-tf2o0t"${add_styles({
    "width": `${mapWidth}px`,
    "height": `${mapHeight}px`
  })}>${``}</div> <div id="sidebar" class="svelte-tf2o0t"><p class="hed svelte-tf2o0t"><a${add_attribute("href", "", 0)}${add_attribute("target", "_self", 0)} class="svelte-tf2o0t">${escape("NYC Under the Surface")}</a></p> <p class="body svelte-tf2o0t">${escape(`Plunge into the depths and peel back the surface hiding the city’s secrets: mussels of Newtown Creek, the National Guard stationed in subways, the beavers of Astor place — and more! Click the icons to reveal these lurking stories across New York. 

            A project by New York University’s Science, Health and Environmental Reporting Program, with help from Sara Chodosh.`)}</p></div></div> </div>`;
});
const css = {
  code: "body{margin:0}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\n    import MapWrapper from '$lib/MapWrapper.svelte';\\n<\/script>\\n\\n<MapWrapper />\\n\\n<style>\\n    :global(body) {\\n        margin: 0;\\n    }\\n</style>"],"names":[],"mappings":"AAOY,IAAM,CACV,MAAM,CAAE,CACZ"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(MapWrapper, "MapWrapper").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
