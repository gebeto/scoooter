import React from 'react';
import { Map } from './components/Map';
import { ScooterDescription } from './components/ScooterDescription';
import { Scooter } from './entitites/Scooter';


export const App = () => {
  const [scooter, setScooter] = React.useState<Scooter | undefined>(undefined);

  return (
    <React.Fragment>
      <ScooterDescription scooter={scooter} handleClose={() => setScooter(undefined)} />
      <Map onScooterSelect={setScooter} />
    </React.Fragment>
  );
}

