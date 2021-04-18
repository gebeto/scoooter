import * as React from 'react';
import { Modal } from '../Modal/Modal';

// import { Battery } from './Battery';
import { ScooterDescriptionListItem } from './ScooterDescriptionListItem';
import { Scooter } from '../../entitites/Scooter';


export type ScooterDescriptionProps = {
  handleClose: () => void;
  scooter?: Scooter;
}

export const ScooterDescription: React.FC<ScooterDescriptionProps> = ({ scooter, handleClose }) => {
  // if (!scooter) {
  //   return null;
  // }

  return (
    <Modal
      open={!!scooter}
      onClose={() => handleClose()}
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

