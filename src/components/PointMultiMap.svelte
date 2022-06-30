<script>
    // import 'leaflet/dist/leaflet.css';
    import { LeafletMap } from '../services/leaflet-map';
    import { getContext, onMount } from "svelte";

    const placemarkService = getContext("PlacemarkService");

    export let pointId;
    
    let point = {
        lat: "",
        lng: "",
    };
  
    const mapConfig = {
      location: {lat: 49.01275517377035, lng: 12.099749210316908},
      zoom: 13,
      minZoom: 1,
    };

    const mapConfig2 = {
      location: {lat: 49.01275517377035, lng: 12.099749210316908},
      zoom: 17,
      minZoom: 1,
    };
  
    let map = null;
    let map2 = null; 

    onMount(async () => {
        point = await placemarkService.getPointById(pointId);
        const points = await placemarkService.getPoints();

        map = new LeafletMap("placemark-map", mapConfig, "CityPlan");
        map.showZoomControl();
        map.addLayerGroup("Dormitory");
        map.addLayerGroup("Supermarket");
        map.addLayerGroup("Postal Office");
        map.addLayerGroup("Hospital");
        map.showLayerControl();

        
        points.forEach(point => {
            addnewMarker(point);
        });

        map2 = new LeafletMap("placemark-map2", mapConfig2, "Satellite");
        map2.showZoomControl();
        map2.showLayerControl();
        map2.addMarker({lat: point.lat, lng: point.lng}, point, point.category.name);
        map2.moveTo(17, {lat: point.lat, lng: point.lng});
    });

    function addnewMarker(point) {
        
        if (point.description.length > 232) {
            point.desc = point.description.slice(0,232);
        }
        else point.desc = point.description;
        map.addMarker({lat: point.lat, lng: point.lng}, point, point.category.name);
        if (point._id === pointId) {
            map.moveTo(13, {lat: point.lat, lng: point.lng});
        }
    } 

    
</script>

<div class="">
    <div class="box" id="placemark-map" style="height:400px">
    </div>
    <div class="box" id="placemark-map2" style="height:400px">
    </div>
</div>