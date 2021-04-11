import * as L from 'leaflet';
import * as React from 'react';

import { ScootersMap } from './ScootersMap';


export async function fetchScooters() {
    const response = await fetch("/scooters.json");
    const scooters = await response.json() as any;
    return scooters;
}

export const LVIV_CENTER: L.LatLngTuple = [49.8360948918759, 24.025636129081246];


export const Map: React.FC<any> = ({ onScooterSelect }) => {
    const [scooters, setScooters] = React.useState([]);

    React.useEffect(() => {
        fetchScooters().then(setScooters);
    }, []);

    return (
        <ScootersMap center={LVIV_CENTER} scooters={scooters} onScooterSelect={onScooterSelect} />
	);
}
