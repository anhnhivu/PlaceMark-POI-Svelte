<script>
	import Gallery from 'svelte-image-gallery';
    import {getContext, onMount} from 'svelte'
    const placemarkService = getContext("PlacemarkService");
    let pointList = [];

    onMount(async () => {
        pointList = await placemarkService.getPoints();
    });
</script>

<Gallery gap="10" maxColumnWidth="200">
    {#each pointList as point}
        <img src={point.img} alt=""/>
    {/each}
</Gallery>

<style>
	:global(img) { opacity: .9; transition: all .2s }
	:global(img):hover { opacity: 1; transform: scale(1.04) }
</style>

