
//Mapbox Token
mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhbWdlb3JnZTQiLCJhIjoiY2tuZmNvdjJmMDVjeTJ3cGFtYzI1OGRpYyJ9.t1KKSBfhcABqdD6zrcB0OQ';

// Create Map
let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/adamgeorge4/ckngoh8gb00ci17o6orc7cp42',
    center: [-71.104081, 42.365554],
    zoom: 13,
  });

  //Create Marker
    var marker = new mapboxgl.Marker();

async function run(){
    // get bus data    
	const locations = await getBusLocations();
	console.log(new Date());
    console.log(locations);
    // Create Array for Location Data
    var coords = [];
    coords.push([locations[0].attributes.longitude, locations[0].attributes.latitude]);
    // Update Marker location
    marker.setLngLat(coords[0]);
    marker.addTo(map);

	// timer
	    setTimeout(run, 15000);
}



// Request bus data from MBTA
async function getBusLocations(){
	const url = 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}


