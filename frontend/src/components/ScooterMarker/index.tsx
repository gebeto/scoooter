import L from 'leaflet';
import React from 'react';

import { Marker } from 'react-leaflet';

import kiwiIcon from './icon-kiwi.svg';
import ewingsIcon from './icon-ewings.svg';
import { Scooter } from '../../entitites/Scooter';


const kiwiMarker = L.icon({
    iconUrl: kiwiIcon,
    iconSize: [34, 34],
    iconAnchor: [17, 0],
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

const markersByType: any = {
    kiwi: kiwiMarker,
    ewings: ewingsMarker,
};


export type ScooterMarkerProps = {
    scooter: Scooter;
    onClick(scooter: Scooter): void;
};


export const ScooterMarker: React.FC<ScooterMarkerProps> = ({ scooter, onClick }) => {
    const ref = React.useRef(null);

    React.useEffect(() => {
        if (!ref.current) return;
        (ref.current as any).addEventListener('click', () => {
            onClick(scooter);
        });
    }, [ref.current]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Marker
            ref={ref}
            icon={markersByType[scooter.type]}
            position={[scooter.location.lat, scooter.location.lon]}
        />
    );
}
