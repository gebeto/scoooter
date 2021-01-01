import * as L from 'leaflet';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import { styled } from 'baseui';

import { Marker } from 'react-leaflet';

import kiwiIcon from './icon-kiwi.svg';
import ewingsIcon from './icon-ewings.svg';


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
}


export const ScooterMarker = ({ scooter, onClick }: any) => {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!ref.current) return;
		const element = (ref.current as any).getElement();
		(ref.current as any).addEventListener('click', () => {
			onClick(scooter);
		});
	}, [ ref.current ]);

	return (
		<Marker
			ref={ref}
			icon={markersByType[scooter.type]}
			position={[scooter.location.lat, scooter.location.lon]}
		/>
	);
}
