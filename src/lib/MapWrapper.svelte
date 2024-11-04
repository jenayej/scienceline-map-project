<script>
// @ts-nocheck
    import Ai2svelte from '$lib/Ai2svelte/index.svelte';
    import Map from '$lib/ai/sherp42_map.svelte';

    import stories from './stories.json';
    import {onMount} from 'svelte';

    // import all of the images from the illos_vf folder
    const images = import.meta.glob('$lib/illos_vf/*.png', {
        eager: true
    })

    const boilerplate = "Plunge into the depths and peel back the surface hiding the city’s secrets: mussels of Newtown Creek, the National Guard stationed in subways, the beavers of Astor Place — and more! <br><br>Click the icons to reveal these lurking stories across New York. <br><br><br><font size=\"3\"><i>A project by New York University’s Science, Health and Environmental Reporting Program, with help from Sara Chodosh</i></font>."

    let mounted = false,
        mapWidth,
        mapHeight,
        selected,
        storyHighlighted = false

    onMount(() => {
        mounted = true
    })


    // when someone clicks on an icon, find the item in the stories array/json file and return it
    function onClick(story) {
        selected = stories.find(d => d.id == story.id)
        storyHighlighted = true
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
            {#if mounted && stories.length > 0}
                {#each stories as story}
                    <!-- svelte-ignore a11y-click-events-have-key-events -->
                    <!-- svelte-ignore a11y-no-static-element-interactions -->
                    <div class='icon-wrapper'
                        style:top='{story.top}%'
                        style:left='{story.left}%'
                        on:click={() => onClick(story)}
                    >
                    
                    <!-- the each loop below is just a weird workaround to load the images dynamically -->
                    {#each Object.entries(images).filter(d => d[0] == `/src/lib/illos_vf/${story.imagename}.png`) as [_path, module]}
                        <div class='image-wrapper'>
                            <img src={module.default} />
                        </div>
                    {/each}
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
                    {storyHighlighted ? selected.headline : 'NYC Under the Surface'}
                </a>
            </p>
            <p class='byline'>{storyHighlighted ? selected.writer : ''}</p>
            <p class='body'>{@html storyHighlighted ? selected.synopsis : boilerplate}</p>
            <p class='returnhome'>
                <a 
                    href={storyHighlighted ? selected.homepagelink : ''} 
                    target='_self'
                >
                    {storyHighlighted ? selected.homepagetext : ''}
                </a></p>

            <!-- <p class='returnhome'>{@html storyHighlighted ? selected.homepagelink : homelink}</p>  -->
        </div>
    </div>
</div>


<style>
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Yantramanav:wght@100;300;400;500;700;900&display=swap');

    .yantramanav {
      font-family: "Yantramanav", sans-serif;
      font-weight: 300;
      font-style: normal;
    }
    .montserrat-thin {
      font-family: "Montserrat", sans-serif;
      font-optical-sizing: auto;
      font-weight: 300;
      font-style: normal;
    }

    .hed {
        font-family: "Yantramanav", sans-serif;
        font-size: 36px;
        font-weight: 500;
        color: white;
        margin-bottom: 0px;
    }
    .hed a {
        color: white;
        text-decoration: none;
    }
    .byline {
        font-family: "Montserrat", sans-serif;
        font-size: 16px;
        color: white;
        margin-bottom: 35px;
    }
    .body {
        font-family: "Montserrat", sans-serif;
        font-size: 17px;
        /*height: calc(100% - 80px);*/
        color: white;
        margin-bottom: 35px;
    }
    .returnhome {
        font-family: "Montserrat", sans-serif;
        font-size: 19px;
        /*height: calc(100% - 80px);*/
        color: white;
    }
    .returnhome a {
        color: white;
        text-decoration: none;
    }
    .icon-wrapper {
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
        font-weight: 700;
        text-align: center;
    }
    .image-wrapper {
        width: 60px;
        height: 60px;
        transition: all 1s;
        cursor: pointer;
    }
    @media (max-width: 799px) {
        .image-wrapper {
            width: 100px;
            height: 100px;
        }
        .hed {
            font-size: 25px;
        }
        .body {
            font-size: 13px;
        }
        .returnhome {
            font-size: 15px;
        }
    }
    @media (min-width: 800px) {
        .image-wrapper {
            width: 100px;
            height: 100px;
        }
        .hed {
            font-size: 25px;
        }
        .body {
            font-size: 15px;
        }
        .returnhome {
            font-size: 17px;
        }
    }
    @media (min-width: 1200px) {
        .image-wrapper {
            width: 120px;
            height: 120px;
        }
        .hed {
            font-size: 36px;
        }
        .body {
            font-size: 19px;
        }
        .returnhome {
            font-size: 21px;
        }
    }
        @media (min-width: 1700px) {
        .image-wrapper {
            width: 120px;
            height: 120px;
        }
        .hed {
            font-size: 36px;
        }
        .body {
            font-size: 21px;
        }
        .returnhome {
            font-size: 23px;
        }
    }
    .image-wrapper:hover {
        transform: scale(1.32) rotate(15deg);
    }
    .image-wrapper img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }

    #sidebar {
        position: fixed;
        width: 375px;
        height: calc(100% - 40px);
        /* min-width: 400px; */
        /* max-width: 500px; */
        background-color: #171717;
        padding-left: 30px;
        padding-right: 30px;
        top: 20px;
        left: 20px;
    }
    #map-annotations {
        position: absolute;
        top: 0;
        left: 0;
    }
    #visuals-wrapper {
        position: relative;
    }
    #wrapper {
        width: 100dvw;
        height: 100dvh;
        background-color: black;
    }
    div {
        box-sizing: border-box;
    }
</style>
