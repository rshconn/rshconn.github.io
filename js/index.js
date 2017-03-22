$( document ).ready(function() {
        mapboxgl.accessToken = 'pk.eyJ1IjoibGFtdWplcnF1aXhvdGUiLCJhIjoiRXNtU2loUSJ9.l6qgPI_jPX6uGbfGPm6u8w';
        new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [-83.742804, 42.281371],
          zoom: 10,
          interactive: false
        });

        $(".element").typed({
            strings: ["maps", "open government data", "education", "musical theater", "dogs","hiking"],
            typeSpeed: 0,
            showCursor: false,
            loop: true,
            loopCount: false,
            backDelay: 2500,
        });
    });

      $( "#home" ).click(function() {
        new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [-73.562230, 41.023896],
          zoom: 10,
          interactive: false
        });
      });

      $( "#school" ).click(function() {
        new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [-83.742340, 42.275159],
          zoom: 10,
          interactive: false
        });
      });

      $( "#ice_cream" ).click(function() {
        new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [-122.319767, 47.615144],
          zoom: 10,
          interactive: false
        });
      });

      $( "#anywhere" ).click(function() {
        var lon = (Math.round(Math.random()) * 2 - 1) * (Math.random() * 180)
        var lat = (Math.round(Math.random()) * 2 - 1) * (Math.random() * 90)
        new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v9',
          center: [lon, lat],
          zoom: 10,
          interactive: false
        });
      });