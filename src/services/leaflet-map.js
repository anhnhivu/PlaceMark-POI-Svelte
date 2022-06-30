import * as L from "leaflet";

export class LeafletMap {
  imap = {};
  control = {};
  overlays = {};

  // https://leaflet-extras.github.io/leaflet-providers/preview/

  baseLayers = {
    Terrain: L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)',
    }),
    Satellite: L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
      attribution:
        "Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",
    }),
    CityPlan: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    }),
  };

  constructor(id, descriptor, activeLayer = "") {
    let defaultLayer = this.baseLayers.Terrain;
    if (activeLayer) {
      defaultLayer = this.baseLayers[activeLayer];
    }
    this.imap = L.map(id, {
      center: [descriptor.location.lat, descriptor.location.lng],
      zoom: descriptor.zoom,
      minZoom: descriptor.minZoom,
      zoomControl: false,
      layers: [defaultLayer],
    });
  }

  addLayer(title, layer) {
    this.overlays[title] = layer;
    this.imap.addLayer(layer);
  }

  addLayerGroup(title) {
    this.overlays[title] = L.layerGroup([]);
    this.imap.addLayer(this.overlays[title]);
  }

  showLayerControl() {
    this.control = L.control.layers(this.baseLayers, this.overlays).addTo(this.imap);
  }

  showZoomControl(position = "topleft") {
    L.control
      .zoom({
        position: position,
      })
      .addTo(this.imap);
  }

  moveTo(zoom, location) {
    this.imap.setZoom(zoom);
    this.imap.panTo(new L.LatLng(location.lat, location.lng));
  }

  zoomTo(location) {
    this.imap.setView(new L.LatLng(location.lat, location.lng), 8);
  }

  addMarker(location, point, layerTitle = "default") {
    let group = {};

    let iconUrl = "";
    if (point.category.type === "hospital") {
      iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png";
    }
    else if (point.category.type === "postal") {
      iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png";
    }
    else if (point.category.type === "supermarket") {
      iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png";
    }
    else {
      iconUrl = "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png";
    }

    var newIcon = new L.Icon({
      iconUrl: iconUrl,
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    let marker = L.marker([location.lat, location.lng], {icon: newIcon});
    // if (popupText) {
    //   var popup = L.popup({autoClose: true}); // closeOnClick: false});
    //   popup.setContent(popupText);
    //   marker.bindPopup(popup);
    // }

    if (!this.overlays[layerTitle]) {
      group = L.layerGroup([]);
      this.overlays[layerTitle] = group;
      this.imap.addLayer(group);
    } else {
      group = this.overlays[layerTitle];
    }

    marker.addTo(group)
    .bindPopup(`
    <h1 style="font-size: 20px; font-weight:bold;"> ${point.name} </h1>
    <p style="margin:10px 0px 5px;"> <b>Address:</b> ${point.street} ${point.houseNumber} </p>
    <p style="margin:0px 0px 5px;"> ${point.zipCode} ${point.city} </p>
    <hr style="margin:10px 0px;"/>
    <p style="margin:0px 0px 5px;"> Category: <b>${point.category.name}</b></p>
    <p style="margin:0px 0px 5px;"> <b>Lat:</b> ${point.lat.slice(0,8)}, <b>Lng:</b> ${point.lng.slice(0,8)} </p>

    <p>${point.desc}
      <a href="/#/point/${point._id}">...Learn more</a>
    </p>
    <img src="${point.img}"/> `);

  }

  invalidateSize() {
    this.imap.invalidateSize();
    let hiddenMethodMap = this.imap;
    hiddenMethodMap._onResize();
  }
}