<script>
    import Ai2svelte from '$lib/Ai2svelte/index.svelte';
    import Map from '$lib/ai/ai2html-output/map.svelte';

    import stories from './stories.json';

    import {onMount} from 'svelte';

    let hiddenIcons, 
        icons = [], 
        mounted = false,
        mapWidth,
        mapHeight,
        selected,
        storyHighlighted = false

    onMount(() => {
        mounted = true
    })

    $: if (mounted) {
        hiddenIcons = document.getElementsByClassName('g-icons')
        for (let i = 0; i < hiddenIcons.length; i++) {
            const element = hiddenIcons[i];
            let newElem = {id: element.firstChild.innerHTML, top: element.style.top, left: element.style.left}
            icons.push(newElem)
        }
    }

    function onClick(icon) {
        selected = stories.find(d => d.id == icon.id)
        storyHighlighted = true
        return selected
    }

</script>

<div id='wrapper'>
    <div id='visuals-wrapper'>
        <div id='ai2svelte-wrapper'
            bind:clientWidth={mapWidth}
            bind:clientHeight={mapHeight}
        >
            <Ai2svelte
                AiGraphic='{Map}'
                ariaDescription='This is alt text'
            />
        </div>
        <div id='map-annotations'
            style:width='{mapWidth}px'
            style:height='{mapHeight}px'
        >
            {#if mounted && icons.length > 0}
                {#each icons as icon}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div
                        class='icon'
                        style:top={icon.top}
                        style:left={icon.left}
                        on:click={() => onClick(icon)}
                    >
                        <p>{icon.id}</p>
                    </div>
                {/each}
            {/if}
        </div>
        <div id='sidebar'>
            <p class='hed'>
                <a 
                    href={storyHighlighted ? selected.link : ''} 
                    target={storyHighlighted ? '_blank' : '_self'}
                >
                    {storyHighlighted ? selected.headline : 'This is where your headline will go'}
                </a>
            </p>
            <p class='body'>{storyHighlighted ? selected.synopsis : 'This is some body text. There will be copy here that describes each story.'}</p>
        </div>
    </div>
</div>


<style>
    .hed {
        font-size: 22px;
        font-weight: 700;
        color: white;
        margin-bottom: 40px;
    }
    .hed a {
        color: white;
        text-decoration: none;
    }
    .body {
        font-size: 16px;
        height: calc(100% - 80px);
        color: white;
    }
    #sidebar {
        position: fixed;
        width: 350px;
        height: calc(100% - 40px);
        /* min-width: 400px; */
        /* max-width: 500px; */
        background-color: black;
        padding: 40px;
        top: 20px;
        left: 20px;
        font-family: Arial, Helvetica, sans-serif;
    }
    .icon {
        position: absolute;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px black solid;
        background-color: white;
    }

    .icon p {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 700;
        color: black;
        position: absolute;
        width: 25px;
        height: 25px;
        text-align: center;
        margin: 0;
        transform: translate(-2px, 2px);
    }

    #map-annotations {
        position: absolute;
        top: 0;
        left: 0;
    }

    #visuals-wrapper {
        position: relative;
    }

    #wrapper :global(.g-icons) {
        opacity: 0;
    }

    #wrapper {
        width: 100dvw;
        height: 100dvh;
        background-color: black;
        /* padding-top: 100px; */
    }

    div {
        box-sizing: border-box;
    }
</style>
