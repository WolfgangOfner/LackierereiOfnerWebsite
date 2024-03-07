// Initialize and add the map
let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 47.724788665771484, lng: 16.09730339050293 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 16,
    center: position,
    mapId: "Lackiererei_Ofner",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Lackiererei Ofner",
  });
}

initMap();