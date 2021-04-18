import React from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Scooter } from '../../entitites/Scooter';
import { locationMarker, ScooterMarker } from '../ScooterMarker';

import './styles.css';


export type ScootersMapProps = {
    scooters: Scooter[];
    center: L.LatLngTuple;
    onScooterSelect: (scooter: Scooter) => void;
};


export const ScootersMap: React.FC<ScootersMapProps> = ({ scooters, center, onScooterSelect }) => {
    const [location, setLocation] = React.useState<L.LatLng>();

    return (
        <MapContainer
            whenCreated={(map) => {
                map.on('locationfound', (e) => {
                    setLocation(e.latlng);
                });
                map.locate({ setView: true, maxZoom: 16 });
            }}
            className="map-container"
            center={center}
            zoom={13}
            scrollWheelZoom={false}
            maxZoom={18}
            minZoom={13}
        >
            <TileLayer attribution='&copy; Scoooters' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {location && <Marker icon={locationMarker} position={location} />}
            {scooters.map((scooter, index: number) =>
                <ScooterMarker key={index} scooter={scooter} onSelect={onScooterSelect} />
            )}
        </MapContainer>
    );
}
