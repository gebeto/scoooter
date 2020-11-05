import * as L from 'leaflet';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { styled } from 'baseui';

import { MapContainer, TileLayer } from 'react-leaflet';
import { ScooterMarker } from '../ScooterMarker/';



function fetchScooters() {
	return fetch("/scooters.json").then(res => res.json());
}


export const Map = (props: any) => {
	const [scooters, setScooters] = React.useState([]);

	React.useEffect(() => {
		fetchScooters().then(setScooters);
	}, []);

	const position = [51.505, -0.09] as any;

	return (
		<MapContainer
			className="map-container"
			center={[49.8360948918759, 24.025636129081246]}
			zoom={12}
			scrollWheelZoom={false}
			maxZoom={18}
			minZoom={12}
		>
			<TileLayer attribution='&copy; Scoooters' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{scooters.map((scooter: any, index: number) =>
				<ScooterMarker key={index} scooter={scooter} onClick={props.onScooterSelect} />
			)}
		</MapContainer>
	);
}
