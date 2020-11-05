import * as L from 'leaflet';

import kiwiIcon from './icon-kiwi.svg';
import ewingsIcon from './icon-ewings.svg';


function fetchScooters() {
	return fetch("/scooters.json").then(res => res.json());
}

const mymap = L.map('map').setView([49.8360948918759, 24.025636129081246], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
	minZoom: 12,
	id: 'mapbox/streets-v11',
	tileSize: 512,
	zoomOffset: -1,
}).addTo(mymap);

// const marker = L.marker([49.8360948918759, 24.025636129081246]).addTo(mymap);
// marker.bindPopup("<b>Kiwi</b><br><ul><li>I am a popup.</li><li>I am a popup.</li></ul>").openPopup();

// const polygon = L.polygon([
// 	[51.509, -0.08],
// 	[51.503, -0.06],
// 	[51.51, -0.047]
// ]).addTo(mymap);

var kiwiMarker = L.icon({
	iconUrl: kiwiIcon,
	iconSize: [34, 34],
	iconAnchor: [17, 0],
	popupAnchor: [0, 0],
	// shadowUrl: 'my-icon-shadow.png',
	// shadowSize: [68, 95],
	// shadowAnchor: [22, 94]
});

var ewingsMarker = L.icon({
	iconUrl: ewingsIcon,
	iconSize: [34, 34],
	iconAnchor: [17, 0],
	popupAnchor: [0, 0],
	// shadowUrl: 'my-icon-shadow.png',
	// shadowSize: [68, 95],
	// shadowAnchor: [22, 94]
});

const markersByType: any = {
	kiwi: kiwiMarker,
	ewings: ewingsMarker,
}

fetchScooters().then(scooters => {
	scooters.map((scooter: any) => {
		const marker = L.marker([scooter.location.lat, scooter.location.lon])
			.setIcon(markersByType[scooter.type])
			.addTo(mymap);

		marker.bindPopup(`
			<b>Type: ${scooter.type}</b>
			<br>
			<ul>
				<li>Name: ${scooter.title}</li>
				<li>Battery: ${scooter.battery}</li>
			</ul>
		`);
		marker.on('click', () => {
			// alert(JSON.stringify(scooter));
			console.log(scooter);
		});
	})
})
