<script>
    import 'leaflet/dist/leaflet.css';
    import { LeafletMap } from '../services/leaflet-map';
    import { getContext, onMount } from "svelte";

    const placemarkService = getContext("PlacemarkService");
  
    const mapConfig = {
      location: {lat: 49.00514526265753, lng: 12.070902491875282},
      zoom: 16,
      minZoom: 1,
    };
  
    let map = null; 

    onMount(async () => {
        map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup("My List");
        map.showLayerControl();

        const points = await placemarkService.getPoints();
        points.forEach(point => {
            addnewMarker(point);
        });
    });

    export function addnewMarker(point) {
        map.addMarker({lat: point.lat, lng: point.lng}, `${point.name} - ${point.category.name}`, "My List");
        map.moveTo(15, {lat: point.lat, lng: point.lng});
    } 

    
</script>
  
<div class="box" id="placemark-map" style="height:800px">
</div>