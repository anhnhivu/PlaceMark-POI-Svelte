<script>
    import {getContext, onMount} from 'svelte';
    
    const placemarkService = getContext("PlacemarkService");
    let point = {
        name: "Name",
        street: "",
        zipCode: "",
        city: "",
        houseNumber: "",
        category: {
            name: "",
        },
        lat: "",
        lng: "",
    };
    
    export let pointId;
  
    onMount(async () => {
      point = await placemarkService.getPointById(pointId);
    });

</script>

<div>
    <h1 style="font-size: 32px; font-weight:bold; text-align: center;">{point.name}</h1>
    <p style="margin:10px 0px 5px;"> <b>Address:</b> {point.street} {point.houseNumber}, {point.zipCode} {point.city} </p>
    <hr style="margin:10px 0px;"/>
    <p style="margin:0px 0px 5px;"> Category: <b>{point.category.name}</b></p>
    <p style="margin:0px 0px 5px;"> <b>Lat:</b> {point.lat.slice(0,8)}, <b>Lng:</b> {point.lng.slice(0,8)} </p>

    <h2 style="font-size: 24px; font-weight:bold; margin: 20px 0px 5px;">Description</h2>
    <p>{point.description}</p>

    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img style="margin: 30px 0px;" src={point.img} alt="photo-house"/>


</div>

<style>

</style>