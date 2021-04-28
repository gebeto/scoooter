import L from 'leaflet';
import React from 'react';

import { Marker } from 'react-leaflet';

import locationIcon from './icon-location.svg';
import ewingsIcon from './icon-ewings.svg';
import kiwiIcon from './icon-kiwi.svg';
import boltIcon from './icon-bolt.svg';
import { Scooter } from '../../entitites/Scooter';


export const locationMarker = L.icon({
    iconUrl: locationIcon,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, 0],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});

const ewingsMarker = L.icon({
    iconUrl: ewingsIcon,
    iconSize: [34, 34],
    iconAnchor: [17, 0],
    popupAnchor: [0, 0],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});

const kiwiMarker = L.icon({
    iconUrl: kiwiIcon,
    iconSize: [34, 34],
    iconAnchor: [17, 0],
    popupAnchor: [0, 0],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});

const boltMarker = L.icon({
    iconUrl: boltIcon,
    iconSize: [34, 34],
    iconAnchor: [17, 0],
    popupAnchor: [0, 0],
    // shadowUrl: 'my-icon-shadow.png',
    // shadowSize: [68, 95],
    // shadowAnchor: [22, 94]
});

const markersByType: Record<Scooter["service"], L.Icon> = {
    ewings: ewingsMarker,
    kiwi: kiwiMarker,
    bolt: boltMarker,
};


export type ScooterMarkerProps = {
    scooter: Scooter;
    onSelect: (scooter: Scooter) => void;
};


export const ScooterMarker: React.FC<ScooterMarkerProps> = ({ scooter, onSelect }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current) return;
        (ref.current as any).addEventListener('click', () => {
            onSelect(scooter);
        });
    }, [ref.current]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Marker
            ref={ref}
            icon={markersByType[scooter.service]}
            position={[scooter.location.lat, scooter.location.lon]}
        />
    );
}
