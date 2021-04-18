import React from 'react';

import { ScootersMap } from './components/ScootersMap';
import { ScooterDescription } from './components/ScooterDescription';
import { Scooter } from './entitites/Scooter';

export const LVIV_CENTER: L.LatLngTuple = [49.8360948918759, 24.025636129081246];

export async function fetchScooters() {
  const response = await fetch("/scooters.json");
  const scooters = await response.json() as Scooter[];
  return scooters;
}


export const App = () => {
  const [scooters, setScooters] = React.useState<Scooter[]>([]);
  const [scooter, setScooter] = React.useState<Scooter>();

  React.useEffect(() => {
    fetchScooters().then(setScooters);
  }, []);

  return (
    <React.Fragment>
      <ScooterDescription open={!!scooter} scooter={scooter} handleClose={() => setScooter(undefined)} />
      <ScootersMap center={LVIV_CENTER} scooters={scooters} onScooterSelect={setScooter} />
    </React.Fragment>
  );
}

