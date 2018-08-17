let platform = new H.service.Platform({ //aqui se iniciliza el mapa
  useCIT: true,
  app_id:'fLzneZsZJmJNOTDlBulj', // // <- INGRESA TU IDENTIFICACIÓN DE LA APLICACIÓN AQUÍ
  app_code:'dWYEJbbiTjECkQ-bI243qQ', // <- INGRESA TU APLICACIÓN CÓDIGO AQUÍ
});

let defaultLayers = platform.createDefaultLayers();
let mapPlaceholder = document.getElementById('mapContainer');


//el mapa reacciona correctamente cuando se cambie el tamaño de la ventana
window.addEventListener('resize', function(){
    map.getViewPort().resize();
  });

var coordinates = {
  lat: -33.43727, // ubicacio de santiago de chile
  lng: -70.65056
};
let mapOptions = {
  center: coordinates,
  zoom: 15
};

let map = new H.Map(
  mapContainer,
  defaultLayers.normal.map,
  mapOptions
);
let behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

let HEREHQcoordinates;
//aqui empieza la geolocalizacion watchPosition Este método llamará a la función de éxito cada vez que cambie la posición del dispositivo.
function updatePosition (event) {
  HEREHQcoordinates = {
    lat: event.coords.latitude,
    lng: event.coords.longitude
  };
  console.log(HEREHQcoordinates);
  
  var marker = new H.map.Marker(HEREHQcoordinates);
  map.addObject(marker);
  map.setCenter(HEREHQcoordinates);
}

navigator.geolocation.watchPosition(updatePosition);