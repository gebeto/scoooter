import * as L from 'leaflet';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { styled } from 'baseui';

import { MapContainer, TileLayer } from 'react-leaflet';
import { ScooterMarker } from '../ScooterMarker/';



function fetchScooters() {
	return fetch("/scooters.json").then(res => res.json());
}

const LVIV_CENTER: L.LatLngTuple = [49.8360948918759, 24.025636129081246];

export const Map = (props: any) => {
	const [scooters, setScooters] = React.useState([]);

	React.useEffect(() => {
		fetchScooters().then(setScooters);
	}, []);

	return (
		<MapContainer
			className="map-container"
			center={LVIV_CENTER}
			zoom={13}
			scrollWheelZoom={false}
			maxZoom={18}
			minZoom={13}
		>
			<TileLayer attribution='&copy; Scoooters' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{scooters.map((scooter: any, index: number) =>
				<ScooterMarker key={index} scooter={scooter} onClick={props.onScooterSelect} />
			)}
		</MapContainer>
	);
}
