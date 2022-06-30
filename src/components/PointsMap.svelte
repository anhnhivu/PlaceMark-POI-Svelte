<script>
    import 'leaflet/dist/leaflet.css';
    import { LeafletMap } from '../services/leaflet-map';
    import { getContext, onMount } from "svelte";

    const placemarkService = getContext("PlacemarkService");
  
    const mapConfig = {
      location: {lat: 49.01275517377035, lng: 12.099749210316908},
      zoom: 14,
      minZoom: 1,
    };
  
    let map = null; 

    onMount(async () => {
        map = new LeafletMap("placemark-map", mapConfig);
        map.showZoomControl();
        map.addLayerGroup("Dormitory");
        map.addLayerGroup("Supermarket");
        map.addLayerGroup("Postal Office");
        map.addLayerGroup("Hospital");
        map.showLayerControl();

        const points = await placemarkService.getPoints();
        points.forEach(point => {
            addnewMarker(point);
        });
    });

    export function addnewMarker(point) {
        if (point.description.length > 232) {
            point.desc = point.description.slice(0,232);
        }
        else point.desc = point.description;
        
        map.addMarker({lat: point.lat, lng: point.lng}, point, point.category.name);
        map.moveTo(14, {lat: point.lat, lng: point.lng});
    } 

    
</script>
  
<div class="box" id="placemark-map" style="height:600px">
</div>