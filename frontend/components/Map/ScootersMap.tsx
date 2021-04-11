import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as React from 'react';

import { MapContainer, TileLayer } from 'react-leaflet';
import { Scooter } from '../../entities';
import { ScooterMarker, ScooterMarkerProps } from '../ScooterMarker/';

import './styles.css';


export type ScootersMapProps = {
	scooters: Scooter[];
	center: L.LatLngTuple;
	onScooterSelect: ScooterMarkerProps["onClick"];
};


export const ScootersMap: React.FC<ScootersMapProps> = ({ scooters, center, onScooterSelect }) => {
	return (
		<MapContainer
			className="map-container"
			center={center}
			zoom={13}
			scrollWheelZoom={false}
			maxZoom={18}
			minZoom={13}
		>
			<TileLayer attribution='&copy; Scoooters' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{scooters.map((scooter: any, index: number) =>
				<ScooterMarker key={index} scooter={scooter} onClick={onScooterSelect} />
			)}
		</MapContainer>
	);
}
