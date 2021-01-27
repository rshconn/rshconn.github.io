var map;

$(document).ready(function () {
  mapboxgl.accessToken = 'pk.eyJ1Ijoicnhsa25sIiwiYSI6ImNra2VzaXdhajAya3cyb3Mwc3N1NTFvOHEifQ.zbhOcrIyiLa2rlMCX6K1Nw';
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/rxlknl/ckkesldt003i717ql0yvisql3',
    center: [-73.98396710282192, 40.67520762878706], // home
    zoom: 12,
    interactive: false
  });
});

$("#home").click(function () {
  map.flyTo({
    center: [-73.98396710282192, 40.67520762878706],
    zoom: 12
  });
});

$("#work").click(function () {
  map.flyTo({
    center: [-73.99639652989892, 40.72955403069118],
    zoom: 12
  });
});

$("#ice_cream").click(function () {
  var ice_cream = [
    [-122.320, 47.615],   // Molly Moon - Seattle
    [-122.631, 45.505],   // Salt and Straw - Portland
    [-73.993, 40.683],    // Malai - Brooklyn
    [-87.658, 41.949]     // Jeni's -  Chicago
  ];
  map.flyTo({
    center: ice_cream[Math.floor(Math.random() * ice_cream.length)],
    zoom: 18
  });
});

$("#anywhere").click(function () {
  var lon = (Math.round(Math.random()) * 2 - 1) * (Math.random() * 180)
  var lat = (Math.round(Math.random()) * 2 - 1) * (Math.random() * 90)
  map.flyTo({
    center: [lon, lat],
    zoom: 12
  });
});