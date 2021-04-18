import * as React from 'react';
import { Modal } from '../Modal/Modal';

import { ScooterDescriptionListItem } from './ScooterDescriptionListItem';

import { Scooter } from '../../entitites/Scooter';


export type ScooterDescriptionProps = {
  open: boolean;
  scooter?: Scooter;
  handleClose: () => void;
}


export const ScooterDescription: React.FC<ScooterDescriptionProps> = ({ open, scooter, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      title={scooter ? `${scooter.type} | ${scooter.title}` : ''}
    >
      <div className="right-0 w-100 mt-2 bg-white divide-y divide-gray-100 rounded-md focus:outline-none" role="menu">
        <div className="px-1 py-1 " role="none">
          <ScooterDescriptionListItem title="Type" value={scooter?.type} />
          <ScooterDescriptionListItem title="Name" value={scooter?.title} />
        </div>
        <div className="px-1 py-1 " role="none">
          <ScooterDescriptionListItem title="Battery" value={`${scooter?.battery}%`} />
        </div>
      </div>
    </Modal>
  );
}

