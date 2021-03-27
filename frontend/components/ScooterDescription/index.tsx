import * as React from 'react';
import { Drawer, ANCHOR } from "baseui/drawer";
import { Display4 } from 'baseui/typography';

import { Battery } from './Battery';
import { ScooterDescriptionListItem } from './ScooterDescriptionListItem';


export type ScooterDescriptionProps = {
  handleClose: () => void;
  scooter?: {
    type: string;
    title: string;
    battery: number;
  };
}

export const ScooterDescription: React.FC<ScooterDescriptionProps> = ({ scooter, handleClose }) => {
  if (!scooter) {
    return null;
  }

  return (
    <Drawer autoFocus isOpen={!!scooter} onClose={handleClose} anchor={ANCHOR.bottom}>
      <Display4>{scooter.title}</Display4>
      <Battery value={scooter.battery} />
      <ul>
        <ScooterDescriptionListItem title="Type" value={scooter.type} />
        <ScooterDescriptionListItem title="Name" value={scooter.title} />
        <ScooterDescriptionListItem title="Battery" value={scooter.battery} />
      </ul>
    </Drawer>
  );
}